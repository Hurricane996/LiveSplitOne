import * as React from "react";
import * as LiveSplit from "../livesplit";

export interface Props { state: LiveSplit.TotalPlaytimeComponentStateJson };

export class Component extends React.Component<Props, undefined> {
	render() {
		return (
			<div className="total-playtime">
				<table>
					<tbody>
						<tr>
							<td className="total-playtime-text">{this.props.state.text}</td>
							<td className={"total-playtime-time time"}>{this.props.state.time}</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}