import React, { useState } from 'react';
import SideNavBar from '../Components/SideNavBar';
import ParentModal from '../Components/Modals/ParentModal';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const rowDataList = [
  { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
  { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
  { id: 3, firstName: 'Larry', lastName: 'the Bird', handle: '@twitter' },
];

export default function Task() {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
  };

  const handleClose = () => {
    setSelectedRow(null);
  };

  return (
    <>
      <SideNavBar />
      <div className="mt-4 d-flex justify-content-center" >
        <div className='w-75'>
        <ParentModal  selectedRows = {selectedRow} handleClosing = {handleClose}/>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {rowDataList.map((rowData) => (
              <tr key={rowData.id} onClick={() => handleRowClick(rowData)}>
                <th scope="row">{rowData.id}</th>
                <td>{rowData.firstName}</td>
                <td>{rowData.lastName}</td>
                <td>{rowData.handle}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
