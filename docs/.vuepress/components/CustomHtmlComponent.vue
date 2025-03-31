<!-- .vuepress/components/CustomHtmlComponent.vue -->
<template>
  <div class="custom-component">
    <h1>这是组件化的 HTML 内容</h1>
    <p>支持 Vue 模板语法：{{ message }}</p>
    <button @click="changeMessage">点击切换消息</button>
    <!-- <img :src="$withBase('/images/logo.png')" alt="Dynamic Image"> -->
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      message: 'Hello VuePress!',
    };
  },
  methods: {
    changeMessage() {
      this.message = this.message === 'Hello VuePress!' ? 'VuePress is awesome!' : 'Hello VuePress!';
    }
  }
};
</script>
 
<style scoped>
.custom-component {
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
 
button {
  background-color: #42b983;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
 
button:hover {
  background-color: #33a06f;
}
</style>