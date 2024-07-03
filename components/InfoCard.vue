<template>
    <div class="info-card">
        <component :is="iconComponent" class="icon" size="40"></component>
        <div class="info-text">
            <h2 class="info-title">{{ title }}</h2>
            <p class="info-subtitle">{{ subtitle }}</p>
        </div>
    </div>
</template>

<script>
import * as Icons from '@element-plus/icons-vue';

export default {
    props: {
        title: String,
        subtitle: String,
        icon: String
    },
    components: {
        ...Icons
    },
    computed: {
        // 从图标库中动态解析组件
        iconComponent() {
            return Icons[this.icon] || null; // 确保图标存在，否则返回 null
        }
    }
};
</script>

<style scoped>
.info-card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    width: 80px;
    height: 80px;
    background: #fff;
    border-radius: 10px; /* 圆角 */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 阴影 */
    margin:0px 10px 10px 10px ;
    transition: transform 0.2s ease-in-out; /* 平滑过渡效果 */
    cursor: pointer; /* 鼠标悬停时显示手型图标 */
}

.info-card:hover {
    transform: translateY(-10px); /* 鼠标悬停时上移 */
}

.info-text {
    text-align: center;
    margin-top: 10px;
}

.info-title {
    font-size: 16px;
    color: #333;
    margin: 0;
}

.info-subtitle {
    font-size: 14px;
    color: #666;
    margin: 5px 0 0 0;
}

/* 根据需要调整图标大小 */
.el-icon {
    font-size: 40px; /* 根据需要调整 */
}
</style>
