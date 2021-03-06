import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CoreModule} from '../core/core.module';
import {StoreModule} from '../store/store.module';
import {MakeRedDirective} from './directives/make-red.directive';
import {RoutingModule} from '../routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,
    StoreModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,
    StoreModule,
    CapitalizePipe, MakeRedDirective
  ],
  declarations: [CapitalizePipe, MakeRedDirective],
})
export class SharedModule {
}
