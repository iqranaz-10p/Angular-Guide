import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TaskServices } from '../tasks.service';
// import { FormsModule } from '@angular/forms';
// import { TaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private taskServices = inject(TaskServices);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskServices.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, 
    this.userId);
    this.close.emit();
  }
}
