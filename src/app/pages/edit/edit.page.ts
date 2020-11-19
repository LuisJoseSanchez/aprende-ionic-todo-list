import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  task: Task = {title: '', description: ''};
  
  constructor(
    private tasksService: TasksService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveTask() {
    this.tasksService.saveTask(this.task);
    this.router.navigateByUrl('/');
  }
}
