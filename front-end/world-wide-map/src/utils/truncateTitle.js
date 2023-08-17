export const truncateTitle = (title) => {
    if (title.length < 16) {
        return title + ' ...';
    }
    return title.substring(0, 16) + ' ...';
};