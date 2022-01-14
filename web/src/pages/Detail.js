import React, { useEffect, useState } from "react";

const PageDetail = (props) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async (id) => {
      const response = await fetch(
        process.env.REACT_APP_API_URL +"product/" + id
      );
      const results = await response.json();
      setResults(results);
    })();
  }, [props.id]);

  return (
    <div className="container main-container">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="section-title">
            <h4>DTEAIL</h4>
          </div>
        </div>
        <div className="col-lg-9 col-md-9"></div>
      </div>
      <div className="row">...</div>
    </div>
  );
};

export default PageDetail;
