import { Page } from "@shopify/polaris";
import ProductList from "./ProductList";

export function ProductListPage(props) {
  return <Page
    title="Product Selection"
    primaryAction={{
      content: "Select Product",
      onAction() {
        props.setIsOpen(true);
        console.log("I have been clicked!!!");
      }
    }}
  >
    <ProductList products={props.products} />
  </Page>;
}
