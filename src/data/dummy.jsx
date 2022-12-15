import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { SiBookstack } from 'react-icons/si';
import { RiAdminFill } from 'react-icons/ri';
import { IoMdListBox } from 'react-icons/io';
import { RiMenuAddLine } from 'react-icons/ri';
import { IoAddCircleSharp } from 'react-icons/io5';
import { MdFileCopy } from 'react-icons/md';



export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'dashboard',
          icon: <RiAdminFill />,
        },
      ],
    },
  
    {
      title: 'Courses',
      links: [
        {
          name: 'course list',
          icon: <IoMdListBox />,
        },
        {
          name: 'Add courses',
          icon: <RiMenuAddLine />,
        },
      ],
    },
    {
      title: 'Batches',
      links: [
        {
          name: 'Batch list',
          icon: <IoMdListBox />,
        },
        {
          name: 'Add Batch',
          icon: <IoAddCircleSharp />,
        },
      ],
    },
    {
      title: 'Admissions',
      links: [
        {
            name: 'Admissions',
            icon: <IoMdContacts />,
          },
        {
          name: 'Admission list',
          icon: <SiBookstack />,
        },
        
      ],
    },
  ];


  

  export const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#03C9D7',
    },
    {
      name: 'purple-theme',
      color: '#FFB300',
    },
    {
      name: 'red-theme',
      color: '#FF5C8E',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
  ];

  const customerGridImage = (props) => (
    <div className="image flex gap-4">
      <img
        className="rounded-full w-10 h-10"
        src={props.CustomerImage}
        alt="employee"
      />
      <div>
        <p>{props.CustomerName}</p>
        <p>{props.CustomerEmail}</p>
      </div>
    </div>
  );

  const customerGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
      <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
      <p>{props.Status}</p>
    </div>
  );

  export const customersGrid = [
    { type: 'checkbox', width: '50' },
    { headerText: 'Name',
      width: '150',
      template: customerGridImage,
      textAlign: 'Center' },
    { field: 'ProjectName',
      headerText: 'Project Name',
      width: '150',
      textAlign: 'Center' },
    { field: 'Status',
      headerText: 'Status',
      width: '130',
      format: 'yMd',
      textAlign: 'Center',
      template: customerGridStatus
     },
    {
      field: 'Weeks',
      headerText: 'Weeks',
      width: '100',
      format: 'C2',
      textAlign: 'Center' },
    { field: 'Budget',
      headerText: 'Budget',
      width: '100',
      format: 'yMd',
      textAlign: 'Center' },
  
    { field: 'Location',
      headerText: 'Location',
      width: '150',
      textAlign: 'Center' },
  
    { field: 'CustomerID',
      headerText: 'Customer ID',
      width: '120',
      textAlign: 'Center',
      isPrimaryKey: true,
    },
  
  ];



  export const customersData = [
    {
      CustomerID: 1001,
      CustomerName: 'Nirav Joshi',
      CustomerEmail: 'nirav@gmail.com',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      ProjectName: 'Hosting Press HTML',
      Status: 'Active',
      StatusBg: '#8BE78B',
      Weeks: '40',
      Budget: '$2.4k',
      Location: 'India',
    },
    {
      CustomerID: 1002,
  
      CustomerName: 'Sunil Joshi',
      CustomerEmail: 'sunil@gmail.com',
      ProjectName: 'Elite Admin',
      Status: 'Active',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  
      StatusBg: '#8BE78B',
      Weeks: '11',
      Budget: '$3.9k',
      Location: 'India',
    },
    {
      CustomerID: 1003,
  
      CustomerName: 'Andrew McDownland',
      CustomerEmail: 'andrew@gmail.com',
      ProjectName: 'Real Homes WP Theme',
      Status: 'Pending',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#FEC90F',
      Weeks: '19',
      Budget: '$24.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1004,
  
      CustomerName: 'Christopher Jamil',
      CustomerEmail: 'jamil@gmail.com',
      ProjectName: 'MedicalPro WP Theme',
      Status: 'Completed',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#8BE78B',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1005,
  
      CustomerName: 'Michael',
      CustomerEmail: 'michael@gmail.com',
      ProjectName: 'Weekly WP Theme',
      Status: 'Cancel',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: 'red',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1006,
      CustomerName: 'Nirav Joshi',
      CustomerEmail: 'nirav@gmail.com',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      ProjectName: 'Hosting Press HTML',
      Status: 'Active',
      StatusBg: '#8BE78B',
      Weeks: '40',
      Budget: '$2.4k',
      Location: 'India',
    },
    {
      CustomerID: 1007,
  
      CustomerName: 'Sunil Joshi',
      CustomerEmail: 'sunil@gmail.com',
      ProjectName: 'Elite Admin',
      Status: 'Active',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  
      StatusBg: '#8BE78B',
      Weeks: '11',
      Budget: '$3.9k',
      Location: 'India',
    },
    {
      CustomerID: 1008,
  
      CustomerName: 'Andrew McDownland',
      CustomerEmail: 'andrew@gmail.com',
      ProjectName: 'Real Homes WP Theme',
      Status: 'Pending',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#FEC90F',
      Weeks: '19',
      Budget: '$24.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1009,
  
      CustomerName: 'Christopher Jamil',
      CustomerEmail: 'jamil@gmail.com',
      ProjectName: 'MedicalPro WP Theme',
      Status: 'Completed',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#8BE78B',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1010,
  
      CustomerName: 'Michael',
      CustomerEmail: 'michael@gmail.com',
      ProjectName: 'Weekly WP Theme',
      Status: 'Cancel',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: 'red',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1011,
      CustomerName: 'Nirav Joshi',
      CustomerEmail: 'nirav@gmail.com',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      ProjectName: 'Hosting Press HTML',
      Status: 'Active',
      StatusBg: '#8BE78B',
      Weeks: '40',
      Budget: '$2.4k',
      Location: 'India',
    },
    {
      CustomerID: 1012,
  
      CustomerName: 'Sunil Joshi',
      CustomerEmail: 'sunil@gmail.com',
      ProjectName: 'Elite Admin',
      Status: 'Active',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  
      StatusBg: '#8BE78B',
      Weeks: '11',
      Budget: '$3.9k',
      Location: 'India',
    },
    {
      CustomerID: 1013,
  
      CustomerName: 'Andrew McDownland',
      CustomerEmail: 'andrew@gmail.com',
      ProjectName: 'Real Homes WP Theme',
      Status: 'Pending',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#FEC90F',
      Weeks: '19',
      Budget: '$24.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1014,
  
      CustomerName: 'Christopher Jamil',
      CustomerEmail: 'jamil@gmail.com',
      ProjectName: 'MedicalPro WP Theme',
      Status: 'Completed',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#8BE78B',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1015,
  
      CustomerName: 'Michael',
      CustomerEmail: 'michael@gmail.com',
      ProjectName: 'Weekly WP Theme',
      Status: 'Cancel',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: 'red',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1016,
      CustomerName: 'Nirav Joshi',
      CustomerEmail: 'nirav@gmail.com',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      ProjectName: 'Hosting Press HTML',
      Status: 'Active',
      StatusBg: '#8BE78B',
      Weeks: '40',
      Budget: '$2.4k',
      Location: 'India',
    },
    {
      CustomerID: 1017,
  
      CustomerName: 'Sunil Joshi',
      CustomerEmail: 'sunil@gmail.com',
      ProjectName: 'Elite Admin',
      Status: 'Active',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  
      StatusBg: '#8BE78B',
      Weeks: '11',
      Budget: '$3.9k',
      Location: 'India',
    },
    {
      CustomerID: 1018,
  
      CustomerName: 'Andrew McDownland',
      CustomerEmail: 'andrew@gmail.com',
      ProjectName: 'Real Homes WP Theme',
      Status: 'Pending',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#FEC90F',
      Weeks: '19',
      Budget: '$24.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1019,
  
      CustomerName: 'Christopher Jamil',
      CustomerEmail: 'jamil@gmail.com',
      ProjectName: 'MedicalPro WP Theme',
      Status: 'Completed',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#8BE78B',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1020,
  
      CustomerName: 'Michael',
      CustomerEmail: 'michael@gmail.com',
      ProjectName: 'Weekly WP Theme',
      Status: 'Cancel',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: 'red',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1021,
      CustomerName: 'Nirav Joshi',
      CustomerEmail: 'nirav@gmail.com',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      ProjectName: 'Hosting Press HTML',
      Status: 'Active',
      StatusBg: '#8BE78B',
      Weeks: '40',
      Budget: '$2.4k',
      Location: 'India',
    },
    {
      CustomerID: 1022,
  
      CustomerName: 'Sunil Joshi',
      CustomerEmail: 'sunil@gmail.com',
      ProjectName: 'Elite Admin',
      Status: 'Active',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  
      StatusBg: '#8BE78B',
      Weeks: '11',
      Budget: '$3.9k',
      Location: 'India',
    },
    {
      CustomerID: 1023,
  
      CustomerName: 'Andrew McDownland',
      CustomerEmail: 'andrew@gmail.com',
      ProjectName: 'Real Homes WP Theme',
      Status: 'Pending',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#FEC90F',
      Weeks: '19',
      Budget: '$24.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1024,
  
      CustomerName: 'Christopher Jamil',
      CustomerEmail: 'jamil@gmail.com',
      ProjectName: 'MedicalPro WP Theme',
      Status: 'Completed',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#8BE78B',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1025,
  
      CustomerName: 'Michael',
      CustomerEmail: 'michael@gmail.com',
      ProjectName: 'Weekly WP Theme',
      Status: 'Cancel',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: 'red',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1026,
      CustomerName: 'Nirav Joshi',
      CustomerEmail: 'nirav@gmail.com',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      ProjectName: 'Hosting Press HTML',
      Status: 'Active',
      StatusBg: '#8BE78B',
      Weeks: '40',
      Budget: '$2.4k',
      Location: 'India',
    },
    {
      CustomerID: 1027,
  
      CustomerName: 'Sunil Joshi',
      CustomerEmail: 'sunil@gmail.com',
      ProjectName: 'Elite Admin',
      Status: 'Active',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  
      StatusBg: '#8BE78B',
      Weeks: '11',
      Budget: '$3.9k',
      Location: 'India',
    },
    {
      CustomerID: 1028,
  
      CustomerName: 'Andrew McDownland',
      CustomerEmail: 'andrew@gmail.com',
      ProjectName: 'Real Homes WP Theme',
      Status: 'Pending',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#FEC90F',
      Weeks: '19',
      Budget: '$24.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1029,
  
      CustomerName: 'Christopher Jamil',
      CustomerEmail: 'jamil@gmail.com',
      ProjectName: 'MedicalPro WP Theme',
      Status: 'Completed',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#8BE78B',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1030,
  
      CustomerName: 'Michael',
      CustomerEmail: 'michael@gmail.com',
      ProjectName: 'Weekly WP Theme',
      Status: 'Cancel',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: 'red',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1031,
      CustomerName: 'Nirav Joshi',
      CustomerEmail: 'nirav@gmail.com',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      ProjectName: 'Hosting Press HTML',
      Status: 'Active',
      StatusBg: '#8BE78B',
      Weeks: '40',
      Budget: '$2.4k',
      Location: 'India',
    },
    {
      CustomerID: 1032,
  
      CustomerName: 'Sunil Joshi',
      CustomerEmail: 'sunil@gmail.com',
      ProjectName: 'Elite Admin',
      Status: 'Active',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  
      StatusBg: '#8BE78B',
      Weeks: '11',
      Budget: '$3.9k',
      Location: 'India',
    },
    {
      CustomerID: 1033,
  
      CustomerName: 'Andrew McDownland',
      CustomerEmail: 'andrew@gmail.com',
      ProjectName: 'Real Homes WP Theme',
      Status: 'Pending',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#FEC90F',
      Weeks: '19',
      Budget: '$24.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1034,
  
      CustomerName: 'Christopher Jamil',
      CustomerEmail: 'jamil@gmail.com',
      ProjectName: 'MedicalPro WP Theme',
      Status: 'Completed',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#8BE78B',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1035,
  
      CustomerName: 'Michael',
      CustomerEmail: 'michael@gmail.com',
      ProjectName: 'Weekly WP Theme',
      Status: 'Cancel',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: 'red',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1036,
      CustomerName: 'Nirav Joshi',
      CustomerEmail: 'nirav@gmail.com',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      ProjectName: 'Hosting Press HTML',
      Status: 'Active',
      StatusBg: '#8BE78B',
      Weeks: '40',
      Budget: '$2.4k',
      Location: 'India',
    },
    {
      CustomerID: 1037,
  
      CustomerName: 'Sunil Joshi',
      CustomerEmail: 'sunil@gmail.com',
      ProjectName: 'Elite Admin',
      Status: 'Active',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  
      StatusBg: '#8BE78B',
      Weeks: '11',
      Budget: '$3.9k',
      Location: 'India',
    },
    {
      CustomerID: 1038,
  
      CustomerName: 'Andrew McDownland',
      CustomerEmail: 'andrew@gmail.com',
      ProjectName: 'Real Homes WP Theme',
      Status: 'Pending',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#FEC90F',
      Weeks: '19',
      Budget: '$24.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1039,
      CustomerName: 'Christopher Jamil',
      CustomerEmail: 'jamil@gmail.com',
      ProjectName: 'MedicalPro WP Theme',
      Status: 'Completed',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: '#8BE78B',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      CustomerID: 1040,
      CustomerName: 'Michael',
      CustomerEmail: 'michael@gmail.com',
      ProjectName: 'Weekly WP Theme',
      Status: 'Cancel',
      CustomerImage:
        "https://images.unsplash.com/photo-1665178861957-32094ff5aca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      StatusBg: 'red',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
  
  ];