/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/EventItem.module.css';

const EventItem = ({ evt }) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.image ? evt.image : '/images/event-default.png'}
          alt=''
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span className='text-xs font-serif font-thin'>
          {evt.date} at {evt.time}
        </span>
        <h3 className='text-xl font-bold font-serif'>{evt.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <button className='btn text-sm'>View Event</button>
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
