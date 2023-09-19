import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ChildModal from "./ChildModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
      <ChildModal
        open={childModalOpen}
        rowData={val}
        onClose={handleCloseChildModal}
      />
      <Modal
        open={Boolean(selectedRows)}
        onClose={handleClosing}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Task Details</h2>
          {selectedRows && (
            <>
              <p>Title: {selectedRows.title}</p>
              <p>Description: {selectedRows.desc}</p>
              <p>Assigned By: {selectedRows.assignedBy.name}</p>
              {selectedRows.status === "Assigned" && (
                <p className="text-danger">Status: {selectedRows.status}</p>
              )}
              {selectedRows.status === "In Progress" && (
                <p className="text-warning">Status: {selectedRows.status}</p>
              )}
              {selectedRows.status === "Done" && (
                <p className="text-success">Status: {selectedRows.status}</p>
              )}
              <p>
                DeadLine:{" "}
                {new Intl.DateTimeFormat("en-GB", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                }).format(new Date(selectedRows.deadLine))}
              </p>
            </>
          )}
          <button onClick={handleClosing} className="btn btn-danger">Close</button>
          <Button onClick={handleOpenChildModal}>Update Status</Button>
        </Box>
      </Modal>
    </>
  );
}
