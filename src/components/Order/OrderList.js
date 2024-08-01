import React from "react";

const OrderList = (props)=>{
    const deleteHandler = (key)=>{
        return ()=>{
            props.onDelete(key)
        }
    }
    return (
        <React.Fragment>
            {props.order.map(({id ,price ,dish ,table})=>{
                return <li key={id}>{price} - {table} - {dish} <button onClick={deleteHandler(id)}>Delete</button></li>
            })}
        </React.Fragment>
    )
}

export default OrderList 