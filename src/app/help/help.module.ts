import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HelpRoutingModule } from "./help-routing.module";

import { HelpComponent } from "./help.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HelpComponent],
  imports: [CommonModule, SharedModule, HelpRoutingModule]
})
export class HelpModule {}
