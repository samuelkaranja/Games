import { useParams } from "react-router-dom";
import { news } from "../../assets/data/newsData";

import "./Article.css";
import RelatedTopics from "./RelatedTopics";

const Article = () => {
  const { id } = useParams();
  const article = news.find((info) => info.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article">
      <div className="container">
        <div className="right_shortcut"></div>
        <div className="information">
          <h1>{article.title}</h1>
          <img src={article.image} alt={article.title} />
          <p>{article.information}</p>
        </div>
        <div className="right_shortcut">
          <RelatedTopics />
        </div>
      </div>
    </div>
  );
};

export default Article;
