import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktoTopComponent } from './backto-top.component';

describe('BacktoTopComponent', () => {
  let component: BacktoTopComponent;
  let fixture: ComponentFixture<BacktoTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacktoTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacktoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
