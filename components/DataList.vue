<template>
    <div class="data-list">
        <!-- 模拟的数据列表 -->
        <div class="data-item" v-for="item in items" :key="item.id">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, name: '项目1', description: '描述1' },
                { id: 2, name: '项目2', description: '描述2' }
            ]
        }
    }
}
</script>

<style>
.data-list .data-item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
</style>
