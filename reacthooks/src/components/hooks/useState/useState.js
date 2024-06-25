import React from 'react';
import { useState } from 'react';

//UseState it is a hook used for save values and edit values

const UseState = () => {

    const [number, setNumber] = useState();
    const [name, setName] = useState("Paul")
    const [displayName, setDisplayName] = useState("");
    const [inputName, setInputName] = useState("")

    const sortNumber = () => {
        setNumber(Math.round(Math.random() * 100))
    }

    const changeName = (e) => {
        e.preventDefault()

        setInputName(displayName)
        
    }

  return (
    <div className='principal-div'>
        
     <h3>UseState</h3>

      {/*Use state in a simple exemple*/}
      <p><strong>simple useState</strong></p>
      <p>Sort number: {number}</p>
      <button onClick={sortNumber}>Changer name</button>
      <br />

      <p><strong>useState in a form</strong></p>

      <form>
        {/*You can create an entry and change the state value by changing the entry value, look the exemple.*/}
        <p>Neste exemplo o estado nome será alterado assim que o input de entrada for alterado.</p>
        <p>Digite seu nome:</p>
        <p>Seu nome é: {name}</p>
        <input type='text' value={name} onChange={(e) => {setName(e.target.value)}}></input>
      </form>

        {/*You can alter the state value just when a button to be clicked*/}
        <form onSubmit={changeName}>
            <p>Neste exemplo você pode alterar o valor do estado name, apenas quando o botão for clicado</p>
            <p>Seu nome é: {inputName}</p>
            <input placeholder='Your name here' onChange={(e) => setDisplayName(e.target.value)}></input>
            <button type='submit'>Change name</button>
        </form>
      <hr/>
    </div>
  );
};

export default UseState;