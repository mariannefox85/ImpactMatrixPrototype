import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ImpactMatrixComponent } from './impact-matrix/impact-matrix.component';
import { FormsModule } from '@angular/forms';
import { ShellImpactMatrixComponent } from './impact-matrix-key/impact-matrix-key.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpactMatrixComponent,
    ShellImpactMatrixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
