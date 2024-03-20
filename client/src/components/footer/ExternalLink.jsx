import "./ExternalLink.css";

// eslint-disable-next-line react/prop-types
const ExternalLinks = ({ companyIcon, text, linkUrl }) => {
  return (
    // rel needs to be specified when target is used as security risk for older browsers
    <a href={linkUrl} target="_blank" rel="noreferrer">
      <p className="externalLink">
        <img
          className="externalLink-icon"
          src={companyIcon}
          alt="company logo"
        />
        {text}
      </p>
    </a>
  );
};

export default ExternalLinks;
