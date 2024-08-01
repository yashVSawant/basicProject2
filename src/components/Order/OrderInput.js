import React,{useState} from "react";

const OrderInput = (props)=>{
    const [uniqueOrderId , setUniqueOrderId] = useState("");
    const [price , setPrice] = useState("");
    const [dish , setDish] = useState("");
    const [table , setTable] = useState("Table 1");

    const idChnageHandler = (event)=>{
        setUniqueOrderId(event.target.value)
    }
    const priceChangeHandler = (event)=>{
        setPrice(event.target.value)
    }
    const dishChnageHandler = (event)=>{
        setDish(event.target.value)
    }
    const tableSelectHandler = (event)=>{
        setTable(event.target.value)
    }

    const addToBillHandler = (event)=>{
        event.preventDefault();
        props.onAdd({id:uniqueOrderId ,price :price ,dish :dish ,table:table})
    }

    return (
        <form>
            <label >Unique Order Id:</label>
            <input type="number" value={uniqueOrderId} onChange={idChnageHandler}></input>
            <label >Choose price:</label>
            <input type="number"  value={price} onChange={priceChangeHandler}></input>
            <label >Choose dish:</label>
            <input type="text"  value={dish} onChange={dishChnageHandler}></input>
            <label >Select table:</label>
            <select value={table} onChange={tableSelectHandler}>
                <option>Table 1</option>
                <option>Table 2</option>
                <option>Table 3</option>
            </select>
            <button type="submit" onClick={addToBillHandler}>Add to bill</button>
        </form>
    )
}

export default OrderInput