<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- 此處router-link則是給網頁用戶點擊切換使用 -->
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <!-- 在此使用動態方式把元件名稱加入進來, 且記得要加上超連結的名稱, 例如:'新頁面' -->
            <router-link class="nav-link" :to="{
              name: '新增的頁面元件名稱'
            }" >新頁面</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <!-- 主要頁面切換是在此處<router-view/> -->
    <router-view />
  </div>
</template>

<style lang="scss">

</style>
