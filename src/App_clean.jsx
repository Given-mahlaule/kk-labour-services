import Navbar from "./components/header/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}