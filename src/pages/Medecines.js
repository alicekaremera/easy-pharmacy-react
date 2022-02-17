import React, {useState, useEffect} from 'react'

import Table from '../components/table/Table'

import medecineList from '../assets/constants/drug.json'

import EasyApis from "../services/easyPharmacy";


const AllDrugs = () =>{
    const [allDrugsData, setAllDrugsData]= useState([]);
  
    useEffect(()=>{
      EasyApis.getAllDrugs().then((res)=>{console.log(res);
      setAllDrugsData(res.data.data);
    });
  
    },[]);

const customerTableHead = [
    '',
    'name',
    'description',
    'expiredDate',
    'price',
    'available'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.expiring}</td>
        <td>{item.price}</td>
        <td>{item.availableDrugs}</td>
        
    </tr>
)

// const Medecines = () => {
    return (
        <div>
            <h2 className="page-header">
                Medecines
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={allDrugsData}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllDrugs

