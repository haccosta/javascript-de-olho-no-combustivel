import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  opened = true;
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  exibirBotaoCadastrar(): boolean {
    if (
      this.router.url.includes('criarAbastecimento') ||
      this.router.url.includes('editarAbastecimento')
    ) {
      return false;
    }

    return true;
  }

  exibirBotaoVoltar(): boolean {
    if (
      this.router.url.includes('criarAbastecimento') ||
      this.router.url.includes('editarAbastecimento')
    ) {
      return true;
    }

    return false;
  }
}
