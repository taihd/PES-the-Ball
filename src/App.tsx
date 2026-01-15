import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { HomePage } from './pages/HomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/PES">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HomePage />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
