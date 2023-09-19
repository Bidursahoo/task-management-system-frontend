import React, { useEffect, useState } from "react";
import SideNavBar from "../Components/SideNavBar";
import ParentModal from "../Components/Modals/ParentModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Task() {
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("accessToken"),
        // "x-auth-token": "jvjhbwhjbfere"
      },
    };

    axios
      .get(
        "https://task-management-backend-czfb.onrender.com/api/task/",
        config
      )
      .then((res) => {
        setTaskData(res.data.data);
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      });
  }, []);
  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
  };

  const handleClose = () => {
    setSelectedRow(null);
  };

  return (
    <>
      <SideNavBar />
      <div className="mt-4 d-flex justify-content-center">
        <div className="w-75">
          <ParentModal selectedRows={selectedRow} handleClosing={handleClose} />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned By</th>
                <th scope="col">DeadLine</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {taskData.map((rowData, index) => (
                <tr key={rowData.id} onClick={() => handleRowClick(rowData)}>
                  <th scope="row">{index + 1}</th>
                  <td>{rowData.title}</td>
                  <td>{rowData.desc.slice(0,5)}...</td>

                  <td>{rowData.assignedBy.name}</td>
                  <td>
                    {new Intl.DateTimeFormat("en-GB", {
                      year: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                    }).format(new Date(rowData.deadLine))}
                  </td>
                  <td>
                    {rowData.status === "Assigned" && (
                      <p className="text-danger">{rowData.status}</p>
                    )}
                    {rowData.status === "In Progress" && (
                      <p className="text-warning">{rowData.status}</p>
                    )}
                    {rowData.status === "Done" && (
                      <p className="text-success">{rowData.status}</p>
                    )}
                  </td>
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
