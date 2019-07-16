import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista3Page } from './vista3.page';

describe('Vista3Page', () => {
  let component: Vista3Page;
  let fixture: ComponentFixture<Vista3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
