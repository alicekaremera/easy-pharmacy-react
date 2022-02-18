import React,{ useState, useEffect }  from "react";

import Table from "../components/table/Table";
import DashLayout from "../components/dashboardlayout";
import customerList from "../assets/JsonData/customers-list.json";
import EasyApis from "../services/easyPharmacy";

const AllUsers = () => {
  const [allUsersData, setAllUsersData] = useState([]);

  useEffect(() => {
    EasyApis.getAllUsers().then((res) => {
      console.log(res);
      setAllUsersData(res.data.data);
    });
  }, []);

const userTableHead = [
  "",
  "firstname",
  "email",
  "phone",
  "role",
  "gender",
  "address",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.firstname}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.role}</td>
    <td>{item.gender}</td>
    <td>{item.address}</td>
  </tr>
);

// const Customers = () => {
  return (
    <DashLayout key="3">
      <div>
        <h2 className="page-header">Users</h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <Table
                  limit="10"
                  headData={userTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={allUsersData}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default AllUsers;
