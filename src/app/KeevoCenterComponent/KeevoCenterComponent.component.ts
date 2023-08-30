import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-KeevoCenterComponent',
  templateUrl: './KeevoCenterComponent.component.html',
  styleUrls: ['./KeevoCenterComponent.component.css']
})
export class KeevoCenterComponentComponent implements OnInit {
  @Input() isVisible1: boolean = false;
  @Input() titulo: string = 'Header';
  @Input() dimensoes: string = 'placeholder';

  croppedImage1: string = '';

  constructor() { }

  onFileChange1(event: any): void {

    const file1 = event.target.files[0];

    if (file1) {

      const reader = new FileReader();

      reader.onload = (e: any) => {

        const image1 = new Image();
        image1.src = e.target.result;
        image1.onload = () => {

          const canvas1 = document.createElement('canvas');

          const ctx1 = canvas1.getContext('2d');
  
          if (ctx1) {
            canvas1.width = 1543;
            canvas1.height = 407;
  
            const sourceX = 0;
            const sourceY = 0;
            const sourceWidth = image1.width;
            const sourceHeight = image1.height;
            const destWidth = 805;
            const destHeight = 380;
            const destX = 0;
            const destY = 0;
  
            ctx1.drawImage(
              image1,
              sourceX,
              sourceY,
              sourceWidth,
              sourceHeight,
              destX,
              destY,
              destWidth,
              destHeight
            );
  
            this.croppedImage1 = canvas1.toDataURL('image1/jpeg');
          } else {
            console.error('Canvas context is null.');
          }
        };
      };
      reader.readAsDataURL(file1);
      
    }
  }

  urlValue: string = ''; 

  onUrlChange(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    const urlValue = inputElement.value;
    this.urlValue = urlValue;
  }
  
  areInputsFilled(): boolean {
    return !!this.croppedImage1 && !!this.urlValue 
  }

  ngOnInit() {
  }

}
