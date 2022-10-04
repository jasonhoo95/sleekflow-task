import { useEffect, useState } from "react";
import SearchItem from "../components/searchItem";
export default function Contact() {
	const [data, setData] = useState();
	const [filterData, setFilter] = useState();
	const [filterParam, setFilterParam] = useState();
	useEffect(() => {
		const data = async () => {
			const jsonData = await fetch("https://rickandmortyapi.com/api/character");
			const movies = await jsonData.json();
			setData(movies.results);
			setFilter(movies.results);
		};

		data();
	}, []);

	useEffect(() => {
		if (filterParam) {
			const filterSearch = data.filter((o) => {
				const name = o.name.toLowerCase();
				const gender = o.gender.toLowerCase();
				const genderMatch = filterParam.gender ? gender.match(filterParam.gender) : true;
				return name.includes(filterParam.search || "") && o.status.includes(filterParam.status || "") && genderMatch;
			});

			setFilter(filterSearch);
		}
	}, [filterParam]);

	const clearFilter = () => {
		const filter = { ...filterParam };
		delete filter["gender"];
		delete filter["status"];
		var elements = document.getElementsByTagName("input");

		for (var i = 0; i < elements.length; i++) {
			if (elements[i].type == "radio") {
				elements[i].checked = false;
			}
		}

		setFilterParam(filter);
	};

	return (
		<div className="contact-container">
			<h1>Contact</h1>
			<input
				onChange={(e) => {
					const filters = { ...filterParam };
					filters.search = e.target.value;
					setFilterParam(filters);
				}}
				className="input-txt"
				placeholder="search name"
				type="text"
			/>
			<div style={{ display: "flex", alignItems: "center" }}>
				<div className="dropdown">
					<button className="dropbtn">
						{filterParam?.status ? filterParam.status : "Status"} <i className="fa fa-angle-down"></i>
					</button>
					<div id="myDropdown" className="dropdown-content">
						<div className="radiobtn">
							<input
								onChange={(e) => {
									const filters = { ...filterParam };
									filters.status = e.target.value;
									setFilterParam(filters);
								}}
								type="radio"
								id="Alive"
								name="status_radio"
								value="Alive"
							/>
							<label htmlFor="alive">Alive</label>
							<br />
						</div>

						<div className="radiobtn">
							<input
								onChange={(e) => {
									const filters = { ...filterParam };
									filters.status = e.target.value;
									setFilterParam(filters);
								}}
								type="radio"
								id="Dead"
								name="status_radio"
								value="Dead"
							/>
							<label htmlFor="dead">Dead</label>
							<br />
						</div>
						<div className="radiobtn">
							<input
								onChange={(e) => {
									const filters = { ...filterParam };
									filters.status = e.target.value;
									setFilterParam(filters);
								}}
								type="radio"
								id="unknown"
								name="status_radio"
								value="unknown"
							/>
							<label htmlFor="unknown">Unknown</label>
							<br />
						</div>
					</div>
				</div>

				<div className="dropdown">
					<button className="dropbtn">
						{filterParam?.gender ? filterParam.gender : "Gender"} <i className="fa fa-angle-down"></i>
					</button>
					<div id="myDropdown" className="dropdown-content">
						<div className="radiobtn">
							<input
								onChange={(e) => {
									const filters = { ...filterParam };
									filters.gender = e.target.value;
									setFilterParam(filters);
								}}
								type="radio"
								id="female"
								name="gender_radio"
								value="female"
							/>
							<label htmlFor="female">Female</label>
							<br />
						</div>

						<div className="radiobtn">
							<input
								onChange={(e) => {
									const filters = { ...filterParam };
									filters.gender = e.target.value;
									setFilterParam(filters);
								}}
								type="radio"
								id="male"
								name="gender_radio"
								value="male"
							/>
							<label htmlFor="male">Male</label>
							<br />
						</div>
						<div className="radiobtn">
							<input
								onChange={(e) => {
									const filters = { ...filterParam };
									filters.gender = e.target.value;
									setFilterParam(filters);
								}}
								type="radio"
								id="genderless"
								name="gender_radio"
								value="genderless"
							/>
							<label htmlFor="genderless">Genderless</label>
							<br />
						</div>
						<div className="radiobtn">
							<input
								onChange={(e) => {
									const filters = { ...filterParam };
									filters.gender = e.target.value;
									setFilterParam(filters);
								}}
								type="radio"
								id="unknown"
								name="gender_radio"
								value="unknown"
							/>
							<label htmlFor="unknown">Unknown</label>
							<br />
						</div>
					</div>
				</div>

				{filterParam?.status || filterParam?.gender ? (
					<div style={{ marginLeft: "auto" }}>
						<button
							onClick={(e) => {
								clearFilter();
							}}
							className="dropbtn">
							Clear All Filters
						</button>
					</div>
				) : null}
			</div>

			<SearchItem data={filterData} />
		</div>
	);
}
