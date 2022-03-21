import { ResourceItem, Icon, Avatar, ResourceList, Thumbnail, Stack, TextStyle } from "@shopify/polaris";
import React from "react";
import {
  UnfulfilledMajor
} from '@shopify/polaris-icons';

export function ProductItem({ product }) {
  const { title, images } = product;

  const i = images[0] ? images[0].originalSrc : UnfulfilledMajor
  const media = <Thumbnail source={i} alt={`something`}/>
  const price = product.variants[0].price

  return (
    <ResourceList.Item
      id={product.id}
      media={media}
      accessibilityLabel={`View details for ${title}`}
    >
      <Stack>
        <Stack.Item fill>
          <h4>
            <TextStyle variation="strong">
              {title}
            </TextStyle>
          </h4>
        </Stack.Item>
        <Stack.Item>
          ${price}
        </Stack.Item>
      </Stack>
    </ResourceList.Item>
  );
}
