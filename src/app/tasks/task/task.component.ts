import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { TaskServices } from '../tasks.service';

@Component({
  selector: 'app-task',
  // standalone: true,
  // imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private taskServices = inject(TaskServices)

  onTaskComplete() {
    this.taskServices.removeTask(this.task.id);
  }
}
