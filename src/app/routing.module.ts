import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildEventsComponent } from './child-events/child-events.component';
import { CommunicationWithServicesComponent } from './communication-with-services/communication-with-services.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { DynamicComponentsFactoryResolverComponent } from './dynamic-components-factory-resolver/dynamic-components-factory-resolver.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { InterpolationAndTemplateStatementsComponent } from './interpolation-and-template-statements/interpolation-and-template-statements.component';
import { PipesComponent } from './pipes/pipes.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';

const routes: Routes = [
  {
    path: 'lifecycle',
    component: ComponentLifecycleComponent
  },
  {
    path: 'input-properties',
    component: InputPropertiesComponent
  },
  {
    path: 'child-events',
    component: ChildEventsComponent
  },
  {
    path: 'service-communication',
    component: CommunicationWithServicesComponent
  },
  {
    path: 'theme-selector',
    component: ThemeSelectorComponent
  },
  {
    path: 'input-output',
    component: InputOutputComponent
  },
  {
    path: 'dynamic-components',
    component: DynamicComponentsFactoryResolverComponent
  },
  {
    path: 'interpolation-and-template-statements',
    component: InterpolationAndTemplateStatementsComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lifecycle'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutingModule { }
