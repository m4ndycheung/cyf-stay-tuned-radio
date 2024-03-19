import "./Footer.css";
import OrganisationLink from "./OrganisationLink";
import linkedinIcon from "../../media/linkedin-icon.svg";
import githubIcon from "../../media/github-icon.svg";
import ExternalLink from "./ExternalLink";

const organisationLinksData = [
  {
    name: "codeyourfuture.io",
    text: "A UK based non-profit organisation that trains refugees & disadvantaged people to become web developers and helps them to find work in the tech industry.",
    url: "https://codeyourfuture.io/",
  },
];

const teamLinkedInData = [
  {
    icon: linkedinIcon,
    text: "Christina Mifsud",
    url: "https://www.linkedin.com/in/christinamifsud/",
  },
  {
    icon: linkedinIcon,
    text: "Mandy Cheung",
    url: "https://www.https://www.linkedin.com/in/mandy-wtc/",
  },
  {
    icon: linkedinIcon,
    text: "Irianni Munoz",
    url: "https://www.linkedin.com/in/irianni-munoz-693a36164/",
  },
  {
    icon: linkedinIcon,
    text: "Man Sang Sin",
    url: "https://www.linkedin.com/in/man-sang-sin/",
  },
];

const projectData = {
  icon: githubIcon,
  text: "See source code on Github",
  url: "https://github.com/ManSangSin/Rhythm-Code",
};

const organisationLinkElements = organisationLinksData.map((organisation) => {
  return (
    <OrganisationLink
      key={organisation.name}
      organisationName={organisation.name}
      organisationText={organisation.text}
      organisationUrl={organisation.url}
    />
  );
});

const teamLinkedInElements = teamLinkedInData.map((link) => {
  return (
    <ExternalLink
      key={link.text}
      companyIcon={link.icon}
      text={link.text}
      linkUrl={link.url}
    />
  );
});

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="grid-container">
          <div className="organisation-links-container">
            {organisationLinkElements}
          </div>
          <div className="external-links-container">
            <div>
              <p className="footer-medium-font">
                Engineered by Team Rhythm Code
              </p>
              {teamLinkedInElements}
            </div>
            <div>
              <ExternalLink
                companyIcon={projectData.icon}
                text={projectData.text}
                linkUrl={projectData.url}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
