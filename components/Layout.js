import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keywords} />
      </Head>
      <Header></Header>
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
