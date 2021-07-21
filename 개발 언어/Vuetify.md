# Vuetify



## UI 프레임워크란?

- 생산성이 높다.
- 일관성이 있어 유지보수가 용이하다.
- UI, UX에 대한 지식이 부족해도 쉽게 페이지로 반영할 수 있다.
-  ex) Bootstrap, Vuetify 등



## Vuetify란?

> Vue 기반 UI 프레임 워크이다.
>
> 구글의 Material Design을 기반으로 설계되었다.



### 시작하기

```bash
# 1. 명령어 입력
vue add vuetify

# 2. Still proceed? -> Yes입력

# 3. Choose a preset -> Default (recommended) 선택
```

![vue vuetify](C:\Users\multicampus\Desktop\TIL\asset\vue vuetify.png)

![vue vuetify2](C:\Users\multicampus\Desktop\TIL\asset\vue vuetify2.png)

![vue vuetify3](C:\Users\multicampus\Desktop\TIL\asset\vue vuetify3.png)

위와 같이 진행



---

### Vue Router 써보기

```vue
1. src/views 폴더 생성
2. 예시) Dashboard.vue, GridSystem.vue 생성
3. src/router 폴더 생성

# router 

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
```



-> 아래와 같은 사진이 될 것임!

![index.js 예시](Vuetify.assets/index.js 예시.png)

```vue
4. main.js 들어가서 index.js에서 export해줬던 것 등록

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// index.js 에서 생성했던 인스턴스를 등록함.
import vuetify from './plugins/vuetify'
// 이거는 vuetyfy 설치하면 자동으로 등록됨.


Vue.config.productionTip = false

new Vue({
  // index.js 에서 생성했던 인스턴스를 등록함.
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

```

-> 아래 사진과 같이 될 것임

![main.js 예시](Vuetify.assets/main.js 예시.png)

```vue
5. App.vue로 와서
6. 예시에는 vuetify에서 navigation drawer을 복붙해놓은 상황
7. items에 to를 적용한다.
```

-> 아래 사진과 같이 될 것임

![to = item.to](Vuetify.assets/to = item.to.png)

```vue
8.하단에 script 부분에 data가 있는데, vuetify에서 코드 복붙해왔던 곳 보면 Script를 보면 이걸로 조작가능
9. 그걸 복붙해서 붙여주기
```

![Usage](Vuetify.assets/Usage.png)

```vue
10. 해당 data구조에 to: 입력해서 라우팅 시켜주기
```

![data items 경로](Vuetify.assets/data items 경로.png)

























