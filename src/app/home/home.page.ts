import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private tasksService: TasksService,
    private router: Router
  ) { }

  goEditTask() {
    this.router.navigateByUrl('/edit');
  }
}
