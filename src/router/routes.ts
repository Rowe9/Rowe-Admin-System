export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: 'login',
      hidden: true,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'home',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  // screen
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: 'Screen',
      hidden: false,
      icon: 'Platform',
    },
  },
  // 仪表盘
  {
    path: '/dashboard',
    component: () => import('@/layout/index.vue'),
    name: 'Analysis',
    meta: {
      title: 'Dashboard',
      hidden: false,
      icon: 'Platform',
    },
    redirect: '/dashboard/analysis',
    children: [
      {
        path: '/dashboard/Analysis',
        component: () => import('@/views/dashboard/Analysis.vue'),
        name: 'Analysis',
        meta: {
          title: 'Analysis',
          icon: 'ShoppingCart',
          hidden: false,
        },
      },
    ],
  },
  // 功能
  {
    path: '/feat',
    component: () => import('@/layout/index.vue'),
    name: 'feat',
    meta: {
      title: 'feat',
      hidden: false,
      icon: 'Platform',
    },
    redirect: '/feat/download',
    children: [
      {
        path: '/feat/download',
        component: () => import('@/views/feat/download.vue'),
        name: 'Download',
        meta: {
          title: 'Download',
          icon: 'ShoppingCart',
          hidden: false,
        },
      },
    ],
  },
  // 富文本编辑器
  {
    path: '/editor',
    component: () => import('@/layout/index.vue'),
    name: 'Editor',
    meta: {
      title: 'Editor',
      hidden: false,
      icon: 'Goods',
    },
    redirect: '/editor/wangEditor',
    children: [
      {
        path: '/editor/wangEditor',
        component: () => import('@/views/editor/wangEditor/index.vue'),
        name: 'wangEditor',
        meta: {
          title: 'wangEditor',
          icon: 'ShoppingCart',
          hidden: false,
        },
      },
    ],
  },
  // 404
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
]

export const asyncRoute = [
  // {
  //   path: '/acl',
  //   component: () => import('@/layout/index.vue'),
  //   name: 'Acl',
  //   meta: {
  //     title: '权限管理',
  //     hidden: false,
  //     icon: 'Lock',
  //   },
  //   redirect: '/acl/user',
  //   children: [
  //     {
  //       path: '/acl/user',
  //       component: () => import('@/views/acl/user/index.vue'),
  //       name: 'User',
  //       meta: {
  //         title: '用户管理',
  //         hidden: false,
  //         icon: 'User',
  //       },
  //     },
  //     {
  //       path: '/acl/role',
  //       component: () => import('@/views/acl/role/index.vue'),
  //       name: 'Role',
  //       meta: {
  //         title: '角色管理',
  //         hidden: false,
  //         icon: 'Avatar',
  //       },
  //     },
  //     {
  //       path: '/acl/permission',
  //       component: () => import('@/views/acl/permission/index.vue'),
  //       name: 'Permission',
  //       meta: {
  //         title: '菜单管理',
  //         hidden: false,
  //         icon: 'List',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/product',
  //   component: () => import('@/layout/index.vue'),
  //   name: 'Product',
  //   meta: {
  //     title: '商品管理',
  //     hidden: false,
  //     icon: 'Goods',
  //   },
  //   redirect: '/product/trademark',
  //   children: [
  //     {
  //       path: '/product/trademark',
  //       component: () => import('@/views/product/trademark/index.vue'),
  //       name: 'Trademark',
  //       meta: {
  //         title: '品牌管理',
  //         icon: 'ShoppingCart',
  //         hidden: false,
  //       },
  //     },
  //     {
  //       path: '/product/attr',
  //       component: () => import('@/views/product/attr/index.vue'),
  //       name: 'Attr',
  //       meta: {
  //         title: '属性管理',
  //         icon: 'Management',
  //         hidden: false,
  //       },
  //     },
  //     {
  //       path: '/product/spu',
  //       component: () => import('@/views/product/spu/index.vue'),
  //       name: 'Spu',
  //       meta: {
  //         title: 'Spu',
  //         icon: 'SetUp',
  //         hidden: false,
  //       },
  //     },
  //     {
  //       path: '/product/sku',
  //       component: () => import('@/views/product/sku/index.vue'),
  //       name: 'Sku',
  //       meta: {
  //         title: 'Sku',
  //         icon: 'ScaleToOriginal',
  //         hidden: false,
  //       },
  //     },
  //   ],
  // },
]

export const anyRoute = {
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true,
  },
}
