import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { ContentCardComponentComponent } from './content-card-component/content-card-component.component';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  
  tags = [
    { name: 'Loki', hover: false },
    { name: 'Sif', hover: false },
    { name: 'Yondu', hover: false }
  ];
  constructor(){
    var imagePath ="./assets/3-2-thor-transparent.png";
    const content = Array<Content>();
    const isHovered = false;
  }
  
  title = 'A_Vaddoriya_WEB601Assignment_MyFavouriteAvenger';
  contList!: Content;
  public avengerName = "Thor";
  public power = "Thunder";
  public disc = "1500" ;
  public searchItem = "";
  contentExist : boolean = false;
  content: Array<Content> = [];

  
 contentList  (params:Array<Content>) {
    this.contList.id = 101;
    this.contList.name = "Thor";
    this.contList.discription = "The God of the Thunder"
  }
  search(){
    this.contentExist = true;
  }
  OnSubmit(id: any,name: any,power: any){
    this.content.push(id.value,name.value,power.value);
    id.value ="";
    name.value ="";
    power.value="";
    }
}
function Directives(arg0: {}) {
  throw new Error('Function not implemented.');
}

