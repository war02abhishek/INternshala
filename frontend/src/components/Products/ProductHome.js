import React,{Fragment, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";

import { getAllProduct } from '../../actions/productsActions';
import ProductCard from './ProductCard';


const ProductHome = () => {
      const dispatch = useDispatch();
        const { products, loading, error } = useSelector(
          (state) => state.products
        );
        console.log(products);

      useEffect(()=>{
        dispatch(getAllProduct());

      },[])

  return (
    <>
      <h2 className="homeHeading">Feautred Products</h2>
      <div className="container" id="container">
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </div>
    </>
  );
}

export default ProductHome