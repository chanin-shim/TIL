<template>
    <div>
        <span
            @click="updateTodo(todo)">
            :class="{completed: todo.completed}"
            <!-- 이거 뭔지 모르겠음 -->
            {{todo.title}}</span>
        <button @click="deleteTodo(todo)">delete</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'TodoListItem',
    props: {
        todo: {
            type: Object,
        }
    },
    methods: {
        // deleteTodo: function () {
        // // console.log('Todo 삭제')
        // this.$store.dispatch('deleteTodo', this.todo)
        // },
        // updateTodo: function () {
        //     // console.log('수정')
        //     this.$store.dispatch('updateTodo', this.todo)
        // }
        ...mapActions([
            'deleteTodo',
            'updageTodo'
        ])
    }
}
</script>

<style scoped>
    .completed {
        text-decoration: line-through;
    }

</style>