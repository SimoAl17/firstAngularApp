import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListElementComponent } from './task-list-element.component';

describe('TaskListElementComponent', () => {
  let component: TaskListElementComponent;
  let fixture: ComponentFixture<TaskListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
