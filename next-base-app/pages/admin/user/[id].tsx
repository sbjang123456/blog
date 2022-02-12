import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
// import Image from 'next/image'
import AdminLayout from "components/layout/admin";

const AdminUserDetailPage: NextPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  console.log(data, 'client');
  return (
    <AdminLayout>
      user detail
      {router.query.id}
    </AdminLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: {id: '1'}},
      {params: {id: '2'}},
      {params: {id: '3'}},
      {params: {id: '4'}},
    ],
    fallback: false
  };

};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { data: { idVal: params!.id } },
    revalidate: 1,
  }
};

export default AdminUserDetailPage;
