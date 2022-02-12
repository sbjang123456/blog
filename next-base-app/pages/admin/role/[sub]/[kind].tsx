import type { NextPage } from 'next'
import { useRouter } from 'next/router';
// import Image from 'next/image'
import AdminLayout from "components/layout/admin";

const AdminRoleKindPage: NextPage = () => {
  const router = useRouter();
  return (
    <AdminLayout>
      role sub kind {router.query.sub}/{router.query.kind}
    </AdminLayout>
  )
}

export default AdminRoleKindPage
