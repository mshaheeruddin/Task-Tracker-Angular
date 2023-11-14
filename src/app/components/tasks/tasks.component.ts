import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { TASKS } from 'src/app/mock-test';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: Task[] = []
  constructor(private taskService : TaskService) {

  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id))
  }
  
  toggleReminder(task: Task) {
    task.reminder = !task.reminder 
    this.taskService.updateTaskReminder(task).subscribe()
  }

}
