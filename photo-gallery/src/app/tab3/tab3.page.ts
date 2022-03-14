import { Component } from '@angular/core';
interface Todo {
  id: number;
  name: string;
  time: string;
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

  compareWith(o1: Todo, o2: Todo) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}
