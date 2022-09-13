
import './DayList.scss'
//import dummy from './../db/data.json'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function DayList() {
	const [days, setDays] = useState([]);

	useEffect(() => { //http://localhost:3004/days
		fetch('http://my-json-server.typicode.com/leehyemimi/json-server-api/days')
			.then(res => {
				return res.json();
			})
			.then(data => {
				setDays(data);
			})
	}, []);

	return (
		<ul className="list_day">
			{days.map(day =>
				<li key={day.id}>
					<Link to={"/day/" + day.day}>
						Day- {day.day}
					</Link>
				</li>
			)}
		</ul>
	)
}

export default DayList;