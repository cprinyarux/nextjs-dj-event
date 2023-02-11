import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className='flex fex-row items-center justify-center mx-24, my-48 text-center text-5xl'>
        <FaExclamationTriangle />
        <p> 404 Sorry, something wrong!</p>
      </div>
      <div className='mx-auto'>
        <Link className='mx-auto' href='/'>
          <button className='btn mx-96'> Back to Home </button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
