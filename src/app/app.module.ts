import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CirclePack } from "./visualizations/circle-pack.component";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, CirclePack],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
