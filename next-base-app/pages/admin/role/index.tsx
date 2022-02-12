import type { NextPage } from 'next'
// import Image from 'next/image'
import Link from "next/link";
import AdminLayout from "components/layout/admin";

const AdminRolePage: NextPage = () => {
  return (
    <AdminLayout>
      role main
      <ul>
        <li>
          <Link href="/admin/role/manage/detail">
            <a>manage/detail</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/role/test/123">
            <a>test/123</a>
          </Link>
        </li>
      </ul>
    </AdminLayout>
  )
}

export default AdminRolePage
