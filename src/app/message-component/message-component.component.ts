import { Component } from '@angular/core';
import { MessageService } from '../helper-files/MessageService';

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent {
  messages: string[] =[];
  ngOnInit(){
    
  }
  constructor(private messageServices: MessageService){
    this.messageServices.getMessages.subscribe((message: string) => {
        this.messages.push(message);
    })
  }
}
