import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Content } from 'src/app/helper-files/content-interface';

@Component({
  selector: 'app-dialog-box-component',
  templateUrl: './dialog-box-component.component.html',
  styleUrls: ['./dialog-box-component.component.css']
})
export class DialogBoxComponentComponent {
  contList!: Content;
  content: Array<Content> = [];
  constructor(private dialog: MatDialogRef<DialogBoxComponentComponent>){

  }
  OnSubmit(id: any,name: any,power: any){
    this.content.push(id.value,name.value,power.value);
    id.value ="";
    name.value ="";
    power.value="";
    }
    closeBtn(): void{
      this.dialog.close(() =>{
      });
    }
}
