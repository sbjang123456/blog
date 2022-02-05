import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import SignLayout from "components/layout/sign";

const SignPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data, 'client')
  return (
    <SignLayout>
      sign main
    </SignLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('test', 'server')
  return {
    props: {
      data: 'test'
    }, // will be passed to the page component as props
  }
}

export default SignPage;
