import React, { use, useState } from 'react';
import States from './States';
import OrderCard from './Cards/OrderCard';
import CookingCard from './Cards/CookingCard';
import ReadyCards from './Cards/ReadyCards';

const OrderContainer = ({ promise }) => {
    const data = use(promise)
    const [orders, setOrders] =useState(data)

    const [cookingItems, setCookingItems] = useState([]);
    const [readyItems, setReadyItems] = useState([]);


    const handelOrder=(order) => {

   const isExist = cookingItems.find((item)=> item.id==order.id)
    if(isExist){
        alert('Already Cooking')
        return
    }
    const newCookingItems = [...cookingItems, order];
    setCookingItems (newCookingItems);
}

    const handleCooking = (order)=> {
        const newReadyItems = [...readyItems, order]
        setReadyItems(newReadyItems)
        
        const remaining = cookingItems.filter(item=> item.id !==order.id)
        setCookingItems(remaining)

        const remainingOrders = orders.filter(item=> item.id !== order.id)
        setOrders(remainingOrders)

    }
    return (
        <div>
            <States cookingTotal={cookingItems.length} 
            orderTotal={orders.length}
            readyTotal = {readyItems.length}
            > </States>

            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
                <div className='lg:col-span-7'>
                    <h2 className='font-bold text-4xl'> Current Orders  </h2>
                    <div className='space-y-5'>
                        {
                            orders.map((order) => (<OrderCard handelOrder={handelOrder} key={order.id} order={order}> </OrderCard>))
                        }
                    </div>

                </div>
                <div className='lg:col-span-5 space-y-5'> 
                    <h2 className='font-bold text-4xl'> Cooking Now  </h2>
                    <div className='shadow p-10 space-y-5'>
                        {
                            cookingItems.map(order => (<CookingCard key={order.id} order={order} handleCooking={handleCooking}></CookingCard>))
                        }
                    </div>
                    <h2 className='font-bold text-4xl'> Order Ready  </h2>
                    <div className='shadow p-10'>
                        {
                            readyItems.map(order=>(<ReadyCards order={order}></ReadyCards>))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderContainer;