// command: rafcp
//<React.Fragment></React.Fragment> = <> </> to wrap more than one html tag
import React from 'react'
import { arrayOf, shape, number, string } from 'prop-types'
import "./TodoView.css"
import Span from "../shared/Span"

const TodoView = ({
    todoList,
    handleDeleteTodo,
    handleEditTodo,
    handleOnChange,
    editValue,
    disableEditButton,
    handleUpdateButton
}) => {
    console.log(todoList)

    const handleDeleteButton = (id) => {
        console.log('ID:', id)
        handleDeleteTodo(id)
    }

    return (

        <ul style={{ listStyle: "none" }}>
            {todoList.map(({ id, todo, editToggle }) => {

                return (
                    <>
                        <li key={id} style={{ margin: 20 }}>
                            {/* {todo}{" "} */}
                            {editToggle
                                ? (
                                    <input
                                        onChange={(event) => handleOnChange(event)}
                                        type='text'
                                        value={editValue}
                                        name='editValue'
                                        defaultValue={todo}
                                    >
                                    </input>
                                )
                                : (
                                // <span>{todo}</span>
                                <Span value = {todo} />
                                )
                            }
                            {
                            editToggle
                                ? (
                                    // <span onClick={() => handleUpdateButton(id)}
                                    //     className="edit-button todo-button-shared-style" > update</span>
                                    <Span 
                                    value = {"Update"}
                                    id = {id}
                                    onClick = {handleUpdateButton}
                                    className = {`edit-button todo-button-shared-style`}
                                    />
                                )
                                : (
                                    // <span onClick={() => handleEditTodo(id)}
                                    //     className={`edit-button todo-button-shared-style ${disableEditButton ? "disabled-button" : ""}`} >Edit</span>
                                    <Span 
                                    value = {"Edit"}
                                    id = {id}
                                    onClick = {handleEditTodo}
                                    className = {`edit-button todo-button-shared-style`}
                                    disabledClass = "disabled-button"
                                    disabledButton = {disableEditButton}
                                    />
                                )
                          
                            }

                            {/* <span className={`delete-button todo-button-shared-style ${disableEditButton ? "disabled-button" : ""}`}
                                onClick={() => handleDeleteButton(id)}>Delete</span> */}

                            <Span
                                value={"Delete"}
                                id={id}
                                onClick={handleDeleteButton}
                                className= {`delete-button todo-button-shared-style`}
                                disabledClass="disabled-button"
                                disabledButton={disableEditButton}
                            />
                        </li>
                    </>
                );
            })}
        </ul>

    )
}

TodoView.propTypes = {
    todoList: arrayOf(
        shape({
            id: string.isRequired,
            todo: string.isRequired,
        })
    )
}

export default TodoView
