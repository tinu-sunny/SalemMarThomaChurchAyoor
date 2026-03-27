import ChurchIcon from '@mui/icons-material/Church';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const services = [
  {
    title: 'Worship Service Timings',
    icon: <ChurchIcon />,
    data: [
      { label: 'Sunday Worship Holy Communion', time: '8:00 AM' },
      { label: 'Sunday School', time: '10:30 AM' },
    ],
  },
  {
    title: 'Sevika Sangam',
    icon: <AutoAwesomeIcon />,
    data: [{ label: 'Tuseday', time: '10:00 AM' }],
  },
  {
    title: 'Edavaka Mission',
    icon: <VolunteerActivismIcon />,
    data: [{ label: 'Friday', time: '10:00 AM' }],
  },
];

export default services