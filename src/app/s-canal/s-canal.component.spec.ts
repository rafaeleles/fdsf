/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SCanalComponent } from './s-canal.component';

describe('SCanalComponent', () => {
  let component: SCanalComponent;
  let fixture: ComponentFixture<SCanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
