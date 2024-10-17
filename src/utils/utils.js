import { filter, has } from "lodash";
import { parseISO, isSameDay } from 'date-fns';

export function applySortFilter(array, query) {
    if (!query) return array;

    // Handle case where query is an object and contains a 'search' key
    if (typeof query === 'object' && !Array.isArray(query) && !(query instanceof Date)) {
        // Here, coming array is stored in result
        let result = array;
        // lodash "HAS" is used which will check if filters have search key in it
        if (has(query, "search") && query.search) {
            const searchRegex = new RegExp(escapeRegExp(query.search), 'i');
            result = filter(array, (_row) => Object.keys(_row).some((field) => searchRegex.test(String(_row[field]))));
        }
        // From searched data, filters are applied in the pre-searched table data
        return filter(result, (_row) => {
            return Object.keys(query).every((key) => {
                // If query is empty or key has search key, it will ignore and leaves an empty space
                if (query[key] === "" || key === "search") return true;
                    if(key === "date") {
                    const rowDate = parseISO(_row[key]);
                    return isSameDay(rowDate, query[key]);
                }
                return _row[key] === query[key];
            });
        });
    }

    // Handle other types of queries
    if (typeof query === 'string') {
        const searchRegex = new RegExp(escapeRegExp(query), 'i');
        return filter(array, (_row) => Object.keys(_row).some((field) => searchRegex.test(String(_row[field]))));
    } else if (query instanceof Date) {
        return filter(array, (_row) => {
            const rowDate = parseISO(_row.purchasedOn);
            return isSameDay(rowDate, query);
        });
    }

    return array;
}

export const escapeRegExp = (value = '') => {
    if (typeof value !== 'string') return value;
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};