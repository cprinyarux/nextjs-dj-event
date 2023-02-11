import Link from 'next/link';
import Layout from '@/components/Layout';
export default function about() {
  return (
    <Layout title='About DJ Events'>
      <h1 className='text-3xl'>About</h1>
      <Link href='/'>Home</Link>
    </Layout>
  );
}
