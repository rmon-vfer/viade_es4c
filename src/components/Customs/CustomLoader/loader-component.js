import React from "react";
import {CircleLoader} from "react-spinners";
import {Col, Row} from "react-bootstrap";

const Loader = (props) => {
	return <Row className="sweet-loading">
		<Col xs={12} md={5}/>
		<Col xs={12} md={"auto"}>
			<CircleLoader
				size={props.size}
				color={"#bcdad3"}
			/>
		</Col>
		<Col xs={12} md={5}/>
	</Row>
};

export default Loader;