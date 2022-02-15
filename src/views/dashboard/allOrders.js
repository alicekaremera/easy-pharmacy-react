import React from "react"
import { Table, Tag, Space } from 'antd';
import AllAvailableData from "../../assets/constants/drug.json"
import { EditOutlined ,EyeOutlined ,DeleteOutlined } from '@ant-design/icons';
import AllDataUsers from "../../assets/constants/info.json"
const columns=[
    {
        title : 'Name of tour',
        dataIndex :'title',
        key: 'title'
        
      },
      {
        title: 'Date sheduled',
        dataIndex :'dateScheduled',
        key: 'dateScheduled'
      },
      {
        title: 'Due date',
        dataIndex :'dueDate',
        key: 'dueDate'
      },
      {
        title : 'Available seats',
        dataIndex :'seats',
        key:'seats'
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key :'price'
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => (
            <Space size="middle">
        <a><EyeOutlined/></a> <a><EditOutlined/></a> <a><DeleteOutlined /></a> 
        </Space>
        )
      },
    ]
    const Columns=[
        {
            title : 'First Name',
            dataIndex :'firstname',
            key: 'firstname'
            
          },
          {
            title: 'Last Name',
            dataIndex :'lastname',
            key: 'lastname'
          },
          {
            title: 'Address',
            dataIndex :'address',
            key: 'address'
          },
          {
            title : 'E-mail',
            dataIndex :'email',
            key:'email'
          },
          {
            title: 'Phone Number',
            dataIndex: 'phone',
            key :'phone'
          },
          {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => (
                <Space size="middle">
            <a style={{color:"green"}}>Accept</a> <a style={{color:"red"}}>Decline</a> 
            </Space>
            )
          },
        ]
      const AllOrders=()=>{
    return(
        <>
<Table columns={columns} dataSource={AllAvailableData}  />
<Table columns={Columns} dataSource={AllDataUsers}  />
</>
    )
}
export default AllOrders