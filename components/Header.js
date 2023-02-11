import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>DJ Event</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/events'>Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
