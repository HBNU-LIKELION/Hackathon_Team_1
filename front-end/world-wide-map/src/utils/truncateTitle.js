export const truncateTitle = (title) => {
    if (title.length < 13) {
        return title + ' ...';
    }
    return title.substring(0, 13) + ' ...';
};