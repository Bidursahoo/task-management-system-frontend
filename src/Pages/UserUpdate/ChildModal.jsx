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
  const [name, setName] = useState(rowData.name);
  const [isAdmin, setIsAdmin] = useState(rowData.isAdmin);
  const navigate = useNavigate();

  const handleUpdateDetails = () => {
    // Handle details update here
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('accessToken'),
      },
    };

    axios
      .put(`https://task-management-backend-czfb.onrender.com/api/users/${rowData._id}`, { name, isAdmin }, config)
      .then((res) => {
        if (res.status === 200) {
          toast.success('Successfully Updated !! ', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setInterval(() => {
            navigate(0);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error ', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setInterval(() => {
          navigate('/tasks');
        }, 5000);
      });

    onClose();
  };

  return (
    <React.Fragment>
      <Modal
        open={Boolean(open)}
        onClose={onClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="child-modal-title" className="mb-3">
            Update Details
          </h2>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-3"
          />
          <div className="mb-3">
            <label>
              Admin Status:
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
            </label>
          </div>
          <div className="mt-3">
            <Button variant="contained" color="primary" onClick={handleUpdateDetails}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </div>
        </Box>
      </Modal>

      <ToastContainer />
    </React.Fragment>
  );
}
