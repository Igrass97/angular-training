import { Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicComponent } from '../dynamic-component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, DynamicComponent {
  @Input() msg: string;
  @Input() componentRef: ComponentRef<DynamicComponent>;
  @Output() onModalClose: EventEmitter<string> = new EventEmitter<string>();

  public outputData: string;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.onModalClose.emit(this.outputData);
    this.componentRef.destroy();
  }
}
