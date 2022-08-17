import {RootState} from "../redusers";
import {ProductItemI} from "../../models/products";

export const getProductSelector = (state: RootState): Array<ProductItemI> => state.products.products
export const getFilteredProductsSelector = (state: RootState): Array<ProductItemI> => state.products.filteredProducts
export const getProductTypesSelector = (state: RootState): Array<string> => state.products.productTypes