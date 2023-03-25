import { NgModule } from '@angular/core';
import { ErrorSpanDirective } from './directives/error-span.directive';



@NgModule({
  declarations: [ErrorSpanDirective],
  exports: [
    ErrorSpanDirective
  ]
})
export class SharedModule { }
