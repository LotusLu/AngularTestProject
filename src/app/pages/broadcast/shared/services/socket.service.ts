import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Message } from '../model/message';

import * as socketIo from 'socket.io-client';

//const SERVER_URL = 'http://localhost:8080';
const SERVER_URL = 'http://192.168.8.102:9092/';

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
        console.log("onMessage");
        return new Observable<string>(observer => {
            console.log("ObservableonMessage");
            this.socket.on('message', (data: string) => observer.next(data));
        });
    }

    public onEvent(event: any): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}