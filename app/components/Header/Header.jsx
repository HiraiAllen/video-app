import header from './header.module.css';

const Header = () => {
  return (
    <header className={header.header}>
        <h1 className={header.headerLogo}>VideoApp</h1>
    </header>
  );
};

export default Header;
