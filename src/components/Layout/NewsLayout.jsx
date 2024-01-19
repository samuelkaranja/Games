import MoreNews from "../News/MoreNews";
import TopNews from "../News/TopNews";
import Topics from "../News/Topics";

const NewsLayout = ({ content }) => {
  return (
    <div className="layout">
      <div className="container">
        <div className="left_column">
          <Topics />
          <TopNews />
        </div>
        <div className="content">{content}</div>
        <div className="right_column">
          <MoreNews />
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
