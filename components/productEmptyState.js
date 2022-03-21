import { EmptyState } from "@shopify/polaris";

export function ProductEmptyState(props) {
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
