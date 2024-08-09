import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  inject,
  effect,
  Injector,
  runInInjectionContext,
} from '@angular/core';

@Component({
  selector: 'app-modal-display',
  standalone: true,
  imports: [],
  template: `<button (click)="openModal()">Open</button> <ng-container #modalContainer></ng-container>`,
  styleUrls: ['./dialog-display.component.scss'],
})
export default class ModalDisplayComponent {
  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;
  lazyComponentRef: ComponentRef<any> | undefined;
  private readonly injector = inject(Injector);

  openModal() {
    if (!this.lazyComponentRef) {
      // Завантажуємо ModalDialogComponent
      import('../../components/dialog/dialog.component')
        .then(({ default: ModalDialogComponent }) => {
          this.lazyComponentRef = this.modalContainer.createComponent(ModalDialogComponent, {
            injector: this.injector,
          });

          // Завантажуємо ModalContentComponent
          return import('../../components/dialog-content/dialog-content.component');
        })
        .then(({ default: ModalContentComponent }) => {
          this.lazyComponentRef!.instance.viewContainerRef.createComponent(ModalContentComponent);

          // Сигнализируем об открытии модального окна
          this.lazyComponentRef!.instance.closeModalSignal.set(false);

          // Используем runInInjectionContext для запуска эффекта в контексте инъекции
          runInInjectionContext(this.injector, () => {
            effect(() => {
              if (this.lazyComponentRef!.instance.closeModalSignal()) {
                console.log('Effect triggered, closing modal');
                this.closeModal();
              }
            });
          });
        })
        .then(null, (error) => {
          console.error('Error loading components:', error);
        });
    }
  }

  closeModal() {
    if (this.lazyComponentRef) {
      console.log('Destroying modal component');
      this.modalContainer.clear(); // Очистка контейнера
      this.lazyComponentRef.destroy();
      this.lazyComponentRef = undefined;
    }
  }
}
