import { Component, NgModule } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { contentDb } from '../helper-files/contentDb';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css',]
})
export class ModifyContentComponentComponent {
  newContent!: Content;
  emptyContent!: Content ;
  constructor(private contentDbService: contentDb ){
  }

  addContent(id: any,name: any,discription: any,creator: any,imgURL: any,type: any,tags: any){
    this.newContent.id = id;
    this.newContent.name = name;
    this.newContent.discription = discription;
    this.newContent.creator = creator;
    this.newContent.imgURL = imgURL;
    this.newContent.type = type;
    this.newContent.tags = tags;
    this.contentDbService.addContent(this.newContent)
        .subscribe(()=>{
          this.newContent = this.emptyContent;
      })
  }
}