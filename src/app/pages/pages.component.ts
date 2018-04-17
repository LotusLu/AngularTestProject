import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU, USER_PAGES_MENU } from './pages.menu';
import { SocketService } from './broadcast/shared/services/socket.service';
import { Action } from './broadcast/shared/model/action';
import { User } from './broadcast/shared/model/user';
import { Message } from './broadcast/shared/model/message';
import { Event_CONNECT, Event_DISCONNECT } from './broadcast/shared/model/event';
import { DefaultModal } from './ui/components/modals/default-modal/default-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Const } from '../share/constant/const';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    
    <ba-back-top position="200"></ba-back-top>
    `
})

export class Pages {
  functions: any;
  action = Action
  user: User;
  // messages: Message[] = [];
  messageContent: string;
  ioConnection: any;

  constructor(private _menuService: BaMenuService,
    private socketService: SocketService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    let CURRENT_PAGES_MENU;
    if (Const.ADMIN_ROLE_CODE === sessionStorage.getItem(Const.USER_TYPE)) {
      CURRENT_PAGES_MENU = PAGES_MENU;
    } else {
      CURRENT_PAGES_MENU = USER_PAGES_MENU;
    }
    this._menuService.updateMenuByRoutes(CURRENT_PAGES_MENU);
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: string) => {
        this.staticModalShow(message);
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

  private staticModalShow(message:string) {
    const activeModal = this.modalService.open(DefaultModal, {
      size: 'sm',
      backdrop: 'static'
    });
    activeModal.componentInstance.modalHeader = '推播通知';
    activeModal.componentInstance.modalContent = message;
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
