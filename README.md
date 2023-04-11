# NextJS_study

**NextJS는 React를 위해 만들어진 프레임워크**입니다.
**React에는 없는 서버사이드 랜더링, 정적 사이트생성, 증분 정적 재생성과 같은 기능을 제공합니다.**

서버사이드 랜더링..? 이번 원티드 프리온보딩 사전과제를 하면서 이 개념에 대해 알아보았는데 글로만 봐서는 어떤 개념인지 이해가 잘 되지 않았습니다.😓 NextJS를 공부하면서 위의 기능들이 어떤걸 의미하는지, React와는 어떤 차이가 있는지 학습하도록 하겠습니다.

## 본격 NextJS 프로젝트 시작하기

`$ npx create-next-app@latest`

> - @lastest 는 최신버전으로 next.js 시작할 수 있습니다.

- 타입스크립트, eslint등 각종 옵션을 묻는 질문이 나오는데 원하는대로 YES or NO를 선택하면 NextJS 환경이 생성됩니다.

<br/>

## 새롭게 알게된 내용

<br/>

### 💟 라이브러리와 프레임워크의 차이

대표적인 라이브러리인 리액트로 설명을 하자면 리액트는 우리가 원할 때 부르고 원할 때 사용하는 방식이라면, 프레임워크인 NextJS는 직접 적절한 곳에 코드를 넣어야하는 차이가 있습니다.

<br/>

---

<br/>

### 💟 페이지 추가하기

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

### 💟 404 NotFound Page

create-react-app과 달리 create-next-app은 404 페이지를 제공합니다.
커스텀도 가능합니다.

<br/>

---

<br/>

### 💟 jsx사용

별다른 Import 없이 jsx를 사용할 수 있습니다.
**단, useEffect, useState 같은 리액트 기능을 사용할 땐 react를 import 해주어야 합니다.**

<br/>

---

<br/>

### 💟 NextJS의 Static Pre Rendering

NextJS로 만든 앱은 페이지를 미리 렌더링한다는 장점이 있습니다.<br/>
사용자가 초기 화면을 긴 로딩 없이 볼 수 있습니다. 그리고 미리 랜더링 되어있기 때문에 SEO(Search Engine Optimization) 적용이 용이합니다.

반면 React로 만든 앱은 CSR(Client Side Render)입니다. 유저가 보는 UI를 하나의 div안에 랜더합니다.

<br/>

---

<br/>

### 💟 라우팅

NextJS에서 anchor 기능을 사용하고 싶을 때에는
아래 형태처럼 Link 태그로 감싸주어야합니다.

<br/>

```javascript
import Link from 'next/link

<Link href="/">Home</Link>
```

<br/>

---

<br/>

### `_app.js` 파일 활용하기

NextJS는 어떤 페이지보다도 `_app.js` 파일을 먼저 읽기 때문에<br/>
전역 스타일을 설정하거나, app의 layout을 설정 할 때에는 `_app.js` 를 관리하면 됩니다.

<br/>

---

<br/>

### 💟 전역 스타일 지정하기

`_app.js`파일에서 전역 스타일을 지정할 수 있습니다. 바로 `<style jsx global></style>`을 사용해주면 됩니다.

```javascript
import NavBar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
          text-decoration: none;
        }
        .active {
          color: blue;
          font-weight: 700;
        }
        .h1 {
          color: red;
        }
      `}</style>
    </div>
  );
}
```

<br/>

---

<br/>

### 💟 Layout 컴포넌트 만들기

`_app.js`는 NextJS가 가장 먼저 읽는 파일인만큼 담아야하는 내용도 많습니다. <br/>
타이틀, 레이아웃, 전역스타일 등등..<br/>
그래서 Layout 컴포넌트를 따로 빼는 패턴을 많이 사용합니다.

#### `Layout.js`

```javascript
import NavBar from "./Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  //children은 하나의 컴포넌트를 또 다른 컴포넌트안에 넣을 때 씁니다.
  const router = useRouter();
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
```

위와 같이 Layout 구조를 짜줍니다.
children이라는 Props는 하나의 컴포넌트를 또 다른 컴포넌트안에 넣을 때 씁니다.

#### `_app.js`

```javascript
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
          text-decoration: none;
        }
        .active {
          color: blue;
          font-weight: 700;
        }
        .h1 {
          color: red;
        }
      `}</style>
    </Layout>
  );
}
```

그런 다음 Layout 컴포넌트로 app의 내용을 감싸주면 됩니다.

<br/>

---

### 💟 SEO 스킬 사용하기

NextJS는 Head 컴포넌트를 제공합니다.<br/>
Head 컴포넌트를 사용함으로써 SEO에 유리한 프로젝트를 만들 수 있습니다.<br/>
Head 말고도 다른 SEO를 위한 컴포넌트를 사용하여 커스텀 하는것도 가능합니다.<br/>

<br/>

---

### 💟 Redirect와 Rewrite

#### Redirect

next.config.js 파일에서 redirect 설정을 추가하면 특정 경로를 다른 경로로 이동시킬 수 있습니다. 예를 들어 더 이상 사용하지 않는 페이지라던지, 사이트가 다른 사이트로 이동할 경우 유용하게 사용할 수 있습니다.

```
<!-- next.config.js -->
module.exports = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source:"/detail/:path*",
        destivation: "/new-detail/:path*",
        permanent: false,

      }
    ]
  }
}
```

<br />
위 예제는 /detail라는 경로로 진입할 경우 /new-detail 경로로 이동시키게끔 하는 설정입니다. 뒤에 `:path*`는 글 ID를 그대로 유지시켜줍니다.<br/>
permanent는 redirect를 영구적이게 할지 말지를 결정합니다. (이 영구 여부는 검색엔진에 영향을 끼칩니다.)

<br/>

#### Rewrite

API는 외부인이 사용할 수 없도록 숨기는 것이 중요합니다.
Rewirte를 사용하면 api키가 외부에 노출될 일을 없앨 수 있습니다.

---

### 💟 Server Side Rendering

NextJS에서는 랜더링 방법을 SSR로 할지 CSR로 할지 설정할 수 있습니다.
getServerSideRendering() 함수를 index.js에 만들어주면 로딩화면때 보여줄 수 있습니다(?) 이게 마자?
<br/>
예제)
<br/>

---

### 💟 Loading 컴포넌트 만들기

받아오는 데이터가 없을 경우 Loading을 띄워주도록 하는 코드는 아래와 같습니다.

```
{!movies && <h4>Loading...</h4>}
```
