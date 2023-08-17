import {atom} from "recoil";

export const nowProductId = atom({
    key:"nowProductId",
    default:undefined,
});

export const productlist = atom({
    key:"productlist",
    default:[],
});

export const addresslist = atom({
    key:"addresslist",
    default:[],
});