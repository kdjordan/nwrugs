# Integrating eBay Auctions into a Vue 3 Application

This guide outlines how to fetch and display active eBay auctions using the **eBay Browse API** in a Vue 3 app.

---

## Step 1: Set Up eBay Developer Account

1. Go to [https://developer.ebay.com/](https://developer.ebay.com/)
2. Sign in or create a new eBay developer account.
3. Navigate to **Applications > Create a keyset**
4. Save your **App ID**, **Cert ID**, and **Client Secret**

---

## Step 2: Generate OAuth2 Token (Client Credentials Flow)

1. Encode your `Client ID` and `Client Secret` as a Base64 string:

   ```bash
   echo -n '<ClientID>:<ClientSecret>' | base64
   ```

2. Make a POST request to retrieve an access token:

   ```bash
   curl -X POST 'https://api.ebay.com/identity/v1/oauth2/token' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -H 'Authorization: Basic <Base64EncodedCredentials>' \
     -d 'grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope'
   ```

3. Save the `access_token` from the response.

---

## Step 3: Create a Composable for Fetching Auctions

In your Vue 3 app:

### `src/composables/useEbayAuctions.ts`

```ts
import { ref } from 'vue';
import axios from 'axios';

export function useEbayAuctions() {
  const auctions = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function fetchAuctions(query: string, token: string) {
    loading.value = true;
    try {
      const response = await axios.get('https://api.ebay.com/buy/browse/v1/item_summary/search', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: query,
          filter: 'buyingOptions:{AUCTION}',
        },
      });
      auctions.value = response.data.itemSummaries || [];
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  return { auctions, fetchAuctions, loading, error };
}
```

---

## Step 4: Create a Vue Component to Display Auctions

### `src/components/EbayAuctionList.vue`

```vue
<template>
  <div>
    <input v-model="searchQuery" placeholder="Search eBay auctions..." @keyup.enter="onSearch" />
    <ul>
      <li v-for="item in auctions" :key="item.itemId">
        <a :href="item.itemWebUrl" target="_blank">{{ item.title }}</a>
        <p>Price: {{ item.price.value }} {{ item.price.currency }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useEbayAuctions } from '@/composables/useEbayAuctions';

const { auctions, fetchAuctions } = useEbayAuctions();
const searchQuery = ref('');
const token = '<PASTE_ACCESS_TOKEN_HERE>'; // Store securely for production

function onSearch() {
  fetchAuctions(searchQuery.value, token);
}
</script>
```

---

## Step 5: Add to Main App

Include the component in your main view or page:

### `App.vue`

```vue
<template>
  <main>
    <EbayAuctionList />
  </main>
</template>

<script setup>
import EbayAuctionList from '@/components/EbayAuctionList.vue';
</script>
```

---

## Step 6: Optional Improvements

* Implement secure storage for the token
* Add pagination
* Refresh token automatically
* Handle expired tokens and errors

---

## References

* [eBay Browse API Docs](https://developer.ebay.com/api-docs/buy/browse/overview.html)
* [OAuth2 Guide](https://developer.ebay.com/api-docs/static/oauth-client-credentials-grant.html)
* [Available Filters](https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#filter-query-parameters)
