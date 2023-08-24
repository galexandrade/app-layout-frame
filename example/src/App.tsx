import { LayoutFrame } from 'app-layout-frame';
import {
    IconTachometer,
    IconMessages,
    IconList,
    IconPaperPlane,
    IconUserFriends,
    IconCalendarTomorrow,
    IconFlag,
    IconUserComputer,
    IconQuestionCircle,
    IconMegaphone,
    IconPlug,
    IconRepeat,
    IconCreditCard,
    IconCog,
    IconFourDotsCircle
} from '@7shifts/sous-chef';
import { NavBarItems } from 'app-layout-frame/dist/layout/types';

const NAV_ITEMS: NavBarItems = [
    {
        label: 'Dashboardd',
        isActive: true,
        isShowing: true,
        url: '/dashboard',
        icon: IconTachometer
    },
    {
        label: 'Tickets',
        isActive: false,
        isShowing: true,
        url: '/tickets',
        icon: IconMessages
    },
    {
        label: 'CRM',
        isActive: false,
        isShowing: true,
        url: '/crm',
        icon: IconList
    },
    {
        label: 'Quick messages',
        isActive: false,
        isShowing: true,
        url: '/quick-messages',
        icon: IconPaperPlane
    },
    {
        label: 'Contacts',
        isActive: false,
        isShowing: true,
        url: '/contacts',
        icon: IconUserFriends
    },
    {
        label: 'Schedules',
        isActive: false,
        isShowing: true,
        url: '/schedules',
        icon: IconCalendarTomorrow
    },
    {
        label: 'Tags',
        isActive: false,
        isShowing: true,
        url: '/tags',
        icon: IconFlag
    },
    {
        label: 'Internal chat',
        isActive: false,
        isShowing: true,
        url: '/chats',
        icon: IconUserComputer
    },
    {
        label: 'Help',
        isActive: false,
        isShowing: true,
        url: '/helps',
        icon: IconQuestionCircle
    },
    {
        type: 'divider'
    },
    {
        label: 'Campains',
        isActive: false,
        isShowing: true,
        url: '/campains',
        icon: IconMegaphone
    },
    {
        label: 'Connections',
        isActive: false,
        isShowing: true,
        url: '/connections',
        icon: IconFourDotsCircle
    },
    {
        label: 'Queues',
        isActive: false,
        isShowing: true,
        url: '/queues',
        icon: IconRepeat
    },
    {
        label: 'API',
        isActive: false,
        isShowing: true,
        url: '/api',
        icon: IconPlug
    },
    {
        label: 'Finance',
        isActive: false,
        isShowing: true,
        url: '/finance',
        icon: IconCreditCard
    },
    {
        label: 'Settings',
        isActive: false,
        isShowing: true,
        url: '/settings',
        icon: IconCog
    }
];

function App() {
    return <LayoutFrame navItems={NAV_ITEMS}>test</LayoutFrame>;
}

export default App;
