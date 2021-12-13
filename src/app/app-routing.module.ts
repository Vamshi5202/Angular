import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { TaxComponent } from './tax/tax.component';
import { AreaComponent } from './area/area.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { VolumeComponent } from './volume/volume.component';
import { ConverterComponent } from './converter/converter.component';
import { LoginComponent } from './login/login.component';
import { CgguardService } from './cgguard.service';


const routes: Routes = [
  {path:'bill',component:BillComponent,canActivate:[CgguardService],data:{role:'admin'}},
  {path:'tax',component:TaxComponent,canActivate:[CgguardService],data:{role:'user',}},
  {path:'area',component:AreaComponent,},
  {path:'calc',component:CalculatorComponent},
  {path:'volume',component:VolumeComponent},
  {path:'conv',component:ConverterComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
