import { Link } from "react-router-dom";
import "./RelatedTopics.css";
import { news } from "../../assets/data/newsData";

const RelatedTopics = () => {
  return (
    <div className="relatedtopics">
      <span>Related Topics</span>
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
  );
};

export default RelatedTopics;
