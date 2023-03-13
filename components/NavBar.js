import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/mypage"
        className={router.pathname === "/mypage" ? "active" : ""}
      >
        MyPage
      </Link>
      {/* <style jsx>{`
        nav {
          background-color: orange;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: purple;
        }
      `}</style> */}
    </nav>
  );
}
