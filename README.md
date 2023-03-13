## <span style="color:purple">NextJS?

저도 처음 접하기 때문에 공부하기에 앞서 뭔지 조금 찾아보았습니다.

**NextJS는 React를 위해 만들어진 프레임워크**입니다.
**React에는 없는 서버사이드 랜더링, 정적 사이트생성, 증분 정적 재생성과 같은 기능을 제공합니다.**

서버사이드 랜더링..? 이번 원티드 프리온보딩 사전과제를 하면서 이 개념에 대해 알아보았는데 글로만 봐서는 어떤 개념인지 이해가 잘 되지 않았습니다.😓 NextJS를 공부하면서 위의 기능들이 어떤걸 의미하는지, React와는 어떤 차이가 있는지 학습하도록 하겠습니다.

## <span style="color:purple">본격 NextJS 프로젝트 시작하기

`$ npx create-next-app@latest`

> - @lastest 는 최신버전으로 next.js 시작할 수 있습니다.

- 타입스크립트, eslint등 각종 옵션을 묻는 질문이 나오는데 원하는대로 YES or NO를 선택하면 NextJS 환경이 생성됩니다.

<br/>

---

<br/>

### <span style="color:purple">라이브러리와 프레임워크의 차이

대표적인 라이브러리인 리액트로 설명을 하자면 리액트는 우리가 원할 때 부르고 원할 때 사용하는 방식이라면, 프레임워크인 NextJS는 직접 적절한 곳에 코드를 넣어야하는 차이가 있습니다.

<br/>

---

<br/>

### <span style="color:purple">페이지 추가하기

NextJS는 pages라는 폴더안에 있는 파일명이 곧 페이지가 됩니다.
즉, pages 폴더안에 'mypage' 파일명을 추가한다면 '/mypage' url이 완성되는 것 입니다.

![](https://velog.velcdn.com/images/mudidu/post/4b9bd259-fb90-4072-8516-4e41f534b5dc/image.png)![](https://velog.velcdn.com/images/mudidu/post/7b0e6805-943a-4233-b343-af9d564739cc/image.png)![](https://velog.velcdn.com/images/mudidu/post/6a92a4d6-a4cb-4c45-a1d6-4264535318d0/image.png)![](https://velog.velcdn.com/images/mudidu/post/5882ee6c-264c-4714-ad9f-b6ffbfb06246/image.png)

> #### 💬 지켜야 할 점

- 파일 안 컴포넌트는 반드시 export default 여야합니다.
- 컴포넌트 이름은 url과 관련이 없으므로 자유롭게 지어도 상관없습니다.
- 모두 아시다시피 'index'이름을 가진 파일명은 Root 경로인 '/'를 의미합니다.

<br/>

---

<br/>

### <span style="color:purple">404 NotFound Page

create-react-app과 달리 create-next-app은 404 페이지를 제공합니다.
커스텀도 가능합니다.

<br/>

---

<br/>

### <span style="color:purple">jsx사용

별다른 Import 없이 jsx를 사용할 수 있습니다.
**단, useEffect, useState 같은 리액트 기능을 사용할 땐 react를 import 해주어야 합니다.**

---

### <span style="color:purple">NextJS의 Static Pre Rendering

NextJS로 만든 앱은 페이지를 미리 렌더링한다는 장점이 있습니다.<br/>
사용자가 초기 화면을 긴 로딩 없이 볼 수 있습니다. 그리고 미리 랜더링 되어있기 때문에 SEO(Search Engine Optimization) 적용이 용이합니다.

반면 React로 만든 앱은 CSR(Client Side Render)입니다. 유저가 보는 UI를 하나의 div안에 랜더합니다.

---

### 라우팅

NextJS에서 anchor 기능을 사용하고 싶을 때에는
아래 형태처럼 Link 태그로 감싸주어야합니다.
<br/>

```javascript
import Link from 'next/link

<Link href="/">
  <a>Home</a>
</Link>
```

---

### `_app.js` 파일 활용하기

NextJS는 어떤 페이지보다도 `_app.js` 파일을 먼저 읽기 때문에<br/>
전역 스타일을 설정하거나, app의 layout을 설정 할 때에는 `_app.js` 를 관리하면 됩니다.
