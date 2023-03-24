import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import './ToDoApp.css'
import ShowTodo from './ShowTodo'
import { RiAddLine } from "react-icons/ri"


const ToDoApp = () => {
    const getLoacalStorageData = () => {
        let list = localStorage.getItem('list');

        if (list) {
            return JSON.parse(localStorage.getItem('list'))
        } else {
            return []
        }
    }

    const [input, setInput] = useState("");
    const [item, setItem] = useState(getLoacalStorageData());

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(item))
    }, [item])


    const onchangeHandler = (e) => {
        setInput(e.target.value);
    }

    const addItem = () => {

        if (input != "") {
            setItem([...item, input])
            setInput("")
        }

        if (item.includes(input.toLowerCase())) {
            alert("This Item already include")
            setItem([...item])
        }
    }


    const deleteItem = (id) => {
        let data = item.filter((curEle, index) => {
            return index != id;
        })
        setItem(data)
    }

    const deleteAll = () => {
        setItem([])
    }
    return (


        <div className=" todoapp-container">
            <div className="heading">
                <h1>ToDo List</h1>
            </div>
            <div className="add-item-container">
                <input type="text"
                    placeholder='Add Task'
                    onChange={onchangeHandler}
                    autoComplete='off'
                    value={input} />
                <span className='addbtn'>
                    <RiAddLine onClick={addItem} />
                </span>
            </div>
            <div className="todo-list-items">

                {
                    item.map((curEle, index) => {
                        return (

                            <ShowTodo
                                key={index}
                                id={index}
                                task={curEle}
                                onDelete={deleteItem}
                            />
                        )
                    })
                }

            </div>
            {item.length >= 1 ?
                <button onClick={deleteAll} className="deleteall-btn">Delete All Task</button>
                : null}
        </div>


    )
}


export default ToDoApp
