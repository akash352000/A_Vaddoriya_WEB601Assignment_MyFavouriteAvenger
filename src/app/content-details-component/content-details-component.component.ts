import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvengerService } from '../helper-files/AvengerService';
import { MessageService } from '../helper-files/MessageService';

@Component({
  selector: 'app-content-details-component',
  templateUrl: './content-details-component.component.html',
  styleUrls: ['./content-details-component.component.css']
})
export class ContentDetailsComponentComponent {
  contentId!: number;
  contentItem: any;
  constructor(private route: ActivatedRoute, private avengerService: AvengerService,private messageService: MessageService){
  }
  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(params=>{
      this.contentId = +params['id'];
      this.avengerService.getContent().subscribe(item =>{
        this.contentItem = item;
      })
    })
    this.avengerService.getContent()
      .subscribe(content => {
        this.contentItem = content;
        this.messageService.add(`ContentDetail: id=${id} title=${this.contentItem}`)
    })
  }
}
