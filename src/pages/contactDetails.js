import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EpisodeList from "../components/episodeList";
import moment from "moment";
export default function ContactDetails() {
	const [data, setData] = useState();
	const params = useParams();
	const userID = params.id;
	useEffect(() => {
		const fetchdata = async () => {
			const jsonData = await fetch("https://rickandmortyapi.com/api/character");
			const episode = await jsonData.json();
			const returnData = episode.results.filter((o) => {
				return o.id == userID;
			});

			setData({ ...returnData[0] });
		};

		fetchdata();
	}, []);

	return (
		<div>
			<div className="main-header">
				<div style={{ textAlign: "center" }}>
					<img style={{ width: "200px", height: "200px", borderRadius: "50%" }} src={data?.image} />
					<h1 style={{ color: "black", marginLeft: "30px" }}>{data?.name}</h1>
				</div>
			</div>

			<hr />
			<div className="contact-details-container">
				<h3>Personal Info</h3>
				<div className="personal-info-container">
					<div style={{ display: "flex", flexFlow: "row wrap" }}>
						<div className="details-object">
							<span className="small-title">Status:</span>
							{data?.status}
						</div>
						<div className="details-object">
							<span className="small-title">Gender:</span>
							{data?.gender}
						</div>
						<div className="details-object">
							<span className="small-title">Species:</span>
							{data?.species}
						</div>
						<div className="details-object">
							<span className="small-title">Location:</span>
							{data?.location.name}
						</div>
						<div className="details-object">
							<span className="small-title">Origin:</span>
							{data?.origin.name}
						</div>
						<div className="details-object">
							<span className="small-title">Created Date:</span>
							{moment(data?.created).format("DD-MM-YYYY")}
						</div>
					</div>
				</div>
			</div>
			<EpisodeList data={data?.episode} />
		</div>
	);
}
