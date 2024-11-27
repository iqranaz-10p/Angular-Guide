import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent,
        NewTaskComponent
    ],
    exports: [
        TasksComponent //it is being used in app component. others are not 
    ],
    imports: [
        CommonModule,
        FormsModule // This is required for ngModel and DataBinding of DatePipe
    ]
})

export class TasksModule {}
