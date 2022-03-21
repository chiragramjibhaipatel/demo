import { EmptyState, Page } from "@shopify/polaris";
import {ResourcePicker, Card} from '@shopify/app-bridge-react'
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import * as PropTypes from "prop-types";

function ProductEmptyState(props) {
  return <EmptyState
    heading="Select products to work ahead"
    action={{
      content: "Add Products",
      onAction: props.onAction
    }}
    secondaryAction={{ content: "Learn more", url: "https://help.shopify.com" }}
    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
  >
    <p>Select the products you want to display.</p>
  </EmptyState>;
}

ProductEmptyState.propTypes = { onAction: PropTypes.func };
export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const [productIds, setProductIds] = useState([]);

  useEffect(()=> {

    let ids = products.map(p => {
      return {
        id: p.id,
        variants: p.variants.map(v => {
          return {
            id: v.id
          };
        })
      };
    })
    setProductIds(ids);
  },[products])


  function handleProductSelection(payload) {
    setIsOpen(false)
    console.log(payload);
    setProducts(payload.selection)
  }
  return (
    <>
      <ResourcePicker
        resourceType={"Product"}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductSelection}
        initialSelectionIds={productIds}
      />
      {
        products.length === 0 ?
          <ProductEmptyState onAction={() => setIsOpen(true)} />
          :
          <Page
            title="Product Selection"
            primaryAction={{
              content: "Select Product",
              onAction() {
                setIsOpen(true)
                console.log("I have been clicked!!!");
              }
            }}
          >
            <ProductList products={products}/>
          </Page>
      }
    </>

  );
}
