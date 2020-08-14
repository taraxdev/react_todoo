import React, { useState } from 'react';
import Todo from './todo';

const App = () => {

    const [name,setName] = useState();
    const [items,setItems] = useState([]);

    const inputValue = (event) => {
        setName(event.target.value)
    }

    const listOfItems = () =>{
        setItems((oldItems) => {
            return [...oldItems, name];
        });
        setName('')
    };
    return(
        <>
        <div className="main_div">
            <div className="main_center">
                
                <h1>Tara's ToDo List</h1>
                <br />
                <input type='text' placeholder="Add Item" value={name} onChange={inputValue} />

                <button onClick={listOfItems}>Add</button>
                <br/>
                <ul>
                {items.map((intval) => {
                 return   <Todo text={intval} />;
                })}
                </ul>
            </div>
        </div>
        </>
    )
}

export default App;