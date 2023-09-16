import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

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

export default function ChildModal({ open, rowData, onClose }) {
  return (
    <React.Fragment>
      <Modal
        open={Boolean(open)}
        onClose={onClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          {rowData && (
            <>
              <p>ID: {rowData.id}</p>
              <p>First Name: {rowData.firstName}</p>
              <p>Last Name: {rowData.lastName}</p>
              <p>Handle: {rowData.handle}</p>
            </>
          )}
          <Button onClick={onClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
