import "./News.css";
import { Card, MoreNews, Search, TopNews, Topics } from "../../components";
import { news } from "../../assets/data/newsData";

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="left_sidebar">
          <Topics />
          <TopNews />
        </div>
        <div className="content">
          <Search />
          {news.map((story) => {
            return <Card key={story.id} story={story} />;
          })}
        </div>
        <div className="right_sidebar">
          <MoreNews />
        </div>
      </div>
    </div>
  );
};

export default News;
