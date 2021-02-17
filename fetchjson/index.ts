// type = easy way to refer to the different properties + functions that a value has

// primitive types = number, boolean, void, undefined, string, symbol, null
//  object types = functions/ arrays, classes, objects

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url)
  .then(res => {
    
    const todo = res.data as TODO;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logToDo(id, title, completed);
  }
    
    )
  .catch(err => console.log(err));

  const logToDo = (id: number, title: string, completed: boolean) => {
    console.log(`
      The TODO with ID: ${id}
      Has a title of: ${title}
      Status: ${completed ? 'FINISHED' : 'IN PROGRESS'}
    `)
  }