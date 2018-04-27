﻿import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class Const {
    public static readonly TOKEN: string = 'access_token';
    public static readonly URL_PARAM_TOKEN: string = '?' + Const.TOKEN + '=';
    public static readonly CHANNEL: string = 'channel';
    public static readonly LOGIN_USER: string = 'loginUser';
    public static readonly USER_TYPE: string = 'userType';
    public static readonly ADMIN_ROLE_CODE: string = 'admin';
    //測試
    // public static readonly AUTH_URL: string = 'http://192.168.8.109:18081/';
    // public static readonly BACK_END_URL: string = 'http://192.168.8.109:65006/';
    // public static readonly SOCKET_BACK_END_URL: string = 'http://192.168.8.109:9092/';
    //正式
    public static readonly AUTH_URL: string = 'http://192.168.148.169:18081/';
    public static readonly BACK_END_URL: string = 'http://192.168.148.169:65006/';
    public static readonly SOCKET_BACK_END_URL: string = 'http://192.168.148.169:9092/';

    public static readonly AUTH_ACCOUNT: string = 'ts-client';
    public static readonly AUTH_PASSWORD: string = 'ts-secret';

}