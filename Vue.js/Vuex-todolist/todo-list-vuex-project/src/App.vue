<template>
  <div id="app">
    <h1>Todo app</h1>
    <h2>completed Todo: {{completedTodosCount}} </h2>
    <h2>uncompleted Todo: {{uncompletedTodosCount}} </h2>
    <TodoForm/>
    <TodoList/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  computed: {
    // completedTodosCount : function () {
    //   return this.$store.getters.completedTodosCount
    //   // 스토어에서 가져온 것임.
    //   //  <h2>completed Todo: {{completedTodosCount}} </h2> 이거를 바로 쓸 수 없기 때문에
    // },
    // uncompletedTodosCount : function () {
    //   return this.$store.getters.uncompletedTodosCount
    //   // 스토어에서 가져온 것임.
    //   //  <h2>completed Todo: {{completedTodosCount}} </h2> 이거를 바로 쓸 수 없기 때문에
    // }
    ...mapGetters([
      'completedTodoCount',
      'uncompletedTodosCount'
    ])
    // 해당 컴포넌트에서 매핑하고자하는 이름이 store의 index.js에 정의해놓은 getters의 이름과 동일하면 이렇게 쓸 수 가 있다.
    // 동일하게 mapState 등 나머지도 가능. 그대로 가져다 쓰는 것
    // import {mapGetters} from 'vuex' 이렇게 임포트를 해줘야 쓸 수 있음.
    // mapState는 Computed와 state를 매핑
    // mapGetters는 Computed와 Getters를 매핑
    // mapActions는 Computed와 Actions를 매핑
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
