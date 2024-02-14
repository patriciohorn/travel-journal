import logo from '../assets/journal-logo.svg';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img className="logo--img" src={logo} alt="World Icon" />
        <h1 className="logo--text">my travel journal.</h1>
      </div>
    </nav>
  );
}
