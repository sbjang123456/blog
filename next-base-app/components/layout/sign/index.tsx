import Head from "next/head";
import React from "react";
import Link from "next/link";

interface SignLayoutProps extends React.PropsWithChildren<any> {
}

export default function SignLayout({ children }: SignLayoutProps): React.ReactElement {
  return (
    <div>
      <Head>
        <title>로그인 화면</title>
      </Head>
      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          </li>
          <li>
            <Link href="/sign">
              <a>sign</a>
            </Link>
          </li>
        </ul>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};