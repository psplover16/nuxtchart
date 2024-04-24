<template>
  <div class="a">
    <van-button type="primary" @click="$router.push('/chartView')"
      >前往chart頁面</van-button
    >
    <span class="b">我是首頁</span>
    <span>
      {{ useCounterStore().count }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/store/counter";
</script>

<style lang="scss">
.a {
  color: red;
  .b {
    color: blue;
  }
}
</style>
