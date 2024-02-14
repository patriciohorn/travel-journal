// import viteLogo from '/vite.svg';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
