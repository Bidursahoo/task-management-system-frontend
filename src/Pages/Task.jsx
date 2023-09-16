import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SideNavBar from '../Components/SideNavBar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Modal
        open={open}  // Always open for demonstration
        onClose={handleClose} // No close action for child modal
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          {/* No "Close Child Modal" button here as it's always open */}
        </Box>
      </Modal>
    </React.Fragment>
  );
}

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
        <Modal
          open={Boolean(selectedRow)}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Row Data</h2>
            {selectedRow && (
              <>
                <p>ID: {selectedRow.id}</p>
                <p>First Name: {selectedRow.firstName}</p>
                <p>Last Name: {selectedRow.lastName}</p>
                <p>Handle: {selectedRow.handle}</p>
                <ChildModal />
              </>
            )}
            <Button onClick={handleClose}>Close Parent Modal</Button>
          </Box>
        </Modal>
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
    </>
  );
}
