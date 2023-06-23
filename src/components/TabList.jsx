import Box from '@mui/material/Box';
import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const tabItems = [
  { id: 1, text: 'All' },
  { id: 2, text: 'Music' },
  { id: 3, text: 'Music' },
  { id: 4, text: 'Music' },
  { id: 5, text: 'Music' },
  { id: 6, text: 'Music' },
  { id: 7, text: 'Music' },
  { id: 8, text: 'Music' },
  { id: 9, text: 'Music' },
  { id: 10, text: 'Music' },
  { id: 11, text: 'Music' },
  { id: 12, text: 'Music' },
  { id: 13, text: 'Music' },
  { id: 14, text: 'Music' },
  { id: 15, text: 'Music' },
  { id: 16, text: 'Music' },
  { id: 17, text: 'Music' },
  { id: 18, text: 'Music' },
  { id: 19, text: 'Music' },
  { id: 20, text: 'Music' },
  { id: 21, text: 'Music' },
  { id: 22, text: 'Music' },
  { id: 23, text: 'Music' },
  { id: 24, text: 'Music' },
  { id: 25, text: 'Music' },
];

const TabList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable tabs"
        
      >
        {tabItems.map((item) => {
          return <Tab key={item.id} label={item.text} sx={{':hover': { 
            backgroundColor: 'rgba(255, 255, 255, 0.123)',
            borderRadius: '10px' 
             } }} />;
        })}
      </Tabs>
    </Box>
  );
};

export default TabList;