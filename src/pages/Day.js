
import { useParams } from "react-router-dom";

import './Day.scss'

import dummy from '../db/data.json';
import Word from "../compoent/Word";


function Day() {
	const { day } = useParams();
	//const day = 2;
	const wordList = dummy.words.filter(word => (
		word.day === Number(day)
	))
	return (
		<>
			<h2>Day {day}</h2>
			<table>
				<tbody>
					{wordList.map(word =>
						<Word word={word} key={word.id} />
					)}
				</tbody>
			</table>
		</>
	)
}

export default Day;