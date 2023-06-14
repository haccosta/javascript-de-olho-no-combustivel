import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './components/form-register/form-register.component';

const routes: Routes = [
  {path: 'formRegister/operation/:title', component: FormRegisterComponent},
 // {path: '', component: FormComponent},
 // {path: '', component: DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
