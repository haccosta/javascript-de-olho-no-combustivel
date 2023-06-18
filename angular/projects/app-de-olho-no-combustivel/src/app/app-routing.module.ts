import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAbastecimentoComponent } from './components/listar-abastecimento/listar-abastecimento.component';
import { CriarAbastecimentoComponent } from './components/criar-abastecimento/criar-abastecimento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarRegistroAbastecimento',
    pathMatch: 'full'

},
 {
  path: 'listarRegistroAbastecimento',
  component: ListarAbastecimentoComponent
},

{
  path: 'criarAbastecimento',
  component: CriarAbastecimentoComponent
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
