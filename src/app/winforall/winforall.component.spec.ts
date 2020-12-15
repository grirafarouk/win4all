import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinforallComponent } from './winforall.component';

describe('WinforallComponent', () => {
  let component: WinforallComponent;
  let fixture: ComponentFixture<WinforallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinforallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinforallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
