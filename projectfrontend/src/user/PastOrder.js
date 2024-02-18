import React, { useEffect, useState } from 'react'
import Base from '../core/Base'
import { isAuthenticated } from '../auth/helper'

const PastOrder= () => {

// const {userId} = isAuthenticated() && isAuthenticated().user_id;
// const {token} = isAuthenticated() && isAuthenticated().token;

   //useState
   const [orders, setOrders] = useState([]);

   const dateTimeFormatter = Intl.DateTimeFormat('en-IN', {
       year: 'numeric',
       month: 'short',
       day: '2-digit',
       hour: 'numeric',
       minute: 'numeric',
       second: 'numeric',
       hour12: true
   });

     // useEffect
     useEffect(() => {
        // generate order with crypto random id, dummy user name email and total 
        const generateOrder = () => {
            const orders = [];
            for (let i = 0; i < 5; i++) {
                const order = {
                    _id: "ORD" + Math.floor(Math.random() * 1000000000),
                    status: "Received",
                    amount: 1000,
                    address: "D-2/5, Block-D, Vasant Kunj, New Delhi",
                    updated: dateTimeFormatter.format(new Date() - Math.floor(Math.random() * 1000000000)),
                        user: {
                            _id: Math.random().toString(36).substr(2, 9),
                                name: ["John", "Doe", "Jane", "Doe"][Math.floor(Math.random() * 4)],
                    }
        }
        orders.push(order);
    }
            return orders;
}
setOrders(generateOrder());
    }, [])


  return (
    <Base
        title='Manage Orders'
        description='Orders can be managed here'
    >
        <div className="container-fluid">
            <h2 className="text-center text-white my-3">Total Orders : {orders?.length}</h2>
            <table className='w-100 bg-success text-center'>
                <thead className='btn-secondary'>
                    <tr>
                        <th className="text-white">Order ID</th>
                        <th className="text-white">Amount</th>
                        <th className="text-white">Address</th>
                        <th className="text-white">Status</th>
                     </tr>
                </thead>
                <tbody>
                    {orders?.length > 0 && orders.map((order, index) => {
                        return (
                            <tr key={index} className="text-center mb-2 ">
                                <td className="text-white">{order._id}</td>
                                <td className="text-white">₹{order.amount}</td>
                                <td className="text-white">{order.address}</td>
                                <td className="text-white bg-warning">{order.status}</td>    
                             </tr>
                        )
                    })}
                </tbody>
                {/* no orders */}
                {orders?.length === 0 && (
                    <h5 className="text-white">No Orders</h5>
                )}
            </table>
        </div>
    </Base>
  )
}

export default PastOrder;
