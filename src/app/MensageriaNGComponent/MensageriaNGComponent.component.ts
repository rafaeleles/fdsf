import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-MensageriaNGComponent',
  templateUrl: './MensageriaNGComponent.component.html',
  styleUrls: ['./MensageriaNGComponent.component.css']
})
export class MensageriaNGComponentComponent implements OnInit {

  @Input() isVisible: boolean = false;
  @Input() titulo: string = 'Header';
  @Input() dimensoes: string = 'placeholder';

  croppedImage: string = '';

  constructor() { }

  ngOnInit() {
  }

  onFileChange(event: any): void {

    const file = event.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onload = (e: any) => {

        const image = new Image();
        image.src = e.target.result;
        image.onload = () => {

          const canvas = document.createElement('canvas');

          const ctx = canvas.getContext('2d');
  
          if (ctx) {
            canvas.width = 805;
            canvas.height = 380;
  
            const sourceX = 0;
            const sourceY = 0;
            const sourceWidth = image.width;
            const sourceHeight = image.height;
            const destWidth = 805;
            const destHeight = 380;
            const destX = 0;
            const destY = 0;
  
            ctx.drawImage(
              image,
              sourceX,
              sourceY,
              sourceWidth,
              sourceHeight,
              destX,
              destY,
              destWidth,
              destHeight
            );
  
            this.croppedImage = canvas.toDataURL('image/jpeg');
          } else {
            console.error('Canvas context is null.');
          }
        };
      };
      reader.readAsDataURL(file);
      
    }
  }

  urlValue: string = ''; 

  onUrlChange(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    const urlValue = inputElement.value;
    this.urlValue = urlValue;
  }

  areInputsFilled(): boolean {
    return !!this.croppedImage && !!this.urlValue 
  }

}
