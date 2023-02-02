import { useState, useEffect } from "react";
import Results from "./results";
const SearchComponent = () => {
	// http://localhost:3000/api/getdata
	const [apprenticeships, setApprenticeships] = useState("");
	const [routeFilter, setRouteFilter] = useState("Any Route");
	const [statusFilter, setStatusFilter] = useState("Any Status");
	const [levelFilter, setLevelFilter] = useState("Any Level");
	const [durationFilter, setDurationFilter] = useState("Any Duration");
	const [searchResults, setSearchResults] = useState("");
	let temporarySearchArray = [];
	useEffect(() => {
		fetch("http://localhost:3000/api/getdata")
			.then((response) => response.json())
			.then(
				(data) => (
					setApprenticeships(data.results),
					(temporarySearchArray = data.results)
				)
			);
	}, [apprenticeships]);

	function resetSearchResults() {
		setRouteFilter("Any Route");
		setStatusFilter("Any Status");
		setLevelFilter("Any Level");
		setDurationFilter("Any Duration");
		setSearchResults("");
	}

	function isRouteAny(route) {
		if (route === "Any Route") {
			return (temporarySearchArray = apprenticeships);
		} else
			return (temporarySearchArray = apprenticeships.filter((apprenticeship) =>
				apprenticeship.route.includes(route)
			));
	}

	function isStatusAny(status) {
		if (status === "Any Status") {
			return;
		} else {
			return (temporarySearchArray = temporarySearchArray.filter(
				(apprenticeship) => apprenticeship.status.includes(status)
			));
		}
	}

	function isLevelAny(level) {
		if (level === "Any Level") {
			return;
		} else {
			return (temporarySearchArray = temporarySearchArray.filter(
				(apprenticeship) => apprenticeship.level.toString().includes(level)
			));
		}
	}

	function isDurationAny(duration) {
		if (duration === "Any Duration") {
			return;
		} else {
			return (temporarySearchArray = temporarySearchArray.filter(
				(apprenticeship) =>
					apprenticeship.duration.toString().includes(duration)
			));
		}
	}

	function filters(route, status, level, duration) {
		isRouteAny(route);
		isStatusAny(status);
		isLevelAny(level);
		isDurationAny(duration);
		setSearchResults(temporarySearchArray);
	}

	return (
		<div className=" flex flex-col justify-center p-4 max-w-[100%] border-solid border border-[#1E73BE]">
			<h1 className="font-bold text-center p-2">
				Welcome to apprenticeship search!
			</h1>
			<div className="flex justify-between  gap-2">
				<label htmlFor="route">Route:</label>
				<select
					value={routeFilter}
					onChange={(e) => setRouteFilter(e.target.value)}
					required
					className="truncate w-32"
					name="route"
				>
					<option value={"Any Route"}>Any</option>
					<option value={"Agriculture, environmental and animal care"}>
						Agriculture, environmental and animal care
					</option>
					<option value={"Business and administration"}>
						Business and administration
					</option>
					<option value={"Care services"}>Care services</option>
					<option value={"Catering and hospitality"}>
						Catering and hospitality
					</option>
					<option value={"Construction"}>Construction</option>
					<option value={"Creative and design"}>Creative and design</option>
					<option value={"Digital"}>Digital</option>
					<option value={"Education and childcare"}>
						Education and childcare
					</option>
					<option value={"Engineering and manufacturing"}>
						Engineering and manufacturing
					</option>
					<option value={"Hair and beauty"}>Hair and beauty</option>
					<option value={"Health and science"}>Health and science</option>
					<option value={"Legal, finance and accounting"}>
						Legal, finance and accounting
					</option>
					<option value={"Protective services"}>Protective services</option>
					<option value={"Sales, marketing and procurement"}>
						Sales, marketing and procurement
					</option>
					<option value={"Transport and logistics"}>
						Transport and logistics
					</option>
				</select>
			</div>
			<div className="flex justify-between gap-2">
				<label htmlFor="status">Status:</label>
				<select
					value={statusFilter}
					onChange={(e) => setStatusFilter(e.target.value)}
					required
					className="truncate w-32"
					name="status"
				>
					{" "}
					<option value={"Any Status"}>Any</option>
					<option value={"Approved for delivery"}>Approved for delivery</option>
					<option value={"In development"}>In development</option>
					<option value={"Retired"}>Retired</option>
					<option value={"Withdrawn"}>Withdrawn</option>
					<option value={"Proposal in development"}>
						Proposal in development
					</option>
				</select>
			</div>
			<div className="flex justify-between gap-2">
				<label htmlFor="level">Level:</label>
				<select
					value={levelFilter}
					onChange={(e) => setLevelFilter(e.target.value)}
					required
					className="truncate w-32"
					name="level"
				>
					<option value={"Any"}>Any</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
					<option value={6}>6</option>
					<option value={7}>7</option>
				</select>
			</div>
			<div className="flex justify-between gap-2">
				<label htmlFor="duration">Duration:</label>
				<select
					value={durationFilter}
					onChange={(e) => setDurationFilter(e.target.value)}
					required
					className="truncate w-32"
					name="duration"
				>
					<option value="Select Duration" disabled>
						Select Duration
					</option>
					<option value={"Any"}>Any</option>
					<option value={0}>0</option>
					<option value={12}>12</option>
					<option value={13}>13</option>
					<option value={14}>14</option>
					<option value={15}>15</option>
					<option value={16}>16</option>
					<option value={18}>18</option>
					<option value={21}>21</option>
					<option value={22}>22</option>
					<option value={24}>24</option>
					<option value={26}>26</option>
					<option value={27}>27</option>
					<option value={30}>30</option>
					<option value={33}>33</option>
					<option value={34}>34</option>
					<option value={36}>36</option>
					<option value={38}>38</option>
					<option value={42}>42</option>
					<option value={48}>48</option>
					<option value={54}>54</option>
					<option value={60}>60</option>
					<option value={66}>66</option>
				</select>
			</div>
			{searchResults === "" && (
				<button
					className="m-auto mt-4 p-4  bg-[#1E73BE] text-[#ffffff]"
					onClick={() =>
						filters(routeFilter, statusFilter, levelFilter, durationFilter)
					}
				>
					Find Apprenticeships
				</button>
			)}
			{searchResults !== "" && (
				<button
					className="m-auto mt-4 p-4  bg-[#1E73BE] text-[#ffffff]"
					onClick={() => resetSearchResults()}
				>
					Reset Search
				</button>
			)}
			{searchResults !== "" && <Results searchResults={searchResults} />}
		</div>
	);
};

export default SearchComponent;
