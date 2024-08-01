import React from "react";
import OrderList from "./OrderList";

const ShowTables = (props)=>{
    const orderOnTable1 = props.order.filter(({table})=>table === "Table 1")
    const orderOnTable2 = props.order.filter(({table})=>table === "Table 2")
    const orderOnTable3 = props.order.filter(({table})=>table === "Table 3")
    const deleteHandler = (key)=>{
        props.onDeleteHandler(key)
    }
    return (
        <React.Fragment>
            <h1>Orders :</h1>
            <h2>Table 1</h2>
            <OrderList order={orderOnTable1} onDelete={deleteHandler} />
            <h2>Table 2</h2>
            <OrderList order={orderOnTable2} onDelete={deleteHandler} />
            <h2>Table 3</h2>
            <OrderList order={orderOnTable3} onDelete={deleteHandler} />
        </React.Fragment>
    )
}

export default ShowTables ;