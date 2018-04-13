import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU, USER_PAGES_MENU } from './pages.menu';
import { ADMIN_ROLE_CODE, USER_TYPE } from '../service/const';

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

  constructor(private _menuService: BaMenuService, ) {
  }

  ngOnInit() {
    let CURRENT_PAGES_MENU;
    if (ADMIN_ROLE_CODE === sessionStorage.getItem(USER_TYPE)){
        CURRENT_PAGES_MENU=PAGES_MENU;
    }else{
        CURRENT_PAGES_MENU=USER_PAGES_MENU;
    }
    this._menuService.updateMenuByRoutes(CURRENT_PAGES_MENU);
  }
}
