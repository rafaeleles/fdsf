import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-canal',
  templateUrl: './s-canal.component.html',
  styleUrls: ['./s-canal.component.css']
})
export class SCanalComponent implements OnInit {
  botoes = [
    { texto: 'Mensageria NG', collapsePanelVisible: false },
    { texto: 'Keevo Center', collapsePanelVisible: false },
    { texto: 'CADU', collapsePanelVisible: false  }
  ];
  
  toggleCollapsePanel(botaoIndex: number) {
    this.botoes[botaoIndex].collapsePanelVisible = !this.botoes[botaoIndex].collapsePanelVisible;
  }

  constructor() { }

  ngOnInit() {
  }

}
