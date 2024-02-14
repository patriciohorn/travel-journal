// import viteLogo from '/vite.svg';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import './App.css';

export default function App() {
  const travelCards = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">{travelCards}</div>
      </section>
    </>
  );
}
