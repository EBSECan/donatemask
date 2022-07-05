import { Col, Button } from "reactstrap";

const SocialButtonBase = ({ url, icon }) => (
  <Button
    className="btn-icon-only rounded-circle ml-1"
    color="warning"
    href={url}
    target="_blank"
  >
    {icon}
  </Button>
);

const TwitterButton = ({ url }) => (
  <SocialButtonBase url={url} icon={<i className="fa fa-twitter" />} />
);

const InstagramButton = ({ url }) => (
  <SocialButtonBase url={url} icon={<i className="fa fa-instagram" />} />
);

const LinkedInButton = ({ url }) => (
  <SocialButtonBase url={url} icon={<i className="fa fa-linkedin" />} />
);

const WebsiteButton = ({ url }) => (
  <SocialButtonBase url={url} icon={<i className="fa fa-link" />} />
);

const EmailButton = ({ email }) => (
  <SocialButtonBase
    url={`mailto:${email}`}
    icon={<i className="fa fa-envelope" />}
  />
);

const Profile = (props) => {
  return (
    <Col className="profile" lg="3">
      <div className="px-4">
        <img
          alt={props.name}
          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
          src={props.avatar}
          style={{ width: "200px" }}
        />
        <div className="pt-4 text-center">
          <h5 className="title">
            <span className="d-block mb-1">{props.name}</span>
            <small className="h6 text-muted">{props.role}</small>
          </h5>
          <div className="mt-3">
            {props.twitter && <TwitterButton url={props.twitter} />}
            {props.instagram && <InstagramButton url={props.instagram} />}
            {props.linkedin && <LinkedInButton url={props.linkedin} />}
            {props.website && <WebsiteButton url={props.website} />}
            {props.email && <EmailButton email={props.email} />}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Profile;
