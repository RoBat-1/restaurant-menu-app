import { useState, useEffect } from 'react';
import MenuSection from './components/MenuSection';
import { fetchCSV } from './utils/csvParser';
import './App.css';

function App() {
  const [kaakItems, setKaakItems] = useState([]);
  const [crepeItems, setCrepeItems] = useState([]);
  const [juiceItems, setJuiceItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMenuData = async () => {
      setLoading(true);
      try {
        const [kaak, crepes, juice] = await Promise.all([
          fetchCSV('/data/kaak.csv'),
          fetchCSV('/data/crepes.csv'),
          fetchCSV('/data/juice.csv')
        ]);

        setKaakItems(kaak);
        setCrepeItems(crepes);
        setJuiceItems(juice);
      } catch (error) {
        console.error('Error loading menu data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMenuData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading delicious menu...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="restaurant-name">🍽️ Delicious Bites</h1>
        <p className="restaurant-tagline">Authentic Flavors, Fresh Ingredients</p>
      </header>

      <main className="menu-container">
        <MenuSection 
          title="Kaak" 
          items={kaakItems} 
          icon="🥖"
        />
        
        <MenuSection 
          title="Crepes" 
          items={crepeItems} 
          icon="🥞"
        />
        
        <MenuSection 
          title="Fresh Juices" 
          items={juiceItems} 
          icon="🧃"
        />
      </main>

      <footer className="app-footer">
        <p>© 2025 Delicious Bites Restaurant | All prices in USD</p>
      </footer>
    </div>
  );
}

export default App;
