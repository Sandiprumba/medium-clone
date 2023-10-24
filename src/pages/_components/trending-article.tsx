import { formatDate } from "@/lib/format-date";

type TArticle = {
  author: string;
  avatar: string;
  title: string;
  published: string;
  read_time: string;
};

type Props = {
  data: TArticle;
  id: number;
};

const TrendingArticle = ({ data: article, id }: Props) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 my-3 cursor-pointer">
      <div className="flex items-start space-x-2">
        <p className="text-4xl font-title font-bold text-slate-300">0{id}</p>
        <div className="flex-1 flex flex-col gap-y-2 p-2">
          <div className="flex space-x-2">
            <img
              src={article.avatar}
              alt={article.author}
              className="w-6 h-6 rounded-full object-cover"
            />
            <p className="flex-1 ml-4 font-intel text-sm">{article.author}</p>
          </div>
          <p className="font-poppins text-base font-semibold">
            {article.title}
          </p>
          <div className="flex gap-x-3 font-poppins text-sm">
            <p className="text-slate-500/80">{formatDate(article.published)}</p>
            <p className="text-slate-400">{article.read_time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingArticle;
