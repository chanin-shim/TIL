## AJAX (비동기성)

- AJAX란
  - 페이지 전체가 아니라, 필요한 특정 일부분만을 업데이트
  - JSON을 써서 사용
- 동기와 비동기
  - 동기
    - 순차적, 직렬적 수행
    - 앞에 거가 끝나야 뒤에 거를 함
    - 요청을 보낸 후 응답을 받아야만, 다음 동작이 이루어짐 (blocking)
  - 비동기
    - 병렬적 태스크 수행
    - 동시에 수행이 가능함
    - 요청을 보낸 후 응답을 기다리지 않고, 다음 동작이 이루어짐 (non-blocking)

![synch and asynch](C:/Users/multicampus/Desktop/html 복습/JavaScript/JavaScript.assets/synch and asynch.png)



- 비동기를 왜 사용함?
  - 사용자의 경험을 위해서 !!
  - 앞에 구동한게 굉장히 크다면, 언제까지 기다리게 할건데?
  - 앱 자체가 멈춘것 처럼 보이게 됨



- Concurrency model
  1. call stack 
     - 요청이 들어올 때마다 해당 요청을 순차적으로 처리하는 stack 형태 구조
  2. Web API
     - javascript 엔진이 아니라 브라우저 영역에서 제공하는 API
     - java는 thread가 하나 밖에 없기 때문에 (single thread), 브라우저의 힘을 빌리는 것. (내가 일처리 지금 못할 거 같으니까 너가 대신좀 처리 해줘)
  3. task queue
     - 콜 백함수가 대기하는 Queue형태의 자료구조
     - main thread가 끝난 후 실행되어 후속 JavaScript가 차단되는 것을 방지
  4. event loop



- 순차적인 비동기 처리하기

1. Async callbacks
   - 백그라운드에서 실행을 시작할 함수를 호출할 때 인자로 지정된 함수
   - ex) addeventlistener()의 두번째 인자
2. Promise-style
   - 좀 더 새로운 코드 스타일, 더 현대적인 버전임



Promise object

- 비동기작업의 완료 or 실패를 나타내는 객체
  - 성공 = .then()
  - 실패 = .catch()
  - 어떻게 되든간에 = .finally()
    - finally는 어떠한 인자도 전달 받지 않음.
    - 무조건 실행되어야 하는 절이 필요하다면 활용
- .then을 여러개 사용하여 연쇄적인 작업(chaining)을 수행할 수 있음.
- 반드시 반환 값이 있어야함!

![promise 기본구조](C:/Users/multicampus/Desktop/html 복습/JavaScript/JavaScript.assets/promise 기본구조.png)



- Axios
  - https://github.com/axios/axios
  - 원래는 XHR을 통해 AJAX를 처리하는데
  - 이보다 편리하게 AJAX요청이 가능하게 도움을 줌

![from XHL to Axios](C:/Users/multicampus/Desktop/html 복습/JavaScript/JavaScript.assets/from XHL to Axios.png)

