import "./TopNews.css";
import Ball from "../../assets/images/football.png";
import { Link } from "react-router-dom";
import { news } from "../../assets/data/newsData";

const TopNews = () => {
  return (
    <div className="topnews">
      <div className="hd">
        <img src={Ball} alt="" />
        <p>Top News</p>
      </div>
      <div className="tn">
        <ul>
          {news.map((article) => {
            return (
              <li key={article.id}>
                <Link to={`/article/${article.id}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TopNews;
