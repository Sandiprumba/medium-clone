import Container from "@/components/container";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col text-center gap-y-4 mt-4 ">
        <div className="font-title text-6xl sm:text-7xl lg:text-8xl font-bold">
          Stay Curius.
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="font-poppins text-xl">
            Discover stories, thinking, and <br /> expertise from writers on any
            topic.
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
  );
};

export default HeroSection;
