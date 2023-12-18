<template>
  <div>
    <h1>{{ result }}</h1>
    <button @click="postData">发送数据</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 创建一个 ref 来存储后端返回的数据
const result = ref('');

// 创建一个异步函数用于发送 POST 请求
const postData = async () => {
  try {
    // 使用 fetch 或其他 HTTP 库发送 POST 请求
    const response = await fetch('https://your-api-endpoint.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 可以根据需要添加其他头部信息
      },
      // 将需要发送的数据转换为 JSON 格式
      body: JSON.stringify({
        // 在这里添加你的数据
        key1: 'value1',
        key2: 'value2',
      }),
    });

    // 解析后端返回的 JSON 数据
    const data = await response.json();

    // 将数据更新到 ref 中，触发界面更新
    result.value = data.message; // 假设后端返回一个包含 message 属性的 JSON 对象
  } catch (error) {
    console.error('Error:', error);
    // 在实际应用中，你可能需要处理错误情况
  }
};
</script>
