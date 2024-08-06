import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsalAuthComponent } from './msal-auth.component';

describe('MsalAuthComponent', () => {
  let component: MsalAuthComponent;
  let fixture: ComponentFixture<MsalAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsalAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsalAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
