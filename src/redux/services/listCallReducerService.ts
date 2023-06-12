export const getFilter = (arr: [], props: string | number | null, filter: string) => {
    const filterProps = arr.filter(function (el) {
        return el[filter] === props;
    });
    return filterProps;
};