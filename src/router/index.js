import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    // 在此處將外部元件載入
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 另一種載入外部元件的方式, 直接使用import
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/newpage',
    name: '新增的頁面元件名稱',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue'),
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue'),
      },
      {
        // 在/號後方可加上一個自訂義名稱, 藉此實作出動態路由
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue'),
      },
      {
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        // 新增一個屬性props, 此處看到的route內容就是每次當使用者進入路由時都會觸發的內容, 此route跟DynamicRouter.vue檔案內的route是相同的東西
        props: (route) => {
          console.log('這是在路由表index.js內, 查看route的內容', route);
          return {
            id: route.params.id,
          };
        },
      },
      {
        path: 'routerNavigation',
        component: () => import('../views/RouterNavigation.vue'),
      },
      {
        path: 'namedView',
        component: () => import('../views/NamedView.vue'),
        // 使用陣列且包含一個物件
        children: [
          {
            path: 'ctoa',
            // 因為要載入左右方的元件, 故使用複數components(加上s), 且components物件內的屬性名稱為NamedView.vue內兩個router-link名稱
            // 並且引用相對應的元件名稱
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue'),
            },
          },
          {
            path: 'atob',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue'),
            },
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 在此將router給匯出, 因此可以在main.js檔案來使用這個router設定
export default router;
