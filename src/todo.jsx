import React from 'react';

const Todo = (props) => {
    
    return (
    <>
        <div className="todo_style">
        {/* <i class='bx bxs-chevron-down-circle' /> */}
            <li>{props.text}</li>
        </div>
    </>
    );

}

export default Todo;