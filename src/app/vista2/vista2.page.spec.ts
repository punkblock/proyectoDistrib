import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista2Page } from './vista2.page';

describe('Vista2Page', () => {
  let component: Vista2Page;
  let fixture: ComponentFixture<Vista2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
