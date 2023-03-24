import React, { useState } from 'react'
import styled from 'styled-components'
import { RiDeleteBinLine } from "react-icons/ri"


const ShowTodo = ({ id, task, onDelete }) => {

    const [line, setLine] = useState(false)

    const cutItem = () => {
        setLine(true)

    }

    return (
        <Wrapper>
            <div className="item-box">
                <span
                    onDoubleClick={() => { onDelete(id) }}
                    onClick={cutItem}
                    className="deletebtn">
                    <RiDeleteBinLine className='btnn' />
                </span>
                <li style={line ? { textDecoration: 'line-through', opacity: 0.5 } : { textDecoration: 'none', opacity: 1 }}>{task}</li>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.item-box{
    display: flex;
    align-items: center;
    padding:.2rem 4rem;
    gap: 1rem;

    li{
        width: 90%; 
        text-transform: capitalize;
        font-weight: 700;
        font-size: 2.5rem;
    }
    span{
        width: 4rem;
        height: 4rem;
        font-size: 5rem;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #72a3b6;
        padding: .7rem;
    }
    .btnn{
        font-size: 7rem;
    }
    span:hover{
        color: red;
        background-color: #eee;
    }
}
`
export default ShowTodo
