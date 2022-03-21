import React, { useEffect, useState } from "react";
import { Card, ResourceList } from "@shopify/polaris";
import { ProductItem } from "./ProductItem";

function ProductList(props) {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    setProducts(props.products)
  }, [props.products])


  return (
    <Card>
      <ResourceList
        showHeader
        items={products}
        renderItem={p => <ProductItem product = {p}/>}
        resourceName={{ singular: "product", plural: "products" }}

      />
    </Card>
  );

}

export default ProductList;
