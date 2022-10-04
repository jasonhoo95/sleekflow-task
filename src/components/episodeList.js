import { useEffect, useState } from "react";
import moment from "moment";

export default function EpisodeList({ data }) {
	const [episode, setEpisode] = useState();
	async function fetchData(data) {
		let episodeList = [];
		const episode = await Promise.all(
			data.map(async (url) => {
				const resp = await fetch(url);
				const dataList = await resp.json();
				episodeList.push(dataList);
			})
		);

		if (episodeList.length > 0) {
			setEpisode(episodeList);
		}
	}
	useEffect(() => {
		if (data) {
			fetchData(data);
		}
	}, [data]);

	useEffect(() => {}, [episode]);
	return (
		<div className="contact-details-container">
			<h3>Episodes</h3>
			<div style={{ width: "100%", overflowX: "auto" }}>
				<table>
					<tbody>
						<tr>
							<th>Name</th>
							<th>AirDate</th>
							<th>Episode</th>
							<th>Created Date</th>
						</tr>
						{episode?.map((o, key) => {
							return (
								<tr key={key}>
									<td>{o.name}</td>
									<td>{o.air_date}</td>
									<td>{o.episode}</td>
									<td>{moment(o.created).format("DD-MM-YYYY")}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
