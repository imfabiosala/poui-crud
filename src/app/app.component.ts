import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private proAppConfigService: ProAppConfigService) {
    if (!this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
    }
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Início', icon: 'po-icon-home', shortLabel: 'Início', link: '/' },
    { label: 'Fornecedores', icon: 'po-icon-handshake', shortLabel: 'Fornec.', link: '/vendor/list' },
    { label: 'Sair', action: this.closeApp.bind(this), icon: 'po-icon-exit', shortLabel: 'Sair', link: '#' }
  ];

  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert('Esta função funciona apenas quando esta rotina é executada através do TOTVS Protheus.');
    }
  }

}