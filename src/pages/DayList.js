
import { Link } from 'react-router-dom';
import useFetch from './../hooks/useFetch';
import './DayList.scss';

function DayList() {
	const days = useFetch('https://my-json-server.typicode.com/leehyemimi/json-server-api/days');
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