/* eslint-disable jsx-a11y/alt-text */
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Event.module.css';

export default function EventPage({ evt }) {
  const deleteEvent = (e) => {
    console.log('delete');
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div className='flex flex-row justify-end items-center space-x-4'>
          <Link
            className='font-serif text-base'
            href={`/events/edit/${evt.id}`}
          >
            <div className='flex flex-row items-center justify-center p-3 space-x-3'>
              <FaPencilAlt /> <span className='mx-3'>Edit Event</span>
            </div>
          </Link>

          <a href='#' className='font-serif text-base' onClick={deleteEvent}>
            <div className='flex flex-row items-center justify-center p-3 space-x-3'>
              <FaTimes /> <span className='mx-3'>Delete Event </span>
            </div>
          </a>
        </div>

        <span className='text-sm font-serif mb-5'>
          {evt.date} at {evt.time}
        </span>
        <h1 className='text-2xl font-serif font-bold'>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image} width={960} height={600} />
          </div>
        )}

        <h3 className='text-xl font-serif font-bold'>Performers:</h3>
        <p className='text-base font-serif '>{evt.performers}</p>
        <h3 className='text-xl font-serif font-bold'>Description:</h3>
        <p className='text-base font-serif '>{evt.description}</p>
        <h3 className='text-xl font-serif font-bold'>Venue: {evt.venue}</h3>
        <p className='text-base font-serif '>{evt.address}</p>

        <Link className={styles.back} href='/events'>
          <button className='btn'> {'<'} Go Back</button>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`)
//   const events = await res.json()

//   return {
//     props: {
//       evt: events[0],
//     },
//   }
// }
