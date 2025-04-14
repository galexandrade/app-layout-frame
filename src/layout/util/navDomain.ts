export const getBadgeContent = (
    badge: (string | null | undefined) | (number | null | undefined),
    limit: number = 99
): string | null | undefined => {
    switch(typeof badge){
        case "number":
            if (badge > limit) {
                // covers number values bigger than limit, predefined 99
                return `${limit}+`;
            } 
            return `${badge}`;
        case "string":
            const badgeNumber = Number(badge);
            if(!isNaN(badgeNumber)){
                return getBadgeContent(badgeNumber);
            }
            return badge;
        default:
            // throw new Error(`Invalid type: ${typeof badge}`);
            return null;
    }
};
