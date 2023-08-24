export const isTouchscreen = (): boolean => {
    return Boolean(window.navigator.maxTouchPoints);
};
