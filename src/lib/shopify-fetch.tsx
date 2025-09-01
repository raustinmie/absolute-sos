interface ShopifyFetchParams {
  query: string;
  variables?: Record<string, unknown>;
}

export async function shopifyFetch({ query, variables = {} }: ShopifyFetchParams) {
  const endpoint = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-04/graphql.json`;

  const result = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  return result.json();
}