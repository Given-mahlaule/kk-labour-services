import TopBar from "./components/header/TopBar";
import Navbar from "./components/header/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-[var(--bg-primary)]">
      <TopBar />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
