## Open JDK & Maven 설치



### 1) Open JDK

0. JDK란?
   - java development kit의 약자
   - 단어 그대로, 개발할 때 필요한 키트들을 포함해서 모두 가지고 있음.

1. https://www.oracle.com/java/technologies/javase-jdk16-downloads.html 사이트 접속
2. jdk 설치 파일 다운로드

![JDK 설치](C:\Users\multicampus\Desktop\TIL\asset\JDK 설치.png)

3. 모두 next누르면서 설치진행 (단, 파일 위치만 확인 C:Program Files\Java\jdk-16.0.1\)
4. 설치 완료 후, 내 컴퓨터 속성 들어가기 (오른쪽 마우스 클릭)
5. 고급 시스템 설정 -> 시스템 속성 -> 환경 변수

![JDK 환경변수](C:\Users\multicampus\Desktop\TIL\asset\JDK 환경변수.png)

6. 시스템 변수에서 새로 만들기 클릭
7. 아래 사진과 같이 작성
   변수 이름 : JAVA_HOME
   변수 값 : C:\Program Files\Java\jdk-16.0.1

![JDK 시스템 변수 생성](C:\Users\multicampus\Desktop\TIL\asset\JDK 시스템 변수 생성.png)

8. 시스템 변수에 있는 Path를 선택후 편집 클릭 -> 새로만들기

   ![JDK path 편집](Open JDK & Maven 설치.assets/JDK path 편집.png)

9. 아래와 같이 작성
   %JAVA_HOME%\bin\ 

10. cmd 창에서 확인하기. 아래와 같이 검색
    java -version

![JDK java -version](C:\Users\multicampus\Desktop\TIL\asset\JDK java -version.png)

11. 위와 같이 검색결과가 나왔다면 잘 된 것이다!!

> 참고 링크 : https://jhnyang.tistory.com/224



###  Maven



0. Maven이란?
   - java의 빌드도구로, 프로젝트 생성, 테스트 빌드, 배포  등의 작업을 위한 프로그램
   - Tip) 빌드 = 소스코드 파일을 컴퓨터에서 실행할 수 있는 독립 소프트웨어 가공물로 변환하는 과정 또는 그 결과물
1. 사이트 접속 후 (http://maven.apache.org/download.cgi), 설치파일 다운받기

![Maven](Open JDK & Maven 설치.assets/Maven.png)

2. 설치 완료 후, 환경변수 설정을 위해 이동 (내 컴퓨터  -> 시스템 속성 -> 환경변수)

![JDK 환경변수](Open JDK & Maven 설치.assets/JDK 환경변수.png)

3. Path에서 편집 -> 새로만들기 -> 주소입력
   C:\dev\apache-maven-3.8.1\bin
   (C드라이브 안에 dev 폴더에서 압축을 풀었기 때문에 이런 경로가 나왔음)

![Maven 경로](Open JDK & Maven 설치.assets/Maven 경로.png)

4. cmd에서 확인해 보기. 이하의 코드 검색
   **mvn -version**

![mvn -version](Open JDK & Maven 설치.assets/mvn -version.png)

5. 위와 같은 화면이 나왔다면 성공!!



>  참고 링크 : https://devpad.tistory.com/19



### 느낀 점

- 명세서에서는 JDK, Maven 둘 다 기존 path 경로 수정하는 형식으로 나와있었으나, 새로 만들기로 만드는 것이 훨씬 편하고 명료함.
- JDK는 ZIP파일을 다운 받아서 하는 것 보다 exe파일로 설치하는 것이 더 나은 것 같음.