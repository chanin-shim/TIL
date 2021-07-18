const todoItem = {
  todo: '첫 번째 할 일',
  dueDate: '2020-12-25',
  importance: 'high',
  completed: false
}

// completed 값만 변경한다고 가정
//1. 첫 번째 방법
const myUpdateTodo = {
  todo: '첫 번째 할 일',
  dueDate: '2020-12-25',
  importance: 'high',
  completed: true
}

console.log(myUpdateTodo)

//2. 두 번째 방법
const myUpdateTodo2 = {
  ...todoItem,
  completed: true,
}
// 새로운 객체를 만들더라도 전부 다 쓸 필요가 없이, 기존에 있는 거에서 수정될 부분만 쓰면 됨.

console.log(myUpdateTodo2)
