import "./App.css";
import Container from "./components/container";
import { Button } from "./components/ui/button";
import Navbar from "./pages/_components/nav-bar";

function App() {
  return (
    <>
      <div className="h-full w-full">
        <Navbar />
        <div className="h-[80dvh] flex items-center bg-amber-400">
          <main className="h-full w-full flex items-center justify-start graphpaper">
            <Container>
              <div className="flex flex-col text-center gap-y-4 mt-4">
                <div className="font-title text-5xl sm:text-7xl lg:text-8xl font-bold">
                  Stay Curius.
                </div>
                <div className="flex flex-col gap-y-8">
                  <p className="font-poppins text-lg">
                    Discover stories, thinking, and <br /> expertise from
                    writers on any topic.
                  </p>
                  <div>
                    <Button
                      size="lg"
                      className="rounded-full py-5 px-10 font-intel text-base"
                    >
                      Start reading
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </main>
        </div>
        <div className="">Trending</div>
      </div>
    </>
  );
}

export default App;
