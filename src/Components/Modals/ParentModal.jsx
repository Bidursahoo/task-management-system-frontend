import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ChildModal from './ChildModal';

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

export default function ParentModal({ selectedRows, handleClosing }) {
  const [val, setVal] = useState(null);
  

  const [childModalOpen, setChildModalOpen] = useState(false);

  const handleOpenChildModal = () => {
    setChildModalOpen(true);
    setVal(selectedRows);
  };

  const handleCloseChildModal = () => {
    setChildModalOpen(false);
  };

  return (
    <>
      <ChildModal open={childModalOpen} rowData={val} onClose={handleCloseChildModal} />
      <Modal
        open={Boolean(selectedRows)}
        onClose={handleClosing}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Row Data</h2>
          {selectedRows && (
            <>
              <p>ID: {selectedRows.id}</p>
              <p>First Name: {selectedRows.firstName}</p>
              <p>Last Name: {selectedRows.lastName}</p>
              <p>Handle: {selectedRows.handle}</p>
            </>
          )}
          <Button onClick={handleClosing}>Close Parent Modal</Button>
          <Button onClick={handleOpenChildModal}>Open Child</Button>
        </Box>
      </Modal>
    </>
  );
}
