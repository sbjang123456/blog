import Head from "next/head";
import Link from "next/link";
import React from "react";
import Left from "./Left";

interface AdminLayoutProps extends React.PropsWithChildren<any> {
}

export default function AdminLayout({ children }: AdminLayoutProps): React.ReactElement {
  return (
    <div>
      <Head>
        <title>관리자화면</title>
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
        <Left/>
        {children}
      </main>
    </div>
  );
};