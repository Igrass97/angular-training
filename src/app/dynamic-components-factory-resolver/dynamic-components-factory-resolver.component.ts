import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild } from '@angular/core';
import { AnchorPointDirective } from './anchor-point.directive';
import { ChildEightComponent } from './child-eight/child-eight.component';
import { ChildSevenComponent } from './child-seven/child-seven.component';
import { DynamicComponent } from './dynamic-component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-dynamic-components-factory-resolver',
  templateUrl: './dynamic-components-factory-resolver.component.html',
  styleUrls: ['./dynamic-components-factory-resolver.component.css']
})
export class DynamicComponentsFactoryResolverComponent implements OnInit {
  public componentList: Type<any>[] = [ChildSevenComponent, ChildEightComponent];
  public currentComponentIndex: number = 0;
  public closeModalData: string;

  @ViewChild(AnchorPointDirective, { static: true }) public anchorPoint: AnchorPointDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent(this.componentList[this.currentComponentIndex]);
  }

  loadComponent(component: Type<any>): void {
    // Obtaaining component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    // Using directive to get the container in which the component will be rendered
    const viewContainerRef = this.anchorPoint.viewContainerRef;
    viewContainerRef.clear();

    // Obtaining component ref and passing data to component
    const componentRef = viewContainerRef.createComponent<DynamicComponent>(componentFactory);
    componentRef.instance.msg = `I WAS ADDED DYNAMICALLY`;

    // passing view ref so the component can destroy itself
    componentRef.instance.componentRef = componentRef;

    if (componentRef.instance.onModalClose) {
      componentRef.instance.onModalClose.subscribe(modalData => this.closeModalData = modalData);
    }
  }

  nextComponent(): void {
    this.currentComponentIndex = (this.currentComponentIndex + 1) % this.componentList.length;
    this.loadComponent(this.componentList[this.currentComponentIndex]);
  }

  showModal(): void {
    this.loadComponent(ModalComponent);
  }
}
