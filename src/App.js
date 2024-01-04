import Navbar from "./components/navbar.component";
import Hero from "./components/hero.component";
import Analytics from "./components/analytics.component";
import Newsletter from "./components/newsletter.component";
import Cards from "./components/cards.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
