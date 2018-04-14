import { Component, OnInit } from '@angular/core';

import { Action } from './shared/model/action';
import { Message } from './shared/model/message';
import { User } from './shared/model/user';
import { SocketService } from './shared/services/socket.service';
import { Event_CONNECT, Event_DISCONNECT } from './shared/model/event';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from '../ui/components/modals/default-modal/default-modal.component';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss']
})
export class BroadcastComponent implements OnInit {

  action = Action;
  user: User;
  messages: Message[] = [];
  messageContent: string;
  ioConnection: any;

  constructor(private socketService: SocketService,
  ) {
  }

  ngOnInit(): void {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    console.log("initIoConnection!");
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
      });

    this.socketService.onEvent(Event_CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(Event_DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }

    this.socketService.send({
      from: this.user,
      content: message
    });
    this.messageContent = null;
  }

  public sendNotification(params: any, action: Action): void {
    let message: Message;

    if (action === Action.JOINED) {
      message = {
        from: this.user,
        action: action
      }
    } else if (action === Action.RENAME) {
      message = {
        action: action,
        content: {
          username: this.user.name,
          previousUsername: params.previousUsername
        }
      };
    }

    this.socketService.send(message);
  }

}
