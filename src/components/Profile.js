import {
  Row,
  Col,
  Button
} from "reactstrap";

const Profile = (props) => {
  return (
      <Col className="profile" lg="3">
         <div className="px-4">
           <img
             alt="..."
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
               <Button
                 className="btn-icon-only rounded-circle ml-1"
                 color="warning"
                 href={`${props.linkedin ? props.linkedin:props.instagram}`}
                 target="_blank"
               >
                 <i className="fa fa-linkedin" />
               </Button>
               <Button
                 className="btn-icon-only rounded-circle ml-1"
                 color="warning"
                 href={`${props.twitter ? props.twitter:props.website}`}
                 target="_blank"
               >
              <i class={props.twitter ? "fa fa-twitter":"fa fa-link"}></i>
               </Button>
               <Button
                 className="btn-icon-only rounded-circle ml-1"
                 color="warning"
                 href={`mailto:${props.email}`}
                 target="_blank"
               >
                 <i className="fa fa-envelope" />
               </Button>
             </div>
           </div>
         </div>
       </Col>
  );
}

export default Profile;
