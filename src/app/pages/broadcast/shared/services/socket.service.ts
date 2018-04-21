import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Message } from '../model/message';

import * as socketIo from 'socket.io-client';
import { Const } from '../../../../share/constant/const';
import { Event_DISCONNECT } from '../model/event';

const SERVER_URL = Const.SOCKET_BACK_END_URL;

@Injectable()
export class SocketService {
    private socket;

    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public send(message: Message): void {
        this.socket.emit('message', message.content);
    }

    public onMessage(): Observable<string> {
        return new Observable<string>(observer => {
            this.socket.on('message', (data: string) => observer.next(data));
        });
    }

    public onEvent(event: any): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }

    public disconnected(): void {
        if (this.socket) {
            this.socket.emit(Event_DISCONNECT);
        }
    }
}