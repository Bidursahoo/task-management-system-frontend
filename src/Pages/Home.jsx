import React, { useEffect ,useState} from 'react'
import SideNavBar from '../Components/SideNavBar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate()
  const [name , setName] = useState();
  useEffect(() => {
    // console.log('useEffect triggered');  // Add this line for debugging
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("accessToken")
      }
    };
  
    axios.get("https://task-management-backend-czfb.onrender.com/api/task/verify" , config)
      .then((res) => {
        // console.log('API call successful');  // Add this line for debugging
        if (res.status) {
          setName(res.data.name);
          toast('Hello ' + res.data.name + '! 👋 ', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        // console.log('API call failed');  // Add this line for debugging
        // console.log(err)
        // console.log(err.response.data.message)
        navigate("/login");
      });
  }, []);
  
  
  return (
    <div>
        <SideNavBar/>
        <div className='mt-5'>
        <h1 className='text-center'>Hello {name} 🙇</h1>
        </div>
        <ToastContainer />
    </div>
  )
}
