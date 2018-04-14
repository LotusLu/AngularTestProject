import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

export const TOKEN = 'access_token';
export const CHANNEL = 'channel';
export const LOGIN_USER = 'loginUser';
export const USER_TYPE = 'userType';
export const ADMIN_ROLE_CODE = 'admin';

@Injectable()
export class Const {
   
}