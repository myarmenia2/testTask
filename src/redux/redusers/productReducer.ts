import {ProductAction,ProductActionTypes} from "../actionTypes/productActionTypes";
import {ProductItemI} from "../../models/products";

interface ProductsState {
  loading: boolean,
  error: any,
  products: Array<ProductItemI>,
  filteredProducts: Array<ProductItemI>,
  productTypes: Array<string>,
  filters: Array<string>
}

const initialState: ProductsState = {
  loading: false,
  error: null,
  products: [],
  filteredProducts: [],
  productTypes: [],
  filters: []
}

export default function productReducer(state = initialState, action:ProductAction):ProductsState {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCT:
      return {
        ...state,
        loading: true
      };
    case ProductActionTypes.GET_PRODUCT_SUCCESS:
      const typeList = action.payload!.map((element: ProductItemI) => element.type);

      return {
        ...state,
        loading: false,
        products: action.payload!,
        productTypes: Array.from(new Set(typeList)),
        filters:[]
      }
    case ProductActionTypes.GET_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ProductActionTypes.FILTERED_PRODUCT:
      const indexProduct = state.filters.indexOf(action.payload!.product)

      state.filters.includes(action.payload!.product)
          ? state.filters.splice(indexProduct, 1)
          : state.filters.push(action.payload!.product)

      state.products.forEach((product) => {
        if (state.filters.includes(product.type)){
          state.filteredProducts.push(product)
        } else {
          state.filteredProducts = []
          state.products.forEach(product => state.filters.includes(product.type) && state.filteredProducts.push(product))
        }})

      if(!state.filters.length) state.filteredProducts = [];

      state.filteredProducts = state.filteredProducts.filter((rest, index, self) =>
          index === self.findIndex((element) => element.id === rest.id))

      return {
        ...state,
      }

    default:
      return state
  }
}