import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NgFor, NgIf } from '@angular/common';
import { Task, TaskData } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskServices } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NewTaskComponent, NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;
  tasks = DUMMY_TASKS;
  isAddingTask: boolean = false;

  constructor(private taskService: TaskServices) {
    this.taskService = taskService;
  } //dependency injection

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  trackByTaskId(index: number, task: Task) {
    return task.id;
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
