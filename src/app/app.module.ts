import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ImpactMatrixComponent } from './impact-matrix/impact-matrix.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShellImpactMatrixComponent } from './impact-matrix-key/impact-matrix-key.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ImpactMatrixComponent,
    ShellImpactMatrixComponent,
  ],
    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
