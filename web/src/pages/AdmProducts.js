import React, { useEffect, useState } from "react";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const PageAdmProducts = () => {
  
  const columnDefs = [
    {
      headerName: "Nombre",
      field: "name",
      editable: false,
      width: 360,
    },
    {
      headerName: "Activo",
      field: "is_active",
      editable: false,
      width: 80,
      cellRenderer: function(params) {
        var input = document.createElement("input");
        input.type = "checkbox";
        input.checked = params.value;
        input.addEventListener("click", function(event) {
          params.value = !params.value;
          params.node.data.selected = params.value;
        });
        return input;
        }
      },
      {
        headerName: "Precio",
        field: "price",
        width: 500,
        editable: false,
        cellRenderer: function(params) {
          var input = document.createElement("input");
          input.type = "text";
          return input;
        }
    },
  ];
  
  const [rows, setRows] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.REACT_APP_API_URL + "/products");
      const results = await response.json();
      console.log(results);
      setRows(results);
    })();
  }, []);  

  return (
    <div className="container" id="CatalogPage">
      <div className="row">
        <div className="">
          <div className="section-title">
            <h4>Edición Rápida</h4>
          </div>
        </div>
      </div>
      <div className="ag-theme-alpine" style={{height: 400, width: 1024}}>
           <AgGridReact
               rowData={rows}
               columnDefs={columnDefs}
               >
           </AgGridReact>
       </div>
    </div>
  );
};

export default PageAdmProducts;