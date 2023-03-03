import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductBox from "../components/ProductBox";
import ProductCategoryMenu from "../components/ProductCategoryMenu";

const PageCatalog = () => {
  const {categoryId} = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      /* 
      const url = (categoryId == null) ?  process.env.REACT_APP_API_URL + "/products" : process.env.REACT_APP_API_URL + "/products/"+categoryId
      const url = (categoryId == null) ?  process.env.REACT_APP_API_URL + "/products" : process.env.REACT_APP_API_URL + "/products/"+categoryId
      const response = await fetch(url);
      */
      const response = await fetch(
        process.env.REACT_APP_API_URL +"/products"
      );
      const results = await response.json();
      setResults(results);
    })();
  }, [categoryId]);

  return (
    <div className="container-fluid" id="CatalogPage">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="section-title">
            <h4>Catálogo de Juegos</h4>
          </div>
        </div>
       {/* <ProductCategoryMenu /> */} 
      </div>
      <div className="row">
        {results.length > 0 ? (
          results.map((product) => <ProductBox product={product} />)
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default PageCatalog;
