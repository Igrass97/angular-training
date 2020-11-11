import { ComponentRef, EventEmitter } from '@angular/core';

export interface DynamicComponent {
    msg: string;
    componentRef: ComponentRef<DynamicComponent>;
    onModalClose: EventEmitter<string>;
}
