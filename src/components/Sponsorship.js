import { Col } from "reactstrap";

const Sponsorship = (props) => {
	return (
		<Col className="profile" lg="3">
			<div className="px-4">
				<a href={props.href} target="_blank">
					<img
						className="img-center img-fluid"
						src={props.src}
						style={{
							padding: props.padding,
							backgroundColor: props.bgColor,
						}}
					/>
				</a>
			</div>
		</Col>
	);
};

export default Sponsorship;
