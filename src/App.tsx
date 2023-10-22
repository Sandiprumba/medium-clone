import "./App.css";
import HeroSection from "@_components/hero-section";
import Navbar from "@_components/nav-bar";
import Trending from "@_components/trending";

function App() {
  return (
    <>
      <div className="h-full w-full">
        <Navbar />
        <div className="h-[80dvh] flex items-center bg-amber-400">
          <main className="h-full w-full flex items-center justify-start graphpaper border-b-black border-b-[1px]">
            <HeroSection />
          </main>
        </div>
        <div className="mt-8 ">
          <Trending />
        </div>
      </div>
    </>
  );
}

export default App;
