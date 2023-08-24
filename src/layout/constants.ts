import { NavDivider } from './types';

export const NAV_POSITION = {
    EXPANDED: 'expanded' as const,
    COLLAPSED: 'collapsed' as const
};

export const NAV_SIZE = {
    EXPANDED: 240,
    COLLAPSED: 72
} as const;

export const DIVIDER: NavDivider = {
    type: 'divider' as const
};
