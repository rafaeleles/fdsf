import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-canal',
  templateUrl: './s-canal.component.html',
  styleUrls: ['./s-canal.component.css']
})
export class SCanalComponent implements OnInit {
  botoes = [
    { texto: 'Mensageria NG', collapsePanelVisible: false, titulo: 'Mensageria NG', dimensoes: 'Dimensão: 805 x 380 | Extensões: .jpg ou .png' }
  ];

  botoes1 = [
    { texto: 'Keevo Center', collapsePanelVisible1: false, titulo: 'Keevo Center', dimensoes: 'Dimensão: 1543 x 407 | Extensões: .jpg ou .png' }
  ];

  botoes2 = [
    { texto: 'CADU', collapsePanelVisible2: false, titulo: 'CADU'}
  ];
  
  toggleCollapsePanel(botaoIndex: number) {
    this.botoes[botaoIndex].collapsePanelVisible = !this.botoes[botaoIndex].collapsePanelVisible;
  }

  toggleCollapsePanel1(botao1Index: number) {
    this.botoes1[botao1Index].collapsePanelVisible1 = !this.botoes1[botao1Index].collapsePanelVisible1;
  }

  toggleCollapsePanel2(botao2Index: number) {
    this.botoes2[botao2Index].collapsePanelVisible2 = !this.botoes2[botao2Index].collapsePanelVisible2;
  }

  constructor() { }

  ngOnInit() {
  }

}

