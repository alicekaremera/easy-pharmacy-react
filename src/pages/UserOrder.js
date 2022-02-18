import React, { useState, useEffect } from "react";

import Table from "../components/table/Table";
import UserDashLayout from "../components/userdashboardlayout";
import EasyApis from "../services/easyPharmacy";

const AllOrders = () => {
  const [allOrdersData, setAllOrdersData] = useState([]);

  useEffect(() => {
    EasyApis.getAllOrders().then((res) => {
      console.log(res);
      setAllOrdersData(res.data.data);
    });
  }, []);

  const orderTableHead = [
    "",
    "user",
    "drug",
    "status",
    "paymentStatus",
    
  ];

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.userId}</td>
      <td>{item.drugId}</td>
      <td>{item.status}</td>
      <td>{item.paymentStatus}</td>
      
    </tr>
  );

  // const Medecines = () => {
  return (
    <UserDashLayout key="3">
      <div>
        <h2 className="page-header">Orders</h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <Table
                  limit="10"
                  headData={orderTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={allOrdersData}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserDashLayout>
  );
};

export default AllOrders;
