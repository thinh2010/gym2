import Vue from 'vue';
import Router from 'vue-router';

/**
 * Layzloading will create many files and slow on compiling, so best not to use lazyloading on devlopment.
 * The syntax is lazyloading, but we convert to proper require() with babel-plugin-syntax-dynamic-import
 * @see https://doc.laravue.dev/guide/advanced/lazy-loading.html
 */

Vue.use(Router);

/* Layout */
import Layout from '@/layout';
import PageList from '@/views/pages/Index';
import CategoriesList from '@/views/content/Category';
import CategoryForm from '@/views/content/CategoryForm';

/* Router for modules */
// import elementUiRoutes from './modules/element-ui';
// import componentRoutes from './modules/components';
// import chartsRoutes from './modules/charts';
// import tableRoutes from './modules/table';
// import adminRoutes from './modules/admin';
// import nestedRoutes from './modules/nested';
import errorRoutes from './modules/error';
// import excelRoutes from './modules/excel';
// import permissionRoutes from './modules/permission';

/**
 * Sub-menu only appear when children.length>=1
 * @see https://doc.laravue.dev/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin', 'editor']   Visible for these roles only
    permissions: ['view menu zip', 'manage user'] Visible for these permissions only
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb (default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/AuthRedirect'),
    hidden: true,
  },
  {
    path: '/404',
    redirect: { name: 'Page404' },
    component: () => import('@/views/error-page/404'),
    hidden: true,
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true,
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: false },
      },
    ],
  },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   redirect: '/documentation/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'documentation', icon: 'documentation', noCache: true },
  //     },
  //   ],
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'guide', icon: 'guide', noCache: true },
  //     },
  //   ],
  // },
  // elementUiRoutes,
];

export const asyncRoutes = [
  // permissionRoutes,
  // componentRoutes,
  // chartsRoutes,
  // nestedRoutes,
  // tableRoutes,
  {
    path: '/pages',
    component: Layout,
    redirect: '/pages/index',
    children: [
      {
        path: 'index',
        component: PageList,
        name: 'Pages',
        meta: { title: 'pages', icon: 'documentation', noCache: false },
      },
      {
        path: 'edit/:id(\\d+)',
        component: PageList,
        name: 'EditPage',
        meta: { title: 'editPages', noCache: false },
        hidden: true,
      },
    ],
  },
  {
    path: '/blocks',
    component: Layout,
    redirect: '/blocks/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/blocks/Index'),
        name: 'Blocks',
        meta: { title: 'blocks', icon: 'component', noCache: false },
      },
      {
        path: 'add',
        component: () => import('@/views/blocks/Form'),
        name: 'AddBlock',
        meta: { title: 'addBlock', noCache: false },
        hidden: true,
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/blocks/Form'),
        name: 'EditBlock',
        meta: { title: 'editBlocks', noCache: false },
        hidden: true,
      },
      {
        path: ':id(\\d+)/block-content/add',
        component: () => import('@/views/block-contents/Form'),
        name: 'AddBlockContent',
        meta: { title: 'addBlockContent', noCache: false },
        hidden: true,
      },
      {
        path: ':id(\\d+)/block-content/:bid(\\d+)/edit',
        component: () => import('@/views/block-contents/Form'),
        name: 'EditBlockContent',
        meta: { title: 'editBlockContent', noCache: false },
        hidden: true,
      },
    ],
  },
  {
    path: '/blogs',
    component: Layout,
    // redirect: '/blogs/categories',
    meta: {
      title: 'blogs',
      icon: 'nested',
      type: 'blog',
    },
    children: [
      {
        path: 'categories',
        component: CategoriesList,
        name: 'blogCategories',
        meta: { type: 'blog', title: 'blogCategories', icon: 'list', noCache: false },
      },
      {
        path: 'categories/add',
        component: () => import('@/views/content/CategoryForm'),
        name: 'blogAddCategory',
        meta: { type: 'blog', title: 'addBlogCategory', noCache: false },
        hidden: true,
      },
      {
        path: 'categories/edit/:id(\\d+)',
        component: CategoryForm,
        name: 'blogEditCategory',
        meta: { type: 'blog', title: 'editBlogCategory', noCache: false },
        hidden: true,
      },
      {
        path: 'articles',
        component: () => import('@/views/content/Article'),
        name: 'blogArticles',
        meta: { type: 'blog', title: 'blogArticles', icon: 'list', noCache: false },
      },
      {
        path: 'articles/add',
        component: () => import('@/views/content/ArticleForm'),
        name: 'blogAddArticle',
        meta: { type: 'blog', title: 'addBlogArticle', noCache: false },
        hidden: true,
      },
      {
        path: 'articles/edit/:id(\\d+)',
        component: () => import('@/views/content/ArticleForm'),
        name: 'blogEditArticle',
        meta: { type: 'blog', title: 'editBlogArticle', noCache: false },
        hidden: true,
      },
    ],
  },
  {
    path: '/faqs',
    component: Layout,
    meta: {
      title: 'faqs',
      icon: 'nested',
      type: 'faq',
    },
    children: [
      {
        path: 'categories',
        component: CategoriesList,
        name: 'faqCategories',
        meta: { type: 'faq', title: 'faqCategories', icon: 'list', noCache: false },
      },
      {
        path: 'categories/add',
        component: () => import('@/views/content/CategoryForm'),
        name: 'faqAddCategory',
        meta: { type: 'faq', title: 'addFaqCategory', noCache: false },
        hidden: true,
      },
      {
        path: 'categories/edit/:id(\\d+)',
        component: CategoryForm,
        name: 'faqEditCategory',
        meta: { type: 'faq', title: 'editFaqCategory', noCache: false },
        hidden: true,
      },
      {
        path: 'articles',
        component: () => import('@/views/content/Article'),
        name: 'faqArticles',
        meta: { type: 'faq', title: 'faqArticles', icon: 'list', noCache: false },
      },
      {
        path: 'articles/add',
        component: () => import('@/views/content/ArticleForm'),
        name: 'faqAddArticle',
        meta: { type: 'faq', title: 'addFaqArticle', noCache: false },
        hidden: true,
      },
      {
        path: 'articles/edit/:id(\\d+)',
        component: () => import('@/views/content/ArticleForm'),
        name: 'faqEditArticle',
        meta: { type: 'faq', title: 'editFaqArticle', noCache: false },
        hidden: true,
      },
    ],
  },
  // adminRoutes,
  {
    path: '/users',
    component: Layout,
    redirect: '/users/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/users/List'),
        name: 'UserList',
        meta: { title: 'users', icon: 'user', permissions: ['manage user'] },
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/users/Profile'),
        name: 'UserProfile',
        meta: { title: 'userProfile', noCache: true, permissions: ['manage user'] },
        hidden: true,
      },
    ],
  },
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/menu/Index'),
        name: 'MenuIndex',
        meta: { title: 'menu', icon: 'tree-table', permissions: ['manage menu'] },
      },
    ],
  },
  {
    path: '/roles',
    component: Layout,
    redirect: '/roles/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/role-permission/List'),
        name: 'RoleList',
        meta: { title: 'rolePermission', icon: 'role', permissions: ['manage permission'] },
      },
    ],
  },
  {
    path: '/settings',
    component: Layout,
    redirect: '/settings/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/settings/Form'),
        name: 'Settings',
        meta: { title: 'settings', icon: 'admin', noCache: false },
      },
    ],
  },

  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'theme', icon: 'theme' },
  //     },
  //   ],
  // },
  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   meta: { permissions: ['view menu clipboard'] },
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'clipboardDemo', icon: 'clipboard', roles: ['admin', 'manager', 'editor', 'user'] },
  //     },
  //   ],
  // },
  errorRoutes,
  // excelRoutes,
  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   meta: { title: 'zip', icon: 'zip', permissions: ['view menu zip'] },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip'),
  //       name: 'ExportZip',
  //       meta: { title: 'exportZip' },
  //     },
  //   ],
  // },
  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   meta: { title: 'pdf', icon: 'pdf', permissions: ['view menu pdf'] },
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf'),
  //       name: 'Pdf',
  //       meta: { title: 'pdf' },
  //     },
  //   ],
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/Download'),
  //   hidden: true,
  // },
  // {
  //   path: '/i18n',
  //   component: Layout,
  //   meta: { permissions: ['view menu i18n'] },
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/i18n'),
  //       name: 'I18n',
  //       meta: { title: 'i18n', icon: 'international' },
  //     },
  //   ],
  // },
  // {
  //   path: '/external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/tuandm/laravue',
  //       meta: { title: 'externalLink', icon: 'link' },
  //     },
  //   ],
  // },
  { path: '*', redirect: '/404', hidden: true },
];

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.MIX_LARAVUE_PATH,
  routes: constantRoutes,
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
