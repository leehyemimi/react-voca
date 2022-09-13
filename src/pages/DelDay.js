import { useState } from "react";
import useFetch from './../hooks/useFetch';

function DelDay() {
	const [day, setDay] = useState();
	const days = useFetch('http://localhost:3004/days');
	function del() {
		if (window.confirm('삭제를 하시겠습니까?')) {
			fetch(`http://localhost:3004/days/${days.id}`, {
				method: "DELETE"
			})
				.then(res => {
					if (res.ok) {
						setDay({ id: 0 });
					}
				})
		}
	}
	if (day.id === 0) {
		return null;
	}
	return (
		<>
			<table>
				<tbody>
					{
						days.map(day => {
							return (
								<tr key={day.id} >
									<td>{day.day}</td>
									<td>
										<button onClick={del}>삭제</button>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</>
	)
}

export default DelDay;