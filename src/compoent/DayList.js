
import './DayList.scss'
import dummy from './../db/data.json'
import {Link} from 'react-router-dom';

function DayList(){
	return(
		<ul className="list_day">
			{dummy.days.map(day=>
				<li key={day.id}>
					<Link to={"/react-voca/day/"+day.day}>
						Day- {day.day}
					</Link>
				</li>
			)}
		</ul>
	)
}

export default DayList;