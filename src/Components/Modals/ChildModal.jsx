import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
  const [name, setName] = useState(rowData ? rowData.name : '');
  const [isAdmin, setIsAdmin] = useState(rowData ? rowData.isAdmin : false);
  const navigate = useNavigate();

  const handleUpdateDetails = () => {
    // Handle details update here
    // Send request to update user details
    const updatedDetails = { name, isAdmin };

    // Display confirmation modal
    setIsConfirmationModalOpen(true);
  };

  // State to manage confirmation modal
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleConfirmationYes = () => {
    // Handle confirmation (e.g., send request)
    console.log('Confirmed. Send request to update details.');

    // Close confirmation modal
    setIsConfirmationModalOpen(false);

    onClose(); // Close child modal
  };

  const handleConfirmationNo = () => {
    // Handle cancellation
    console.log('Cancelled. No action taken.');

    // Close confirmation modal
    setIsConfirmationModalOpen(false);
  };

  return (
    <>
      <Modal
        open={Boolean(open)}
        onClose={onClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id='child-modal-title' className='mb-3'>
            Update Details
          </h2>
          <TextField
            label='Name'
            variant='outlined'
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mb-3'
          />
          <div className='mb-3'>
            <label>
              Admin Status:
              <input
                type='checkbox'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
            </label>
          </div>
          <div className='mt-3'>
            <Button variant='contained' color='primary' onClick={handleUpdateDetails}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </div>
        </Box>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        open={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        aria-labelledby='confirmation-modal-title'
        aria-describedby='confirmation-modal-description'
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id='confirmation-modal-title'>Confirmation</h2>
          <p id='confirmation-modal-description'>Are you sure you want to update the details?</p>
          <Button onClick={handleConfirmationYes} variant='contained' color='primary'>
            Yes
          </Button>
          <Button onClick={handleConfirmationNo}>No</Button>
        </Box>
      </Modal>

      <ToastContainer />
    </>
  );
}
