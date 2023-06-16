import * as Styles from './styles';
import { Avatar, Button, IconButton } from '@mui/material';
import { MoveToInbox, Dashboard, Feed, AssessmentOutlined } from '@mui/icons-material';
import Logo from '../../../public/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';

const SideBar = () => {
  return (
    <Styles.MainContainer>
      <img src={Logo}></img>
      <IconButton aria-label="menu" size='large' classes='sidebar-menu'>
        <MenuIcon />
      </IconButton>

      <Styles.ButtonsContainer>
        <Button variant="text" startIcon={<Dashboard />}>
          <span className='button-label'>Dashboard</span>
        </Button>
        <Button variant="text" startIcon={<MoveToInbox />}>
          <span className='button-label'>Missions</span>
        </Button>
        <Button variant="text" startIcon={<Feed />}>
          <span className='button-label'>Media</span>
        </Button>
        <Button variant="text" startIcon={<AssessmentOutlined />}>
          <span className='button-label'>Analytics</span>
        </Button>
      </Styles.ButtonsContainer>
      <Styles.UserInfos>
        <Avatar
          alt="UserAvatar"
          src='../../../public/avatar.png'
          sx={{ width: 48, height: 48 }}
        />
        <div className='user-contacts'>
          <span className='user-name'>Sergey Goldberg</span>
          <span className='user-email'>sergey@youremail.com</span>
        </div>
      </Styles.UserInfos>
    </Styles.MainContainer>
  );
}

export default SideBar;