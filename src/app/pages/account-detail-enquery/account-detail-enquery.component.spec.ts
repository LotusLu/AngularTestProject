import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailEnqueryComponent } from './account-detail-enquery.component';

describe('AccountDetailEnqueryComponent', () => {
  let component: AccountDetailEnqueryComponent;
  let fixture: ComponentFixture<AccountDetailEnqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDetailEnqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailEnqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
