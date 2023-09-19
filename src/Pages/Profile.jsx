import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import SideNavBar from '../Components/SideNavBar';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ParentModal from './UserUpdate/ParentModal';
export default function Profile() {
  // const navigate = useNavigate()
  const [modalStatus , setModalStatus] = React.useState(false);
  const handleOpen = () => setModalStatus(true);
  const handleClose = () => setModalStatus(false);
  const [details , setDetails] = React.useState({
    name:"",
    isAdmin:true,
    email:"",

  });
  React.useEffect(() => {
    // console.log('useEffect triggered');  // Add this line for debugging
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("accessToken")
      }
    };
  
    axios.post("https://task-management-backend-czfb.onrender.com/api/users/me" , {},config)
      .then((res) => {
        if (res.status === 200) {
          setDetails(res.data.userInfo);
          // console.log(res.data.userInfo);
        }
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.response.data.message)
      });
  }, []);
  return (
    <>
    <SideNavBar/>
    <div className='mt-5 d-flex align-items-center justify-content-center'>
    <Card
      sx={{
        width: 320,
        maxWidth: '100%',
        boxShadow: 'lg',
      }}
    >
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar src="" sx={{ '--Avatar-size': '4rem' }} />
        <Chip
          size="sm"
          variant="soft"
          color={(details.isAdmin === true) ? "success" : "danger"}
          sx={{
            mt: -1,
            mb: 1,
            border: '3px solid',
            borderColor: 'background.surface',
          }}
        >
          Admin Status
        </Chip>
        <Typography level="title-lg">{details.name}</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          {details.email}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 2,
            '& > button': { borderRadius: '2rem' },
          }}
        >
          
          
        </Box>
      </CardContent>
      <CardOverflow sx={{ bgcolor: 'background.level1' }}>
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button onClick={handleOpen}>Edit</Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
      <ParentModal openStatus={modalStatus} onClose={handleClose} userDetails={details}/>
    </Card>
    </div>
    <ToastContainer />
    </>
  );
}