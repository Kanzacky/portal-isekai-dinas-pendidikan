export interface MenuModel {
    id?: string | number;
    label?: string;
    to?: string;
    items?: Array<MenuModel>;
    icon?: string;
}