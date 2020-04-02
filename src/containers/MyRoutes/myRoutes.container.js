import React from "react";
import {routeHelper} from "../../viade";
import {RouteList} from "../../components/";


const MyRoutesComponent =(props)=> {
		const {webId}=props;
		return (
			<RouteList webId={webId} readRoutes={routeHelper.fetchUrlMyRoutes}></RouteList>
		);
}

export default MyRoutesComponent;
