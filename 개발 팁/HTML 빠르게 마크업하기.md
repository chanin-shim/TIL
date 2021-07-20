## HTML 빠르게 마크업하기



```html
<!-- #div>ul>li (자손) -->
    <div>
        <ul>
            <li></li>
        </ul>
    </div>
```



```html
<!-- #div>ul+ol (형제, 나란히) -->
<div>
    <ul></ul>
    <ol></ol>
</div>
```



```html
<!-- # ul>li*5 (여러개 만들기)-->
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```



```html
<!-- #div>ul>li^ol (부모노드에서 요소를 추가할 수 있음)-->
<div>
    <ul>
        <li></li>
    </ul>
    <ol></ol>
</div>
```



```html
<!-- # ()로 묶어주기 => div>(header>ul>li*2>a)+footer -->
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer></footer>
</div>

---
<!-- #괄호가 없었다면 => div>header>ul>li*2>a+footer -->
<div>
    <header>
        <ul>
            <li>
                <a href=""></a>
                <footer></footer>
            </li>
            <li>
                <a href=""></a>
                <footer></footer>
            </li>
        </ul>
    </header>
</div>
```



```html
<!-- # 텍스트 넣기 => p{hello}-->
<p>hello</p>
```



```html
<!-- # 숫자 할당하기 => p.class${item $}*5 -->
<p class="class1">item 1</p>
<p class="class2">item 2</p>
<p class="class3">item 3</p>
<p class="class4">item 4</p>
<p class="class5">item 5</p>
```



```html
<!-- #더미용 텍스트 생성 => p>lorem10 -->
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, officia.</p>
```



```html

```



```html

```













