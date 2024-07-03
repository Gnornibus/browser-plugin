<template>
    <div class="top-bar">
        <el-icon :size="20">
            <Bell />
        </el-icon>
        <el-icon :size="20">
            <UserFilled />
        </el-icon>
    </div>
</template>

<style>
.top-bar {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
</style>
<script setup>
import {Bell, UserFilled} from '@element-plus/icons-vue'; // 导入 Element Plus 图标组件
</script>

