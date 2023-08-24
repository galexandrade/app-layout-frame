export const getBadgeContent = (
    badge: (string | null | undefined) | (number | null | undefined)
): string | null | undefined => {
    if (typeof badge === 'number') {
        if (badge > 0 && badge <= 99) {
            //covers number values between 0 and 99
            return String(badge);
        } else if (badge > 99) {
            //covers number values bigger than 99
            return '99+';
        }
    } else if (typeof badge === 'string') {
        //covers all string values, excluding "0"
        if (badge === '0') {
            return null;
        } else if (parseInt(badge) > 99) {
            //covers number values bigger than 99
            return '99+';
        } else {
            //return all other strings
            return badge;
        }
    }

    return null;
};
