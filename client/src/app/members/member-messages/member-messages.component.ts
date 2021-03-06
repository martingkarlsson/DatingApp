import { NgForm } from '@angular/forms';
import { MembersService } from './../../_services/members.service';
import { MessageService } from './../../_services/message.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() username: string;
  @Input() messages: Message[];
  messageContent: string;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    
  }

  sendMessage() {
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      this.messageForm.reset();
    })
  }
  

}
