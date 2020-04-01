import React from "react";
import {notificationHelper,} from "../../../../utils";
import {NotificationCard} from "../../../../components";

class NotificationItem extends React.Component {
	constructor(props) {
		super(props);
		const {url, webId} = props;
		this.url = url;
		this.webId = webId;
		this.state = {};
	}

	init = async () => {
		if (this.state.notification) {
			return;
		}
		const notification = await notificationHelper.fetchNotification(this.url);
		this.setState({notification: notification});
	};

	addSharedWithMe = async (notification) => {
		console.log(notification);
		if (!notification) {
			return;
		}
		if (!notification.read) {
			console.log(notification.object);
			console.log(this.webId);
			console.log(notification);
			await notificationHelper.addRouteSharedWithMe(notification.object, this.webId);
			await notificationHelper.markAsRead(notification);
		}
	};

	render() {
		this.init();
		return (
			<div>
				{this.state.notification ?
					<NotificationCard
						name={this.state.notification.object.toString().split("/").pop()}
						user={this.state.notification.actor.toString()
							.substr(8, this.state.notification.actor.toString().length - 40)}
						read={this.state.notification.read}
						action={() => this.addSharedWithMe(this.state.notification)}/>
					: null}
			</div>
		);
	}
}

export default NotificationItem;
