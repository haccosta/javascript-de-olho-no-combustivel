import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAbastecimentoComponent } from './components/listar-abastecimento/listar-abastecimento.component';
import { CriarAbastecimentoComponent } from './components/criar-abastecimento/criar-abastecimento.component';
import { ExcluirAbastecimentoComponent } from './components/excluir-abastecimento/excluir-abastecimento.component';
import { EditarAbastecimentoComponent } from './components/editar-abastecimento/editar-abastecimento.component';

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
{
  path: 'abastecimentos/excluirAbastecimento/:id',
  component: ExcluirAbastecimentoComponent
},
{
  path: 'abastecimentos/editarAbastecimento/:id',
  component: EditarAbastecimentoComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
