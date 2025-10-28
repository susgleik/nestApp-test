import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './tasks.service';

@Controller({})
export class TasksController {
  tasksService: TaskService;
  constructor(taskService: TaskService) {
    this.tasksService = taskService;
  }

  @Get('/tasks')
  getAllTasks() {
    return this.tasksService.getTesting();
  }

  @Post('/tasks')
  createTask() {
    return 'Creando tarea ....';
  }

  @Put('/tasks')
  putTask() {
    return 'Actualizando tarea Put ....';
  }

  @Delete('/tasks')
  deleteTask() {
    return 'Eliminando tarea ....';
  }

  @Patch('/tasks')
  patchTasks() {
    return 'Actualizando tarea patch ....';
  }
}
