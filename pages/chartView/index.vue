<template>
  <van-button type="primary" @click="$router.push('/')">回首頁</van-button>
  <div class="a">我是chart頁面</div>
  <van-button type="primary" @click="useCounterStore().increment()"
    >增加pinia</van-button
  >
  <pie-test></pie-test>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/store/counter";
// const {
//   data: channelList,
//   pending,
//   error,
//   refresh,
// } = await useFetch("/api/channel", {
//   method: "GET",
// });
// console.log(channelList.value.channels[0].id)
</script>

<style lang="scss">
.a {
  color: red;
  .b {
    color: blue;
  }
}
</style>
