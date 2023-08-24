export type NavBarItem = {
    label: string;
    icon?: React.FC<{ color?: string }>;
    url: string;
    isActive: boolean;
    isShowing: boolean;
    isPaywalled?: boolean;
    badge?: string | number;
    onClick?: () => void;
};

export type NavBarItemGroup = NavBarItem & {
    items: NavBarItem[];
};

export type NavDivider = {
    type: 'divider';
};

export type NavBarItems = Array<NavBarItemGroup | NavBarItem | NavDivider>;

export type NavPosition = 'expanded' | 'collapsed';
