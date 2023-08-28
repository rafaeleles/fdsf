import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-panel',
  templateUrl: './collapse-panel.component.html',
  styleUrls: ['./collapse-panel.component.css']
})
export class CollapsePanelComponent implements OnInit {
  @Input() isVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
