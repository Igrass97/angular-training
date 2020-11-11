import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildOneComponent } from './component-lifecycle/child-one/child-one.component';
import { FormsModule } from '@angular/forms';
import { ChildTwoComponent } from './input-properties/child-two/child-two.component';
import { ChildThreeComponent } from './child-events/child-three/child-three.component';
import { ChildFourComponent } from './communication-with-services/child-four/child-four.component';
import { ChildFiveComponent } from './communication-with-services/child-five/child-five.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { ChildEventsComponent } from './child-events/child-events.component';
import { CommunicationWithServicesComponent } from './communication-with-services/communication-with-services.component';
import { RoutingModule } from './routing.module';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildSixComponent } from './input-output/child-six/child-six.component';
import { DynamicComponentsFactoryResolverComponent } from './dynamic-components-factory-resolver/dynamic-components-factory-resolver.component';
import { AnchorPointDirective } from './dynamic-components-factory-resolver/anchor-point.directive';
import { ChildSevenComponent } from './dynamic-components-factory-resolver/child-seven/child-seven.component';
import { ChildEightComponent } from './dynamic-components-factory-resolver/child-eight/child-eight.component';
import { ModalComponent } from './dynamic-components-factory-resolver/modal/modal.component';
import { InterpolationAndTemplateStatementsComponent } from './interpolation-and-template-statements/interpolation-and-template-statements.component';
import { PipesComponent } from './pipes/pipes.component';
import { CapitalizeSentencePipe } from './pipes/capitalize-sentence.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ChildFourComponent,
    ChildFiveComponent,
    NavigationComponent,
    ComponentLifecycleComponent,
    InputPropertiesComponent,
    ChildEventsComponent,
    CommunicationWithServicesComponent,
    ThemeSelectorComponent,
    InputOutputComponent,
    ChildSixComponent,
    DynamicComponentsFactoryResolverComponent,
    AnchorPointDirective,
    ChildSevenComponent,
    ChildEightComponent,
    ModalComponent,
    InterpolationAndTemplateStatementsComponent,
    PipesComponent,
    CapitalizeSentencePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
