<!-- eslint-disable max-len -->
<!-- 請養成好習慣:新建立元件, 再來建立路由 -->
<!-- 當完成此頁面內容時, 會出現紅字錯誤"Expected linebreaks to be 'LF' but found 'CRLF'"-->
<!-- 解決方式是在VScode終端機輸入指令"npm run lint --fix", 詳情可參考:
https://blog.csdn.net/LPLIFE/article/details/105655178  -->
<template>
  <!-- 使用BootStrap的格線系統方式來排版 -->
  <div class="row">
    <!-- 設定左側有col-4 -->
    <div class="col-4">
      <!-- 下方套用BootStarp的list group內的Links and buttons選單樣式
                   https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons -->
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">
          點我切換到元件A, 將顯示於右側欄位內
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">
          點我切換到元件B, 將顯示於右側欄位內
        </router-link>
        <router-link to="/newpage/namedView/ctoa" class="list-group-item list-group-item-action">
          命名視圖ctoa
        </router-link>
        <router-link to="/newpage/namedView/atob" class="list-group-item list-group-item-action">
          命名視圖atob
        </router-link>
        <router-link :to="`/newpage/dynamicRouter/${id}`" class="list-group-item list-group-item-action">
          動態路由($route)_使用v-bind綁定
        </router-link>
        <router-link :to="`/newpage/dynamicRouterByProps/${id}`" class="list-group-item list-group-item-action">
          動態路由(props)_使用v-bind綁定
        </router-link>
        <router-link to="/newpage/routerNavigation" class="list-group-item list-group-item-action">
          路由導覽
        </router-link>
      </div>
    </div>
    <!-- 設定左側有col-8 -->
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<!-- 此處需自行新增id, 在template的動態路由($route)和(props)都使用v-bind將to進行綁定, 藉此取得這個id值, 這樣子就能夠在網址列顯示這個亂數字串 -->
<script>
export default {
  data() {
    return {
      id: 'eb3b8992b19d83b1',
    };
  },
};
</script>
