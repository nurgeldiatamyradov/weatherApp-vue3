<template>
  <main class="container text-white">
    <input type="text"
    v-model="searchQuery"
    @input="getSearchResult" 
    placeholder="Search for a city or state" 
    class="py-2 px-1 w-full bg-transparent border-b 
    focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]">
    <ul class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]" v-if="mapboxSearchResult">
      
      <p v-if="searchError" class="py-2">Sorry, something went wrong, please try again.</p>
      
      <p class="py-2" v-if="!serverError && mapboxSearchResult.length === 0">
        No results match your query, try different term.
      </p>

      <template v-else>
        <li v-for="searchResult in mapboxSearchResult" :key="searchResult.id"
      class="py-2 cursor-pointer">
    {{searchResult.place_name}}
    </li>
      </template>
    </ul>
    
  </main>
</template>




<script setup>
import { ref } from "vue";
import axios from "axios"

  const searchQuery = ref("")
  const queryTimeout = ref(null)
  const mapboxAPIKey = "pk.eyJ1IjoibWF4aW11c2VzcGFub2wiLCJhIjoiY2w3eDQ2ZTFsMGpidzNvdWJ3bDlkOGx1eSJ9.ZHGK0NbohkggIEBBMmVfcg"
  const mapboxSearchResult = ref(null)
  const searchError = ref(null)


  const getSearchResult = () => {
    clearTimeout(queryTimeout.value)
    queryTimeout.value = setTimeout(async () => {
      if (searchQuery.value !== "") {
        try {
          const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`)
      mapboxSearchResult.value = result.data.features
        } catch {
          searchError.value
        }
      return
      };
      mapboxSearchResult.value = null
    }, 300);
  }

</script>


