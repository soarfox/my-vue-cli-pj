<template>
    <div>

    </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export default {
  created() {
    // 取得路由內的參數資訊, 請記得是route, 而非router
    console.log(this.$route);
    // console.log(this.$route.params);
    console.log(this.$route.params.id);

    // 欲觀看成果網頁, 請輸入網址: http://localhost:8080/#/newpage/dynamicRouter/eb3b8992b19d83b1

    // const seed = 'eb3b8992b19d83b1';
    const seed = this.$route.params.id;
    axios.get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res) => {
        console.log(res);
      });
  },
};
</script>
