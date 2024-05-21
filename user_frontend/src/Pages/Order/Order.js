import React from 'react'
import { Table } from 'antd';

const Order = () => {

    const columns = [
        {
          title: 'Orderid',
          dataIndex: 'name',
        },
        {
          title: 'Persons',
          dataIndex: 'age',
        },
        {
          title: 'Num of persons',
          dataIndex: 'address',
        },
        {
          title: 'Pizza',
          dataIndex: 'address',
        },
        {
          title: 'Burger',
          dataIndex: 'address',
        },
        {
          title: 'Chats',
          dataIndex: 'address',
        },
        {
          title: 'Coffe',
          dataIndex: 'address',
        },
        {
          title: 'Tea',
          dataIndex: 'address',
        },
        {
          title: 'Cooldrink',
          dataIndex: 'address',
        },
        {
          title: 'Status',
          dataIndex: 'address',
        },
        {
          title: 'Ordered time',
          dataIndex: 'address',
        },
      ];
      
      const data1 = [];
      for (let i = 0; i < 100 ; i++) {
        data1.push({
          key: i,
          // name: `Edward King ${i}`,
          // age: 32,
          // address: `London, Park Lane no. ${i}`,
    
        });
      }
  return (
    <div>
      <h3 className='mb-4'>Orders</h3>
      <div><Table columns={columns} dataSource={data1} />  </div>
    </div>
  )
}

export default Order
