import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-CaduComponent',
  templateUrl: './CaduComponent.component.html',
  styleUrls: ['./CaduComponent.component.css']
})
export class CaduComponentComponent implements OnInit {

  @Input() isVisible2: boolean = false;
  @Input() titulo: string = 'Header';
  @Input() dimensoes: string = 'placeholder';

  urlValue: string = ''; 


  onUrlChange(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    const urlValue = inputElement.value;
    this.urlValue = urlValue;
  }

  urlValue2: string = ''; 


  onUrlChange2(event: any): void {
    const inputElement2 = event.target as HTMLInputElement;
    const urlValue2 = inputElement2.value;
    this.urlValue2 = urlValue2;
  }

  textValue: string = ''; 


  onTextChatChange(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    const textValue = inputElement.value;
    this.textValue = textValue;
  }

  textValue2: string = ''; 


  onTextNotificacaoChange(event: any): void {
    const inputElement2 = event.target as HTMLInputElement;
    const textValue2 = inputElement2.value;
    this.textValue2 = textValue2;
  }
  

  areInputsFilled(): boolean {
    return !!this.textValue && !!this.urlValue && !!this.textValue2 && !!this.urlValue2;
  }

  constructor() { }

  ngOnInit() {
    
  }


}
