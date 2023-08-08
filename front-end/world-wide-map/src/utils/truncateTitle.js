export const truncateTitle = (title) => {
    if (title.length < 15) {
        return title + '...';
    }
    return title.substring(0, 15) + '...';
};