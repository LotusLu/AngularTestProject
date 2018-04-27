import { Injectable } from '@angular/core';
import { Const } from '../../../../share/constant/const';

@Injectable()
export class IconsService {

  icons = {
    adminFunction: [
      {
        color: 'success',
        img: 'Laptop-Signal',
        name: '企業上傳',
        path: '/pages/payment'
      },
      {
        color: 'warning',
        img: 'Euro-Coin',
        name: '繳費',
        path: '/pages/paymentFee'
      },
      {
        color: 'primary',
        img: 'Money-Increase',
        name: '繳費單查詢',
        path: '/pages/paymentEnquery'
      },
      {
        color: 'danger',
        img: 'Checklist',
        name: '兌換匯率查詢',
        path: '/pages/rateEnquery'
      },
      {
        color: 'info',
        img: 'Bell',
        name: '批次測試',
        path: '/pages/batch'
      }

    ],
    userFunction: [
      {
        color: 'warning',
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
        color: 'danger',
        img: 'Checklist',
        name: '兌換匯率查詢',
        path: '/pages/rateEnquery'
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
