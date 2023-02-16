import Link from "next/link";
import styles from "../styles/Header.module.css";
import Search from "./Search";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="flex flex-row items-center justify-between text-xl font-semibold font-serif ">
        <Link href="/">DJ Event</Link>
        <Search />
      </div>

      <nav>
        <ul>
          <li className="text-xl font-semibold font-serif ">
            <Link href="/events">Events</Link>
          </li>
          <li className="text-xl font-semibold font-serif ">
            <Link href="/events/add">Add New</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
