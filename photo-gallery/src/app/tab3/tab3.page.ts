import { Component } from '@angular/core';
interface Todo {
  id: number;
  name: string;
  time: string;
}

interface Task {
  id: number;
  name: string;
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})



export class Tab3Page {

  todo: Todo[] = [
    {
      id: 1,
      name: 'IT assignments',
      time: 'Smith',
    },
    {
      id: 2,
      name: 'Physics assignments',
      time: 'Davis',
    },
    {
      id: 3,
      name: 'Mathz home work',
      time: 'Rosenburg',
    }
  ];

  task: Task[] = [
    {
      id: 1,
      name: 'java',
    },
    {
      id: 2,
      name: 'scala',
    },
    {
      id: 3,
      name: 'php',
    }
  ];

  compareWith(o1: Todo, o2: Todo) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
  taskName: any = ''; // Entered Text
  taskList = []; // Array to store tasks

  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = '';
    }
  }
  deleteTask(index) {
    this.taskList.splice(index, 1);
  }
}
