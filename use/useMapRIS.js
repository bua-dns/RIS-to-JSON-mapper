import { mapping } from '../config/mapping.js';

export function useMapRIS(items) {
    let mappedItems = []
    for (let item of items) {
        let mappedItem = {};
        for (let key in item) {
            if (mapping[key]) {
                mappedItem[mapping[key]] = item[key];
            } else {
                mappedItem[key] = item[key];
            }
        }
        mappedItems.push(mappedItem);
    }
    return mappedItems;
}