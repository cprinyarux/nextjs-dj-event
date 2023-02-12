import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import Showcase from '@/components/Showcase';
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keywords} />
      </Head>
      <Header></Header>
      {router.pathname === '/' && <Showcase />}
      <div className='container'>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ Event | Find the hottest parties',
  description: 'Find the latest DJ and Other',
  keywords: 'music, dj, edm, events',
};
