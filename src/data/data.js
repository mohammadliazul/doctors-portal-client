import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AppsIcon from '@mui/icons-material/Apps';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        Icon: AccessTimeIcon,
        background: 'linear-gradient(90deg, #19D3AE, #0FCFEC)'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        Icon: LocationOnIcon,
        background: '#3A4256'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        Icon: PhoneInTalkIcon,
        background: 'linear-gradient(90deg, #19D3AE, #0FCFEC)'
    },
]

export const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
]

export const dashboardNavLink = [
    {
      id: 1,
      Icon: AppsIcon,
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      id: 2,
      Icon: CalendarMonthOutlinedIcon,
      name: 'Appointments',
      link: '/dashboard/appointments',
    },
    {
      id: 3,
      Icon: PeopleAltIcon,
      name: 'Patients',
      link: '/dashboard/patients',
    },
    {
      id: 4,
      Icon: FeedOutlinedIcon,
      name: 'Prescriptions',
      link: '/dashboard/prescriptions',
    },
  ]