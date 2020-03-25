import React, {Component} from "react"
import {Map, Polyline, TileLayer} from "react-leaflet"

let polyline = [];
let center = null;

export default class RouteMap extends Component<> {

	constructor(props) {
		super(props);
		this.props.route.items.forEach(item => polyline.push([item.longitude,item.latitude]));
		center = polyline[Math.round(polyline.length/2)];
	}

	render() {
		return (
			<Map center={center} zoom={14}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Polyline color="blue" positions={polyline} />
			</Map>
		)
	}
};