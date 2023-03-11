<template>
    <div>

    </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// 欲觀看成果網頁, 請輸入網址: http://localhost:8080/#/newpage/dynamicRouterByProps/eb3b8992b19d83b1

export default {
  // 此處的props所取得的是路由表(index.js)內的id
  props: ['id'],
  created() {
    console.log('在DynamicRouterByProps.vue檔案內, 查看props的內容', this.id);
    const seed = this.id;
    axios.get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res) => {
        console.log('印出axios回傳的內容', res);
      });
  },
};
</script>
