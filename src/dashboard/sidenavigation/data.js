import EventsIcon from './icons/events';
import GuidesIcon from './icons/guides';
import UserIcon from './icons/users';
import PicturesIcon from './icons/pictures';
import DocumentsIcon from './icons/documents';
import StatisticsIcon from './icons/statistics';

const data = [
  {
    section: 'Blog Posts',
    icon: <DocumentsIcon />,
    content: [
      {
        title: 'Taxes',
        link: '/documents/taxes',
      },
      {
        title: 'Travel',
        link: '/documents/travel',
      },
      {
        title: 'Insurance',
        link: '/documents/insurance',
      },
    ],
  },
  {
    section: 'Memberships',
    icon: <UserIcon />,
    content: [
      {
        title: 'Unbox',
        link: '/messages/unbox',
      },
      {
        title: 'Unread',
        link: '/messages/unread',
      },
      {
        title: 'Archived',
        link: '/messages/archived',
      },
    ],
  },
  {
    section: 'Media',
    icon: <PicturesIcon />,
    content: [
      {
        title: 'Vacations',
        link: '/pictures/vacations',
      },
      {
        title: 'Anniversary',
        link: '/pictures/anniversary',
      },
      {
        title: 'University',
        link: '/pictures/university',
      },
    ],
  },
  {
    section: 'Statistics',
    icon: <StatisticsIcon />,
    content: [
      {
        title: 'Finances',
        link: '/statistics/finances',
      },
      {
        title: 'Memberships',
        link: '/statistics/memberships',
      },
      {
        title: 'Donations',
        link: '/statistics/donations',
      },
    ],
  },
  {
    section: 'Events',
    icon: <EventsIcon />,
    content: [
      {
        title: 'Galas',
        link: '/events/weddings',
      },
    ],
  },
  {
    section: 'Guides',
    icon: <GuidesIcon />,
    content: [
      {
        title: 'Documentation',
        link: '/guides/documentation',
      },
    ],
  },
];

export default data;
