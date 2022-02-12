import type { NextPage } from 'next'
import Link from "next/link";
// import Image from 'next/image'
import AdminLayout from "components/layout/admin";
import React from "react";

const AdminUserPage: NextPage = () => {
  return (
    <AdminLayout>
      <ul>
        <li>
          <Link href="/admin/user/1">
            <a>1번사용자</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/user/2">
            <a>2번사용자</a>
          </Link>
        </li>
      </ul>
      user main
    </AdminLayout>
  )
}

export default AdminUserPage
