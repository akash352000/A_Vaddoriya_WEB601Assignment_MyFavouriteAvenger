import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface'


@Component({  
  selector: 'app-content-card-component',
  templateUrl: './content-card-component.component.html',
  styleUrls: ['./content-card-component.component.css']
})
export class ContentCardComponentComponent implements OnInit {
  contList: Array<Content>;
  conts: any;
  @Input() imgPath = "";
  constructor(message: Array<Content>){
    this.contList = message; 
    var imagePath ="./assets/3-2-thor-transparent.png";
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ContentList(){
    
    this.conts.id = 101;
    this.conts.name = "Thor";
    this.conts.discription = "God of the Thunder";
    this.conts.creator = "Stan Lee";
    this.conts.id = 102;
    this.conts.name = "Loki";
    this.conts.discription = "Megician";
    this.conts.creator = "Stan Lee";
    this.conts.id = 103;
    this.conts.name = "Hela";
    this.conts.discription = "Goddess of Death";
    this.conts.creator = "Stan Lee";
    this.contList.push(this.conts);
    this.contList.push(this.conts);
    this.contList.push(this.conts);
     return this.contList; 
  }
  }