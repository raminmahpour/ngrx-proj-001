import { Product } from '../product';
import { ProductActionTypes, ProductActions } from './product.actions';

// State for this feature (Product)
export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
  ssas:string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: '',
  ssas:''
};

export function reducer(state = initialState, action: ProductActions): ProductState {

  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };

    case ProductActionTypes.SetCurrentProduct:
      return {
        ...state,
        currentProductId: action.payload.id
      };

    case ProductActionTypes.ClearCurrentProduct:
      return {
        ...state,
        currentProductId: null
      };

    case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProductId: 0
      };

    case ProductActionTypes.LoadSuccess:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        error: '',
        ssas: ''
      };

    case ProductActionTypes.LoadFail:
      return {
        ...state,
        products: [],
        error: action.payload
      };

    case ProductActionTypes.UpdateProductSuccess:
   const updatedProducts = state.products.map(item => action.payload.id === item.id ? action.payload : item);
   console.log("action.payload.id",action.payload.id);
 state.products.map(item =>  console.log("map action.payload.id", action.payload.id) );

 state.products.map(item =>  console.log("map item.id",item.id) );
 console.log("updatedProducts : result",updatedProducts);




  
      return {
        ...state,
        products: updatedProducts,
        currentProductId: action.payload.id,
        error: ''
      };

    case ProductActionTypes.UpdateProductFail:
      return {
        ...state,
        error: action.payload
      };

    // After a create, the currentProduct is the new product.
    case ProductActionTypes.CreateProductSuccess:
      return {
        ...state,
        products: [...state.products, action.payload],
        currentProductId: action.payload.id,
        error: ''
      };

    case ProductActionTypes.CreateProductFail:
      return {
        ...state,
        error: action.payload
      };

    // After a delete, the currentProduct is null.
    case ProductActionTypes.DeleteProductSuccess:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
        currentProductId: null,
        error: ''
      };

    case ProductActionTypes.DeleteProductFail:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
