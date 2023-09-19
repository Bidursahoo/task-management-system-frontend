import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ParentModal({ openStatus, onClose, userDetails }) {
  const [userData, setUserData] = React.useState({
    // email: userDetails.email,
    name: userDetails.name,
    // password: userDetails.password,
  });
  const handleChange = (event)=>{
              setUserData({
                ...userData,
                [event.target.name] : event.target.value
              })
  }
  return (
    <>
      <Modal
        open={openStatus}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="usr" name="name" value={userData.name} onChange={handleChange} />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" class="form-control" id="email" readonly name="email" value={userDetails.email} />
          </div>
        </Box>
      </Modal>
    </>
  );
}
