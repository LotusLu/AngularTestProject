import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class Const {
    public static readonly TOKEN: string = 'access_token';
    public static readonly CHANNEL: string = 'channel';
    public static readonly LOGIN_USER: string = 'loginUser';
    public static readonly USER_TYPE: string = 'userType';
    public static readonly ADMIN_ROLE_CODE: string = 'admin';
    public static readonly BACK_END_URL: string = 'http://192.168.8.102:2222/';
    public static readonly SOCKET_BACK_END_URL: string = 'http://192.168.8.102:9092/';

}