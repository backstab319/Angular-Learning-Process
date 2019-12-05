import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloAppComponent } from './hello-app.component';

describe('HelloAppComponent', () => {
  let component: HelloAppComponent;
  let fixture: ComponentFixture<HelloAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
