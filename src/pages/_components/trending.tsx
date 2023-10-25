import Container from "@/components/container";
import { TrendingUp } from "lucide-react";
import TrendingArticle from "./trending-article";
import { mockArticles } from "@/data/mock";

// type Props = {};

const Trending = () => {
  return (
    <Container>
      <div className="flex items-center space-x-2 my-4">
        <TrendingUp className="border-black border-2 h-6 w-6 rounded-full" />
        <h1 className="font-semibold text-base font-intel">
          Trending on Xedium
        </h1>
      </div>
      <div className="flex flex-wrap my-4">
        {mockArticles.map((article, id) => (
          <TrendingArticle data={article} key={id} id={id + 1} />
        ))}
      </div>
    </Container>
  );
};

export default Trending;
