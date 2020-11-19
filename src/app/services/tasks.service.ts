import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];
  taskCounter: number = 2;

  constructor() {
    this.tasks = [
      {
        id: 0,
        title: 'Ordenar el escritorio',
        description: 'Sacarlo todo, limpiar y tirar lo que no sirve.'
      },
      {
        id: 1,
        title: 'Hacer la colada',
        description: 'Separar la ropa blanca de la ropa de color.'
      }
    ];
  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public saveTask(t: Task) {
    t.id = this.taskCounter++;
    this.tasks.push(t);
  }

  public deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id != id);
  }
}
