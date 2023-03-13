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
