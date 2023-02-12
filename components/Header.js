import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='text-xl font-semibold font-serif '>
        <Link href='/'>DJ Event</Link>
      </div>
      <nav>
        <ul>
          <li className='text-xl font-semibold font-serif '>
            <Link href='/events'>Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
