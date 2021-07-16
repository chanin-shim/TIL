## JavaScript





## 기본

- js의 주석은 // 다.
- 





## DOM (Document Object Model)

- DOM조작
  - 문서(HTML)조작
  - 문서가 구조화 되어있으며, 각 요소는 **객체**로 취급
  - 주요객체
    - window : 가장 최상위의 객체 (작성시 생략 가능)
    - document : body등과 같은 수많은 요소를 포함

![js dom](C:\Users\multicampus\Desktop\html 복습\JavaScript\JavaScript.assets\js dom.png)

- DOM 조작 = document는 문서 한 장(HTML)에 해당하고 이를 조작하는 것

- **조작 순서**

  - 1. 선택

    - Document.querySelector()
      - 제공한 선택자와 일치하는 element 하나 선택
      - 첫번째 element 객체를 반환
    - Document.querySelectorAll()
      - 제공한 선택자와 일치하는 여러개 element 선택
      - CSS selector를 인자로 받음
      - NodeList

  - 2. 변경

    - Document.createElement()
      - 주어진 태그명을 사용해 HTML 요소를 만들어 반환
    - ParentNode.append()
      - 추가할 수 있음
      - 여러개 삽입가능
      - 반환값은 없음
    - Node.appendChild()
      - 하나의 노드만 특정노드의 자식노드로 삽입가능
      - 한개만 추가 가능

    - ChildNode.remove()
    - Node.removeChild()
      - 부모.removeChild(자식노드)
      - 자식노드를 지우고, 지워진 자식노드를 반환함
      - 반환값이 있어서 변수로 할당 가능

    ![js remove](C:\Users\multicampus\Desktop\html 복습\JavaScript\JavaScript.assets\js remove.png)

    - Node.innerText()
      - 문자열 그 자체가 들어감
      - <li>춘천</li>을 치면
      - ''<li>춘천</li> ''그대로 나옴
    - Node.innerHTML
      - <li>춘천</li> 치면
      - ''춘천''이 나옴

    ![js 춘천 삽입 삭제](C:\Users\multicampus\Desktop\html 복습\JavaScript\JavaScript.assets\js 춘천 삽입 삭제.png)

    - Element.setAttribute(name,value)
      - 지정된 요소의 값을 설정
    - Element.getAttribute
      - 해당 요소의 지정된 값을 반환
      - 인자는 얻고자 하는 속성의 이름







```html
## console 안에서

window.document.title

window.document.URL

등등으로 문서를 조작가능
```

![ssafy dom](C:\Users\multicampus\Desktop\html 복습\JavaScript\JavaScript.assets\ssafy dom.png)



- Collection
  - Live Collection
    - 문서가 실시간으로 업데이트
    - 변경사항이 실시간으로 Collection에 반영됨
    - ex) NodeList, HTMLCollection
  - Static Collection (non-live)
    - DOM이 변경되어도 Collection 내용에 영향주지 않음
    - querySelectorAll()이 리턴하는 NodeList만 static임. (원래는 Live Collection 맞음)



- Event
  - 네트워크 활동 혹은 사용자와의 상호작용 같은 사건의 발생을 알리기 위한 객체
  - 이벤트 처리기
    - EventTarget.addEventListener(type, listener[,options])
      - type: 반응 할 이벤트 유형 (특정 이벤트)
      - listener:지정된 타입의 이벤트가 발생 했을 때 알림을 받는 객체 (할 일)
      - ex) 버튼.addeventlistener(클릭,새로고침)
    - 해당 메서드를 통해 다양한 요소에서 이벤트를 붙일 수 있음

```html
  <script>
    // 1
    const alertMessage = function () {
      alert('메롱!!!')
    }

    const myButton = document.querySelector('#my-button')
    myButton.addEventListener('click',alertMessage)
      
      ---
        
	const myTextInput = document.querySelector('#my-text-input')

    myTextInput.addEventListener('input', function (event) {
      // console.log(event)
      const myPtag = document.querySelector('#my-paragraph')
      myPtag.innerText = event.target.value
    })
```





- preventDefault()
  - 현재 이벤트의 기본 동작을 중단
  - 태그의 기본 동작 (a 태그는 클릭 시 페이지 이동, form 태그는 폼 데이터를 전송)
  - 이벤트 자체는 발생하는데, 이벤트가 하는 기본동작을 중단함.
  - ex) a태그를 클릭하면, a태그를 클릭했다는 이벤트는 남겨두지만, a태그의 기본동작인 페이지 이동은 막아버림.