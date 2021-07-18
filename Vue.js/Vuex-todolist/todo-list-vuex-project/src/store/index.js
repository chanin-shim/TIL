import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
    ]
  },
  mutations: {
    // uppercase로 사용하는 이유 <- 데이터를 조작하는 함수들 (중요한 역할)이라는 것을 명시적 의미를 담기위해서
    CREATE_TODO: function(state, todoItem) {
      // console.log(state)
      state.todos.push(todoItem)
      // 배열에 값을 넣는 것은 push이다.
    },
    DELETE_TODO: function(state, todoItem) {
      // console.log(state, todoItem)
      //  1. todoItem이 첫번째로 만나는 요소의 index를 가져옴
      //  indexof = 지정된 요소를 찾을 수 있는 첫 번째 인덱스 반환
      const index = state.todos.indexOf(todoItem)
      //  2. 해당 인덱스 1개만 삭제하고 나머지 요소를 토대로 새로운 배열 생성
      //  splice = splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
      state.todos.splice(index, 1)
    },
    UPDATE_TODO: function(state, todoItem) {
      state.todos = state.todos.map((todo) => {
        if (todo == todoItem) {
          return {...todo, completed: !todo.completed}
        }
        return todo
        // 일치하지 않는다면 기존데이터 return
      })
    }
  },
  actions: {
    createTodo: function ({ commit },todoItem) {
      commit('CREATE_TODO',todoItem)
      // context.commit으로 안하고 이렇게 써버림 <- destructuring
    },
    deleteTodo: function ({ commit }, todoItem) {
      commit('DELETE_TODO',todoItem)
    },
    updateTodo: function ({ commit }, todoItem) {
      commit('UPDATE_TODO',todoItem)
    },
  },
  getters: {
    completedTodosCount: function (state) {
      return state.todos.filter((todo) => {
        return todo.completed === true
      }).length
    }
  },
  modules: {
  }
})
