
import { useParams } from "react-router-dom";
import useFetch from './../hooks/useFetch';
import Word from "../compoent/Word";
import './Day.scss';

function Day() {
	const { day } = useParams();
	// const wordList = dummy.words.filter(word => (
	// 	word.day === Number(day)
	// ))
	// https://my-json-server.typicode.com/leehyemimi/json-server-api
	const words = useFetch(`http://localhost:3004/words?day=${day}`);

	return (
		<>
			<h2>Day {day}</h2>
			<table>
				<tbody>
					{words.map(word =>
						<Word word={word} key={word.id} />
					)}
				</tbody>
			</table>
		</>
	)
}

export default Day;