import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { BillComponent } from './bill/bill.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ConverterComponent } from './converter/converter.component';
import { TaxComponent } from './tax/tax.component';
import { VolumeComponent } from './volume/volume.component';
import{FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    BillComponent,
    CalculatorComponent,
    ConverterComponent,
    TaxComponent,
    VolumeComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
