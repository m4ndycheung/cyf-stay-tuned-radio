import "./OrganisationLinks.css";

const OrganisationLink = ({
  organisationName,
  organisationText,
  organisationUrl,
}) => {
  return (
    <div>
      {/* rel needs to be specified when target is used as security risk for older browsers */}
      <a href={organisationUrl} target="_blank" rel="noreferrer">
        <h3 className="organisation-title">{organisationName}</h3>
      </a>
      <p>{organisationText}</p>
    </div>
  );
};

export default OrganisationLink;
