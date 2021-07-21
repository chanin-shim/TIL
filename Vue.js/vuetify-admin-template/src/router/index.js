import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'

Vue.use(VueRouter)
// 라우터 설정

const routes = [
    // 랜더링 될 페이지를 매핑
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
// 생성한 인스턴스를 export