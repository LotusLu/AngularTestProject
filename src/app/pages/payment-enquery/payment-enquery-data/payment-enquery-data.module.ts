export class PaymentEnqueryData {
  id: number;
  //姓名
  custId: string;
  //繳款期限
  paymentExpiry: string;
  //繳款期限(格式化)
  formatPaymentExpiry: string;
  //費用代碼
  feeCode: string;
  //銷帳編號
  accountNumber: string;
  //繳款金額
  accountBalance: number;
  //狀態
  paymentStatus: string;
  //通路
  appId: string;
  //銀行代碼
  bankCode: string;
  //繳款日
  paymentDate: string;

  done: boolean;

}