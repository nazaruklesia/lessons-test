import axios from 'axios';

import './style.css'


//111111111111111111111111
// async function foo() {
//     const BASE_URL = "https://jsonplaceholder.typicode.com/todos";  
//     const todo1 = await axios(`${BASE_URL}/1`);
//     const todo2 = await axios(`${BASE_URL}/2`);
//     const todo3 = await axios(`${BASE_URL}/3`);

// return [todo1.data, todo2.data, todo3.data]
// }
// foo()
//     .then(data => console.log(data))
//     .catch(err => console.log(err.massage))


async function foo() {
    const BASE_URL = "https://jsonplaceholder.typicode.com/todos"; 
    const todoArr = [1, 2, 3];

    const results = todoArr.map(async(item) => {

        const res = await axios(`${BASE_URL}/${item}`);
        return res.data;
    })
    const todos = await Promise.all(results);
    return todos;
}

foo()
    .then(data => console.log(data))
    .catch(error => console.log(error.massage))



