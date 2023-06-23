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
import React from 'react';


export const sideListItems = [
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

export const tabItems = [
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
];