import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend.component';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ BackendComponent ],
  exports:      [ BackendComponent ]
})
export class GoBackendModule {
//   constructor(@Optional() @SkipSelf() parentModule?: GoBackendModule) {
//     if (parentModule) {
//       throw new Error(
//         'GreetingModule is already loaded. Import it in the AppModule only');
//     }
//   }

//   static forRoot(config: Config): ModuleWithProviders<GoBackendModule> {
//     return {
//       ngModule: GoBackendModule,
//       providers: []
//     };
//   }
}
