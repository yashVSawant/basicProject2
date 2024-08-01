import React,{useState , useEffect} from 'react';
import './App.css';
import OrderInput from './components/Order/OrderInput';
import ShowTables from './components/Order/ShowTables';

function App() {
  const [orders ,setOrders] = useState([]);

  const addHandler = (order)=>{
    setOrders([...orders , order])
    localStorage.setItem('orders',JSON.stringify([...orders , order]))
  }
  const onDelete =(key)=>{
    const filterOrder = orders.filter(({id})=>{
        return id!==key;
    })
    setOrders([...filterOrder])
    localStorage.setItem('orders',JSON.stringify([...filterOrder]))
  }

  useEffect(()=>{
    const getStoreOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders([...getStoreOrders]);
  } ,[])

  return (
    <div id="orderDiv">
      <OrderInput onAdd={addHandler}/>
      <ShowTables order={orders} onDeleteHandler={onDelete}/>
    </div>
  );
}

export default App;
