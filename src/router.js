import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

// 初始路由
export const constantRoutes = [{
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index.vue')
}];



// 创建路由
const createRouter = () => {
    return new VueRouter({
        mode: "history",
        base: '/',
        routes: constantRoutes,
        scrollBehavior: () => ({y: 0})
    })
}

const router = createRouter()

export default router
