import { MenuModel } from "@/types";

/**
 * Helper untuk matching URL menu (Recursive)
 */
export const findMatchingItem = (menuData: Array<MenuModel>, url: string): boolean => {
    for (const item of menuData) {
        if (item.to && new RegExp(`^${item.to}(/|$)`).test(url)) return true;
        if (item.items && findMatchingItem(item.items, url)) return true;
    }
    return false;
};

/**
 * Mencari item menu secara mendalam
 */
export const findToValuesRecursive = (data: Array<MenuModel>, searchToValue: string): Array<MenuModel> => {
    const matching: Array<MenuModel> = [];
    function search(items: Array<MenuModel>) {
        for (const item of items) {
            if (item.to === searchToValue) matching.push(item);
            if (item.items) search(item.items);
        }
    }
    search(data);
    return matching;
};

export const notify = (type: 'success' | 'error', message: string) => {
    console.log(`[${type.toUpperCase()}]: ${message}`);
};