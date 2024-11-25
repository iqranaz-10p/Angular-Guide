import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NgFor, NgIf } from '@angular/common';
import { Task, TaskData } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";

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

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
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

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: TaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      ...taskData
    })
    this.isAddingTask = false;
  }
}
