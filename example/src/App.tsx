import { LayoutFrame, NavButton } from 'app-layout-frame';
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
    IconFourDotsCircle,
    IconComment,
    DropdownList,
    DropdownListItem
} from '@7shifts/sous-chef';
import { NavBarItems } from 'app-layout-frame/dist/layout/types';
import { Outlet } from 'react-router-dom';

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
    return (
        <LayoutFrame
            navItems={NAV_ITEMS}
            appLogo={<Logo />}
            companyLogoURL="https://media.istockphoto.com/id/1164466990/vector/digital-signage-pixel-icon-tech-element-vector-logo-icon-illustrator.jpg?s=612x612&w=0&k=20&c=tC_2Q7WSFbUUSDC7Nk9u-krFzDrWA4-aZjX3HI_8LoU="
            companyName="Clash Creative Marketing"
            userPrifileImageURL="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
            accountMenuDropdown={
                <DropdownList>
                    <DropdownListItem href="/employees">
                        My account
                    </DropdownListItem>
                    <DropdownListItem href="/employees">
                        Logout
                    </DropdownListItem>
                </DropdownList>
            }
            actions={[
                <NavButton
                    tooltipContent="Announcements"
                    onClick={() => console.log()}
                    key={0}
                    badge={2}
                >
                    <IconMegaphone color="grey-400" />
                </NavButton>,
                <NavButton
                    tooltipContent="Messages"
                    onClick={() => console.log()}
                    key={1}
                    badge
                >
                    <IconComment color="grey-400" />
                </NavButton>
            ]}
        >
            <Outlet />
        </LayoutFrame>
    );
}

const Logo = () => (
    <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="47"
        viewBox="0 0 220.000000 182.000000"
        preserveAspectRatio="xMidYMid meet"
    >
        <g
            transform="translate(0.000000,182.000000) scale(0.100000,-0.100000)"
            fill="#273a62"
            stroke="none"
        >
            <path
                d="M1225 1795 c-28 -27 -31 -49 -10 -85 19 -32 19 -64 0 -80 -8 -6 -47
-18 -87 -27 -79 -16 -197 -68 -240 -107 -43 -39 -95 -112 -108 -153 -8 -22
-33 -57 -61 -84 -48 -44 -49 -46 -49 -105 1 -76 14 -135 36 -151 9 -7 46 -22
80 -33 41 -14 64 -27 64 -37 0 -8 -24 -42 -54 -75 -115 -127 -166 -287 -117
-365 45 -71 128 -87 201 -39 22 14 44 26 49 26 6 0 24 -29 41 -64 39 -82 118
-169 184 -204 70 -36 151 -36 221 0 88 46 146 118 221 276 1 2 18 -8 39 -22
51 -35 97 -47 138 -35 69 20 100 67 100 151 -1 79 -49 178 -132 271 -34 37
-61 72 -61 76 0 15 24 28 81 45 81 23 92 39 97 147 4 76 2 93 -13 109 -23 26
-35 25 -35 0 0 -11 -8 -37 -17 -58 l-17 -37 -6 95 c-5 74 -12 106 -33 146 -56
110 -186 198 -336 229 -41 9 -80 20 -88 26 -17 15 -17 50 2 75 23 31 18 70
-11 93 -34 27 -50 26 -79 -4z m72 -20 c9 -25 -4 -29 -17 -6 -7 15 -7 21 0 21
6 0 13 -7 17 -15z m158 -250 c259 -66 351 -385 164 -560 -88 -82 -231 -132
-354 -122 -110 8 -236 63 -264 115 -8 14 1 13 48 -10 115 -55 302 -56 423 -1
176 79 236 298 114 419 -61 62 -107 71 -210 45 -102 -26 -138 -26 -218 -1 -34
11 -74 20 -88 20 l-25 1 25 21 c88 75 255 106 385 73z m-355 -230 c83 -43 52
-208 -40 -208 -87 0 -118 144 -43 203 31 24 45 25 83 5z m420 -12 c58 -52 45
-159 -22 -191 -59 -28 -124 42 -114 123 5 44 51 95 86 95 11 0 34 -12 50 -27z
m172 -465 c50 -61 98 -139 92 -149 -3 -5 -16 -9 -29 -9 -12 0 -48 -13 -79 -29
l-56 -30 -1 37 c-1 50 -5 77 -26 146 l-17 59 23 18 c28 23 45 16 93 -43z
m-782 -29 c6 -10 10 -59 9 -109 l-1 -91 -31 24 c-18 13 -46 29 -64 36 -38 15
-45 30 -33 72 25 85 91 123 120 68z m624 -34 c37 -119 14 -263 -59 -371 -41
-59 -68 -74 -133 -74 -165 1 -272 187 -198 346 39 85 89 112 246 134 41 6 76
13 79 15 2 3 14 5 26 5 17 0 25 -11 39 -55z"
            />
            <path
                d="M1251 703 c-5 -10 -10 -29 -11 -43 -6 -64 1 -83 39 -121 31 -31 46
-39 75 -39 44 0 91 22 106 51 11 20 11 20 -14 3 -36 -23 -109 -14 -141 16 -31
29 -49 83 -41 121 6 33 1 37 -13 12z"
            />
            <path
                d="M877 1775 c-167 -69 -351 -245 -439 -420 -51 -101 -78 -184 -94 -289
-19 -123 -13 -224 22 -356 88 -331 318 -564 659 -666 78 -24 108 -27 230 -28
116 0 155 3 223 22 411 111 703 479 703 885 0 167 -38 314 -72 280 -7 -7 -7
-27 0 -68 33 -180 23 -334 -35 -494 -42 -119 -96 -209 -178 -297 -144 -156
-331 -251 -540 -274 -176 -20 -347 13 -504 96 -218 115 -371 305 -434 539 -31
116 -31 326 0 443 71 264 240 464 488 577 58 27 75 39 70 51 -3 8 -6 18 -6 20
0 10 -40 1 -93 -21z"
                fill="#1a70b2"
            />
            <path
                d="M405 1602 c-80 -106 -167 -279 -194 -388 -47 -186 -51 -393 -11 -549
28 -110 125 -302 205 -407 67 -89 83 -100 105 -73 10 12 4 25 -37 72 -100 117
-166 237 -209 380 -36 118 -45 365 -20 493 36 175 119 345 225 462 49 54 53
71 21 88 -16 9 -28 -3 -85 -78z"
                fill="#1a70b2"
            />
            <path
                d="M110 1388 c-63 -132 -91 -256 -97 -435 -6 -161 1 -226 39 -343 35
-109 65 -160 93 -160 14 0 25 2 25 4 0 2 -14 33 -30 70 -57 125 -74 221 -74
406 1 145 4 177 27 263 15 55 46 139 71 188 l44 89 -29 0 c-28 0 -33 -7 -69
-82z"
                fill="#1a70b2"
            />
        </g>
    </svg>
);

export default App;
