import { Component, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponentComponent } from './dialog-box-component/dialog-box-component.component';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css',]
})
export class ModifyContentComponentComponent {
  // newContent!: Content;
  // emptyContent!: Content ;
  // constructor(private contentDbService: contentDb ){
  // }
  constructor(private dialog: MatDialog){

  }

  openDialog(): void{
    this.dialog.open(DialogBoxComponentComponent,{
      data:{
        panelClass: 'dialog-container',
        message: "hey"
      }
    });
  }

  // addContent(id: any,name: any,discription: any,creator: any,imgURL: any,type: any,tags: any){
  //   this.newContent.id = id;
  //   this.newContent.name = name;
  //   this.newContent.discription = discription;
  //   this.newContent.creator = creator;
  //   this.newContent.imgURL = imgURL;
  //   this.newContent.type = type;
  //   this.newContent.tags = tags;
  //   this.contentDbService.addContent(this.newContent)
  //       .subscribe(()=>{
  //         this.newContent = this.emptyContent;
  //     })
  // }
}
