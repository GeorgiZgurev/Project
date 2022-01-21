import React, {useState, useReducer} from 'react';

import Orders from './Orders.js';
import Size from './Size.js';
import Types from './Types.js';
import Text from './Text.js';
import Submit from './Submit.js';
import Occasion from './Occasion.js';
import MasonryImageList from './MasonryItemList.js';
import ResponsiveAppBar from './ResponsiveAppBar.js';
import { Button } from '@mui/material';
import Finish from './Finish.js';



const reduceOrders = (state, action) =>{
    if(action.actType==='add'){
        return[
            ...state,
            {
                id:action.lastOrderNum+1,
                size: action.size,
                type: action.type,
                text: action.text,
                occasion: action.occasion,
                
            }
        ]
    }
    else{
        return state.filter((order) =>order.id !== action.index);
    }
}

function Menu({ordersJSON, typesJSON}) {

    const[orders, OrderSend] = useReducer(reduceOrders, ordersJSON);
    const[type, setType] = useState('');
    const[lastOrderNumber, setLastOrderNumber] = useState(orders[orders.length-1].id);
    const[size, setSize] = useState('small');
    const[text, setText] = useState('');
    const[occasion, setOccasion] = useState();
    const[MansonryItemList, setMasonryItemList] = useState();
    const[ResponviveAppBar, setResponsiveAppBar] = useState();
  

    const handleSize = (event) =>{
        const strSize = event.target.value;
        setSize(()=> strSize);
    }

    const handleOccasion = (event) =>{
        const occasion = event.target.value;
        setOccasion(()=> occasion);
    }
    const handleText = (event) =>{
        const strText = event.target.value;
        setText(()=> strText);
    }


    const handleSubmit = () =>{
        OrderSend({
            actType: 'add',
            lastOrderNum: lastOrderNumber,
            size: size,
            type: type,
            text: text,
            occasion: occasion,
        })

        setLastOrderNumber(()=> lastOrderNumber+1);
    }

    const handleFinish = () =>{
        alert('Successfull')
    }
    const handleType = (event)=>{
        const newType = event.currentTarget;

        setType(()=>newType.value);
    }

    const handleRemove = (event)=>{
        const index = Number.parseInt(event.currentTarget.value);

        OrderSend({type: 'remove', index});
    }

    const handleMasonryItemList = (event) => {

        const MasonryItem = event.currentTarget;
        setMasonryItemList(()=> MasonryItem.value);
    }

    const handleResponsiveAppBar = (event) => {
        const RespAppBar = event.currentTarget;
        setResponsiveAppBar = event.RespAppBar;

    }

  return (
    <>
    <ResponsiveAppBar onResponsiveAppBar = {handleResponsiveAppBar}/>
        
        <div className ='ImageGalery'><h2 className='Text'>Our Gallery</h2><MasonryImageList onMasonryImageList = {handleMasonryItemList}/></div>
        <div className='pizzaOrder' >

        <Occasion onOccasion = {handleOccasion} props ={occasion}></Occasion>
            <Size onSize={handleSize} props={size}></Size>
            <Text onText={handleText}></Text>
            <Types onType={handleType} types={typesJSON} />
            <Submit onSubmit={handleSubmit}/>
            <Finish onFinish={handleFinish}/>
          
           

            <div className='listOrders'>
                <Orders orders={orders} removeOrder={handleRemove} />
            </div>
        </div>
    </>
  );
}

export default Menu;

