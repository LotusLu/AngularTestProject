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
}