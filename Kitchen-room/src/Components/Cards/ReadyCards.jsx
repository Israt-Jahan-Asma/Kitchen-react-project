import React from 'react';

const ReadyCards = ({order}) => {
    return (
        <div className='border-2 border-amber-400 p-5 m-2 rounded-2xl space-y-2'>
            <h2 className='font-bold text-2xl'>{order.order_title}</h2>
            <p> {order.order_no} </p>
            <p> {order.waiterId} </p>
            <span className='p-2 bg-amber-500 text-white rounded-[50%]'> {order.table_no} </span>
        </div>
    );
};

export default ReadyCards;