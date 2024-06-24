import React from 'react';
import { useReducer, useState } from 'react';

/*useReducer it is a hook like useState, he has too the function to handle state values, but he is more indicate in a complex cases*/ 

const UseReducer = () => {

    //Text that will be the new task
    const [textTask, setTextTask] = useState("")

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    })

    const initialTasks = [
        {id:1, text:"Arrumar a cama"},
        {id:2, text:"Varrer o chão"}
    ];

    //Function that define what the action will perform
    const taskReducer = (state, action) => {
        switch (action.type) {
            //Case to add a new task
            case "ADD": 
                const newTask = {
                    id: Math.random(),
                    text: textTask
                };
            
                setTextTask("")

                return [...state, newTask]
            //Case to delet some task
            case "DELET": 
                return state.filter((task) => task.id !== action.id)
                default:
                    return state
        }
    };

    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({type: "ADD"})
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELET", id})
    }

    console.log(tasks)

  return (
    <div>
        <h4>UseReducer</h4>
    {/*useReducer in a basic case*/}
    <p><strong>Neste exemplo vamos ver o useReducer sendo utilizado em um caso básico</strong></p>
    <p>O número é: {number}</p>
    <button onClick={dispatch}>alterar número</button>
    <br />

    {/*useReducer complex example*/}
    <p>
        <strong>
            Neste exemplo vamos ver uma forma mais complexa de se utilizar o useReducer, vamos criar uma lista de tarefas, o useReduceritá nos ajudar 
            salvar o valor no estado definir ações diferentes para cada tipo de interação com o componente, como por exemplo adicionar novas tasks,e a remover também.
        </strong>
    </p>
    <p>Tarefas:</p>
    <form onSubmit={handleSubmit}>
        <input 
        type='text'
        value={textTask}
        onChange={(e) => setTextTask(e.target.value)}
        />
        <input type='submit' value="Enviar"></input>
    </form>
    {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)} >{task.text}</li>
    ))}
    
    <hr />
    </div>
  );
};

export default UseReducer;