export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'workingSpace',
        data: {
          menu: {
            title: 'general.menu.workingSpace',
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
            title: 'general.menu.payment',
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
            title: 'general.menu.paymentEnquery',
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
            title: 'general.menu.batch',
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
        title: 'general.menu.logout',
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
            title: 'general.menu.workingSpace',
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
            title: 'general.menu.paymentEnquery',
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
        title: 'general.menu.logout',
        icon: 'ion-android-exit',
        selected: false,
        expanded: false,
        order: 750
      }
    }
  }
];
