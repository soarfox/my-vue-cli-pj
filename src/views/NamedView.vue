<template>
    <h2>命名視圖範例</h2>
    <!-- 使用BootStrap的格線系統 -->
    <div class="row">
        <!-- 本檔案內有包含多個router-view, 例如:一個叫做left, 一個叫做right -->
        <div class="col-6">
            <router-view name="left"></router-view>
        </div>
        <div class="col-6">
            <router-view name="right"></router-view>
        </div>
    </div>
</template>
