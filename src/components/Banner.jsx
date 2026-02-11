import "./Banner.scss";

function Banner({ title, background }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${background})` }}>
      {title && (
        <div className="banner_content">
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
}

export default Banner;
