import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks = signal<Task[]>([]);

    allTasks = this.tasks.asReadonly(); //clear seperation of data so that it could not be changed from outside

  addTask(taskData: { title: string; description: string }) {
    this.tasks.update((oldTasks) => {
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        };

        return [...oldTasks, newTask];
    });
  }

  updateTaskStatus(taskId: string, newStatus: 'OPEN' | 'IN_PROGRESS' | 'DONE') {
    this.tasks.update((oldTasks) => {
        return oldTasks.map((task) => {
            if(task.id === taskId) {
                return {
                    ...task,
                    status: newStatus
                };
            }

            return task;
        });
    });
  }
}