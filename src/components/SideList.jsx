import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { hideOnMobile, sideListWrapper } from '../styles/styles';

import { AiFillHome } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { MdSubscriptions } from 'react-icons/md';
import { BiLibrary } from 'react-icons/bi';
import { MdHistory } from 'react-icons/md';
import { BiVideo } from 'react-icons/bi';
import { BsStopwatch } from 'react-icons/bs';
import { MdLocalMovies } from 'react-icons/md';
import { SiFacebookgaming } from 'react-icons/si';
import { SiLivechat } from 'react-icons/si';
import { GiLargeDress } from 'react-icons/gi';
import { AiFillYoutube } from 'react-icons/ai';
import { SiYoutubestudio } from 'react-icons/si';
import { TbBrandYoutube } from 'react-icons/tb';
import { CgYoutube } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { FaHistory } from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';
import { MdFeedback } from 'react-icons/md';

const sideListItems = [
  { id: 1, text: 'test1', icon: <AiFillHome size={24} color='#ffff'/> },
  { id: 2, text: 'test2', icon: <MdOutlineExplore size={24} color='#ffff' /> },
  { id: 3, text: 'test3', icon: <AiOutlinePlaySquare size={24} color='#ffff'/> },
  { id: 4, text: 'test4', icon: <MdSubscriptions size={24} color='#ffff'/> },
  { id: 5, divider: true },
  { id: 6, text: 'test5', icon: <BiLibrary size={24} color='#ffff'/> },
  { id: 7, text: 'test6', icon: <MdHistory size={24} color='#ffff'/> },
  { id: 8, text: 'test7', icon: <BiVideo size={24}color='#ffff' /> },
  { id: 9, text: 'test8', icon: <BsStopwatch size={24} color='#ffff'/> },
  { id: 10, subdivision: true, text: 'Explore' },
  { id: 11, text: 'test9', icon: <MdLocalMovies size={24} color='#ffff'/> },
  { id: 12, text: 'test10', icon: <SiFacebookgaming size={24} color='#ffff'/> },
  { id: 13, text: 'test11', icon: <SiLivechat size={24} color='#ffff'/> },
  { id: 14, text: 'test12', icon: <GiLargeDress size={24} color='#ffff'/> },
  { id: 15, subdivision: true, text: 'More from ' },
  {
    id: 16,
    text: 'test13',
    icon: <AiFillYoutube size={24} color='#ffff'  />,
  },
  {
    id: 17,
    text: 'test14',
    icon: <SiYoutubestudio size={24} color='#ffff' />,
  },
  {
    id: 18,
    text: 'test15',
    icon: <TbBrandYoutube size={24} color='#ffff' />,
  },
  { id: 19, text: 'test16', icon: <CgYoutube size={24} color='#ffff' /> },
  { id: 20, divider: true },
  { id: 21, text: 'Settings', icon: <FiSettings size={24} color='#ffff'/> },
  { id: 22, text: 'Report History', icon: <FaHistory size={24} color='#ffff'/> },
  { id: 23, text: 'Help', icon: <FiHelpCircle size={24} color='#ffff'/> },
  { id: 24, text: 'Send Feedback', icon: <MdFeedback size={24} color='#ffff'/> },
];

const [menudata, setMenuData] = useState();

const SideList = () => {



  
  return (
    <Box sx={{sideListWrapper, hideOnMobile}}>
      {sideListItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item.subdivision ? (
              <>
                <Divider />
                <Box sx={{ ml: 2, mt: 2 }}>
                  <Typography
                    sx={{ 
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                    variant="button"
                    display="block"
                    gutterBottom
                  >
                    {item.text}
                  </Typography>
                </Box>
              </>
            ) : item.divider ? (
              <Divider />
            ) : (
              <nav aria-label="Side list items">
                <List sx={{ p: 0 }}>
                  <ListItem disablePadding onClick={()=> setMenuData("test1")}>
                    <ListItemButton 
                    sx={{ ':hover': { 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '15px' 
                       } }}> 
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          sx: { color: 'white' },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            )}
          </React.Fragment>
        );
      })}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {menudata == "test1" && <Test1 />}
        {menudata == "test2" && <Test2 />}
        {menudata == "test3" && <Test3 />}
                  
      </Box>
    </Box>
  );
  
};

export default SideList;