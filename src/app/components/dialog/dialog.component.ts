import { Component, ViewChild, ViewContainerRef, signal } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  template: `<div class="flex items-center h-32 w-32 bg-slate-600">
    <div>
      <ng-container #modalContentContainer></ng-container>
      <button class="text-black" (click)="close()">Close</button>
    </div>
  </div>`,
  styleUrl: './dialog.component.scss',
})
export default class ModalDialogComponent {
  @ViewChild('modalContentContainer', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  closeModalSignal = signal(false);

  close() {
    console.log('Close button clicked');
    this.closeModalSignal.set(true);
    console.log('Signal set to true');
  }
}
