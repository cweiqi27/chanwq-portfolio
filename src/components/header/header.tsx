import styles from './header.module.scss';

const Header = () => {
  return (
    <header>
      <nav className={styles.header}>
        <div>
          <h1>chan</h1>
        </div>
        <h2>something</h2>
        <h2>something</h2>
      </nav>
    </header>
  );
}

export default Header;