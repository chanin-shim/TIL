## 반응형 웹사이트 만들기

- 각 디바이스 마다 px 설정
  - mobile : 320px ~ 480px
  - tablet : 768px ~ 1024px
  - desktop : 1024px~
- 이렇게 설정하면 거의 문제 없음.



### Media queries

참조 : https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Media_queries



```css
@media screen and (min-width: 800px) {
    .container{
        width: 50%;
    }
}

최소 800, 즉 800이상일 때는 container가 50% 차지하게 해주라.
```



```css
@media screen and (max-width: 400px) {
    body {
        color: red;
    }
}

최대 400, 즉 0~400까지 일때는 빨간색
```



---



### em, rem

기본적 html은 16px임

- em 
  - 상대적임
  - 부모의 폰트사이즈를 곱한 값

```python
.parent {
    font-size: 8em;
    # parent = 16 * 8 = 128px
    # font-size: 800%; 와 동일함
}

.chile {
    font-size: 0.5em;
    # parent의 0.5em이기 때문에 -> 64px
    # font-size: 50%;
}
```



- rem
  - root em <- 뿌리에 지정된, 즉 html에 기본으로 지정된 16px을 기준으로 함.

```python
font-size : 0.5rem;
    # 16 * 0.5 => 8px이 되는 것임.
```



