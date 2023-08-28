import { Component, OnInit } from '@angular/core';
import { MensageriaNGComponentComponent } from '../MensageriaNGComponent/MensageriaNGComponent.component';
import { KeevoCenterComponentComponent } from '../KeevoCenterComponent/KeevoCenterComponent.component';

@Component({
  selector: 'app-s-canal',
  templateUrl: './s-canal.component.html',
  styleUrls: ['./s-canal.component.css']
})
export class SCanalComponent implements OnInit {
  botoes = [
    { texto: 'Mensageria NG', collapsePanelVisible: false, componente: MensageriaNGComponentComponent, titulo: 'Mensageria NG', dimensoes: 'Dimensão: 805 x 380 | Extensões: .jpg ou .png' },
    { texto: 'Keevo Center', collapsePanelVisible: false, componente: KeevoCenterComponentComponent, titulo: 'Keevo Center', dimensoes: 'Dimensão: 1543 x 407 | Extensões: .jpg ou .png' },
    { texto: 'CADU', collapsePanelVisible: false, titulo: 'CADU', dimensoes: 'Dimensão: 1543 x 407 | Extensões: .jpg ou .png' }
  ];
  
  toggleCollapsePanel(botaoIndex: number) {
    this.botoes[botaoIndex].collapsePanelVisible = !this.botoes[botaoIndex].collapsePanelVisible;
  }

  constructor() { }

  ngOnInit() {
  }

}

