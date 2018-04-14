export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'workingSpace',
        data: {
          menu: {
            title: '首頁',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'payment',
        data: {
          menu: {
            title: '企業上傳',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'paymentEnquery',
        data: {
          menu: {
            title: '繳費單查詢',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'batch',
        data: {
          menu: {
            title: '批次測試',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }
    ]
  },
  {
    path: 'login',
    data: {
      menu: {
        title: '登出',
        icon: 'ion-android-exit',
        selected: false,
        expanded: false,
        order: 750
      }
    }
  }
];

export const USER_PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'workingSpace',
        data: {
          menu: {
            title: '首頁',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'paymentEnquery',
        data: {
          menu: {
            title: '繳費單查詢',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }
    ]
  },
  {
    path: 'login',
    data: {
      menu: {
        title: '登出',
        icon: 'ion-android-exit',
        selected: false,
        expanded: false,
        order: 750
      }
    }
  }
];
