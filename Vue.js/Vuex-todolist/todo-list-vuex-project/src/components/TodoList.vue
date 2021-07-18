<template>
  <div>
      <TodoListItem
        v-for="(todo, idx) in todos"
        :key="idx"
        :todo="todo"
      />
      <!-- 왼쪽 : 받는 것의 이름 (이게 바뀌면 받는 쪽에서의 이름도 바뀌게됨), 오른쪽: 실제 데이터-->
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'
export default {
    name:'TodoList',
    components: {
        TodoListItem
    },
    computed: {
        todos: function () {
            return this.$store.state.todos
            // template에서는 this를 안쓰지만, script에서는 this를 붙임.
        }
        // 항상 computed는 리턴이 있어야함. 호출해서 사용하는 것이아니라, 계산된 값만 사용하는 것이기 때문에 반드시 return 값이 있어야함.
    },
    // 동작에 대한 것은 메서드가 처리함
}
</script>

<style>

</style>