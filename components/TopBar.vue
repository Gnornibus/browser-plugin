<template>
  <div class="top-bar">
    <el-icon :size="20">
      <Bell />
    </el-icon>
    <el-icon :size="20">
      <UserFilled />
    </el-icon>
    <el-button @click="handleGetAndSendUrl" type="primary" size="small">获取并发送链接</el-button>
    <span>{{ data }}</span>
  </div>
</template>

<script setup>
import {Bell, UserFilled} from '@element-plus/icons-vue'; // 导入 Element Plus 图标组件
import {ref} from 'vue';

const currentUrl = ref('');
const data = ref('');

const getCurrentTabUrl = () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs.length > 0) {
        resolve(tabs[0].url);
      } else {
        reject('No active tab found');
      }
    });
  });
};

const handleGetAndSendUrl = async () => {
  try {
    const url = await getCurrentTabUrl();
    data.value = url;
    console.log('Current Tab URL:', url);
    chrome.runtime.sendMessage({ cmd: 'sendUrl', value: url }, (response) => {
      console.log('Response from background:', response.res);
    });
  } catch (error) {
    console.error('Error getting or sending URL:', error);
  }
};
</script>

<style>
.top-bar {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>
