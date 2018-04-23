import { Injectable } from '@angular/core';
import { Const } from '../../../../share/constant/const';

@Injectable()
export class IconsService {

  icons = {
    adminFunction: [
      {
        color: 'danger',
        img: 'Laptop-Signal',
        name: '企業上傳',
        path: '/pages/payment'
      },
      {
        color: 'danger',
        img: 'Euro-Coin',
        name: '繳費',
        path: '/pages/paymentFee'
      },
      {
        color: 'warning',
        img: 'Money-Increase',
        name: '繳費單查詢',
        path: '/pages/paymentEnquery'
      },
      {
        color: 'warning',
        img: 'Bell',
        name: '批次測試',
        path: '/pages/batch'
      }

    ],
    userFunction: [
      {
        color: 'warning',
        img: 'Money-Increase',
        name: '繳費單查詢',
        path: '/pages/paymentEnquery'
      }

    ],
  };

  getFunctionList(): any {
    if (Const.ADMIN_ROLE_CODE === sessionStorage.getItem(Const.USER_TYPE)) {
      return this.icons['adminFunction'];
    } else {
      return this.icons['userFunction'];
    }

  }
}
