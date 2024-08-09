// import { Injectable, ComponentRef, ViewContainerRef, Injector } from '@angular/core';
// import ModalDialogComponent from '../components/dialog/dialog.component';
// import ModalContentComponent from '../components/dialog-content/dialog-content.component';

// @Injectable({ providedIn: 'root' })
// export class ModalService {
//   private modalRef: ComponentRef<any> | undefined;

//   constructor(private injector: Injector) {}

//   openModal(container: ViewContainerRef): void {
//     if (!this.modalRef) {
//       // Статический импорт модального компонента
//       this.modalRef = container.createComponent(ModalDialogComponent, { injector: this.injector });

//       // Статический импорт контента модального компонента
//       this.modalRef.instance.viewContainerRef.createComponent(ModalContentComponent);
//       this.modalRef.instance.closeModalSignal.set(false);

//       this.modalRef.instance.closeModalSignal.subscribe(() => {
//         if (this.modalRef!.instance.closeModalSignal()) {
//           this.closeModal();
//         }
//       });
//     }
//   }

//   closeModal(): void {
//     if (this.modalRef) {
//       this.modalRef.destroy();
//       this.modalRef = undefined;
//     }
//   }
// }
