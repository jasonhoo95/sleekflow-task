import { useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function SearchItem({ data }) {
	if (data?.length > 0) {
		return data?.map((o, key) => {
			return (
				<div key={key} className="search-item">
					<Link to={`/contact/${o.id}`}>
						<div style={{ display: "flex" }}>
							<h3>{key + 1}.</h3>
							<img className="search-img" src={o.image} />
							<div style={{ textAlign: "left", marginLeft: "30px" }}>
								<h3>{o.name}</h3>
								<div>{o.species}</div>
							</div>
						</div>
					</Link>
				</div>
			);
		});
	} else {
		return <h3>NO RESULT!</h3>;
	}
}
