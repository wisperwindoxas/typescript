import axios from 'axios'

interface Todo{
   id:number,
   title:string
   completed:boolean
}


let link = axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
   let link = res.data as Todo;

   const id = link.id;
   const title = link.title;
   const completed = link.completed;

   funTodo(id, title, completed)
   
})


const funTodo = (id:number, title:string, completed:boolean) =>{
   console.log(`
      todos id: ${id}
      todos title: ${title}
      todos completed: ${completed}
   `);
}




