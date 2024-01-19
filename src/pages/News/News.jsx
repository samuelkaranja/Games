import "./News.css";
import { Card, NewsLayout, Search } from "../../components";
import { news } from "../../assets/data/newsData";

const News = () => {
  const NewsContent = (
    <div className="news">
      <div className="content">
        <Search />
        {news.map((story) => {
          return <Card key={story.id} story={story} />;
        })}
      </div>
    </div>
  );
  return <NewsLayout content={NewsContent} />;
};

export default News;
