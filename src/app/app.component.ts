import { Component, Input, OnInit } from '@angular/core';
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
  constructor(){
    var imagePath ="./assets/3-2-thor-transparent.png";
    const content = Array<Content>();
  }
  
  title = 'A_Vaddoriya_WEB601Assignment_MyFavouriteAvenger';
  contList!: Content;
  public avengerName = "Thor";
  public power = "Thunder";
  public disc = "1500" ;
  public searchItem = "";
  contentExist : boolean = false;
  
 contentList  (params:Array<Content>) {
    this.contList.id = 101;
    this.contList.name = "Thor";
    this.contList.discription = "The God of the Thunder"
  }
  search(){
    this.contentExist = true;
  }
}
