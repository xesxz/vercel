<template>
  <ul class="container">
<div >
 <SellHouse></SellHouse>
</div>
<div >
4444
</div>
  </ul>
</template>

<script setup lang="ts">
import SellHouse from '@/components/SellHouse.vue'

</script>

<style  lang="scss">
html, body,#app, .container{
  width: 100%;
  height: 100%;
}
.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr ;
  >div{
    border: 1px solid;
  }
}
</style>