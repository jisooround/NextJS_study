import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header className={styles.header}>
        <h1>JISOO WORLD</h1>
        <nav className={styles.nav}>
          <a href="">Contact</a>
          <a href="">About</a>
        </nav>
      </header>

      <body>{children}</body>
    </html>
  );
}
