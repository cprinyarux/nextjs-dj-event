import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className='text-xl font-semibold font-serif '>
        {' '}
        Copyright &copy; DJ Events 2023
      </p>
      <p className='text-xl font-semibold font-serif hover:text-green-500 '>
        <Link href={'/about'}>About</Link>
      </p>
    </footer>
  );
};

export default Footer;
