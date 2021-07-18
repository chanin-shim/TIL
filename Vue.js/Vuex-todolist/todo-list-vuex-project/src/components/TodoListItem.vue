<template>
    <div>
        <span @click="updateTodo">{{todo.title}}</span>
        <button @click="deleteTodo">delete</button>
    </div>
</template>

<script>
export default {
    name:'TodoListItem',
    props: {
        todo: {
            type: Object,
        }
    },
    methods: {
        deleteTodo: function () {
        // console.log('Todo 삭제')
        this.$store.dispatch('deleteTodo', this.todo)
        },
        updateTodo: function () {
            // console.log('수정')
            this.$store.dispatch('updateTodo', this.todo)
        }
    }
}
</script>

<style scoped>
    .completed {
        text-decoration: line-through;
    }

</style>