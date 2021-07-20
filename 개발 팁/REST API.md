## REST API



### REST

- Representational State Transfer의 약자
- 하나의 형식임
- 자원의 이름으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미한다.
- 각 동작이 어떤 동작이나 정보를 위한 것인지를 그 요청의 모잡 자체로 추론이 가능함.

- 기능만 신경쓴다면, 자기 맘대로 해도 아무상관없고 REST API의 규칙을 안따라두 됨.
  - 하지만, 그건 자기 외에는 아무도 이해할 수 없고, 다른 사람들에게 이해시키기도 어렵게됨
  - but RESTful한 API는 요청을 보내는 주소만으로도, 대략 이게 뭐하는 요청인지 파악이 가능함.
  - ex) 학원주소를 http://(도메인)/classes/2/students/15로 만들었다고 가정하자
  - 보통. classes는 반을 의미하는 것일 것임.
  - 그리고 2는 그 반의 번호를 의미하는 것일 거임.
  - students는 그 중 학생들 정보를 의미
  - 그중 15는 학생들 번호를 의미하는 것일 것임을 알 수 있음.
- CRUD
  - Create 생성
    - post 새로운 정보를 추가
  - Read 조회
    - get 조회하는데 사용
  - Update 수정
    - put 또는 patch 변경, 업데이트
  - Delete 삭제
    - delete



- 인터페이스 = 기계와 인간의 소통 창구











> 참고 :
>
> https://www.youtube.com/watch?v=iOueE9AXDQQ
>
> https://velog.io/@kjh03160/%EA%B7%B8%EB%9F%B0-REST-API%EB%A1%9C-%EA%B4%9C%EC%B0%AE%EC%9D%80%EA%B0%80
