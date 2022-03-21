import { ResourcePicker } from "@shopify/app-bridge-react";
import { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import { ProductListPage } from "../components/productListPage";
import { ProductEmptyState } from "../components/productEmptyState";
import store from 'store-js'

ProductEmptyState.propTypes = { onAction: PropTypes.func };

ProductListPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any)
};

export default function Index({host}) {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const [productIds, setProductIds] = useState([]);

  const STORAGE_HOST = `${host}_product_selection`

  useEffect(()=>{
    let products_selection = store.get(STORAGE_HOST);
    products_selection && setProducts(products_selection)
  },[])

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
    let selection = payload.selection;
    store.set(STORAGE_HOST, selection)
    setProducts(selection)
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
          <ProductListPage setIsOpen={setIsOpen} products={products} />
      }
    </>

  );
}
