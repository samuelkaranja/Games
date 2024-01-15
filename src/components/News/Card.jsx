import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ story }) => {
  const { id, image, title, information } = story;

  // Split the title into words
  const words = title.split(" ");

  // Get the first 7 words
  const first7Words = words.slice(0, 7).join(" ");

  // Add an ellipsis if there are more than 5 words
  const truncatedTitle = words.length > 7 ? `${first7Words}...` : first7Words;

  //Split the information into words
  const text = information.split(" ");

  // Get the first 20 words
  const first20Text = text.slice(0, 30).join(" ");

  // Add an ellipsis if there are more than 20 words
  const truncatedText = text.length > 30 ? `${first20Text}...` : first20Text;

  return (
    <div className="card">
      <div className="crd">
        <div className="crd_img">
          <img src={image} alt={title} />
        </div>
        <div className="info">
          <Link to={`/article/${id}`}>{truncatedTitle}</Link>
          <p>{truncatedText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
