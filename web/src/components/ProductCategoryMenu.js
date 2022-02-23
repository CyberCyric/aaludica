import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCategoryMenu = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        process.env.REACT_APP_API_URL +"/categories"
      );
      const results = await response.json();
      setResults(results);
    })();
  }, []);

  return (
    <section>
    <ul className="catalogo_categorias">
      <li data-filter=".todos">
        <Link to="/catalog/" className="badge rounded-pill bg-light text-dark">
          Todos
        </Link>
      </li>
      {results.length > 0 ? (
        results.map((category) => (
          <li data-filter=".{category.name}" key={`${category.id}`}>
            <Link to={`/catalog/${category.id}`} className="badge rounded-pill bg-dark">
              {category.name}
            </Link>
          </li>
        ))
      ) : (
        <span>No hay resultados.</span>
      )}
    </ul>
    </section>
  );
};
export default ProductCategoryMenu;
