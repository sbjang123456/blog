import Link from "next/link";
import React from "react";

export default function Left(): React.ReactElement {
  return (
    <ul>
      <li>
        <Link href="/admin/user">
          <a>사용자메뉴</a>
        </Link>
      </li>
      <li>
        <Link href="/admin/role">
          <a>권한메뉴</a>
        </Link>
      </li>
    </ul>
  );
};