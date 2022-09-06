
import './DayList.scss'
import dummy from './../db/data.json'
import {Link} from 'react-router-dom';

function DayList(){
	return(
		<ul className="list_day">
			{
				dummy.days.map((day,i)=>{
					return(
					<li key={i}>
						<Link to={"/day/"+day.day}>
							Day {day.day}
						</Link>
						</li>
					)
				})
			}
		</ul>
	)
}

export default DayList;