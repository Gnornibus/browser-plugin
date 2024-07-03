<template>
  <div>
    <top-bar></top-bar>
    <div class="info-cards">
      <info-card title="数据源" subtitle="111" icon="Coin"></info-card>
      <info-card title="输出任务" subtitle="222" icon="Money"></info-card>
      <info-card title="执行中" subtitle="3333" icon="ChatDotRound"></info-card>
      <info-card title="代办事项" subtitle="4444" icon="Document"></info-card>
    </div>
    <data-list></data-list>
  </div>
</template>

<script>

import TopBar from "@/components/TopBar.vue";
import InfoCard from "@/components/InfoCard.vue";
import DataList from "@/components/DataList.vue";

export default {
  components: {
    TopBar,
    InfoCard,
    DataList
  }
}
</script>

<style>
.info-cards {
  display: flex;
  justify-content: space-between;
}
</style>
