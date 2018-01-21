import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamodelmapComponent } from './datamodelmap.component';

describe('DatamodelmapComponent', () => {
  let component: DatamodelmapComponent;
  let fixture: ComponentFixture<DatamodelmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamodelmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamodelmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
