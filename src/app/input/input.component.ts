import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
  <div>
  <input #inputValue [value]="title">
  <button (click)="changeTitle(inputValue.value)">
  Save
  </button>
    <p>The title is: {{ title }}</p>
 </div>
`,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string= "magic";
  @Output() submit: EventEmitter<string> = new EventEmitter();
   
  constructor() { 
      }
      ngOnInit() {
        // setTimeout(() => {
        //   this.title = 'This is not the title you are looking for';  
        // }, 10000);
      }
      changeTitle(newTitle: string): void {
        this.submit.emit(newTitle);
      }
    }
    