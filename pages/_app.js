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
