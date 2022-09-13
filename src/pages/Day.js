
import { useParams } from "react-router-dom";

import './Day.scss'

//import dummy from '../db/data.json';
import Word from "../compoent/Word";
import { useState, useEffect } from "react";


function Day() {
	const { day } = useParams();
	// const wordList = dummy.words.filter(word => (
	// 	word.day === Number(day)
	// ))

	const [words, setWords] = useState([]);

	useEffect(() => { //http://localhost:3004/words
		fetch(`http://my-json-server.typicode.com/leehyemimi/json-server-api/words?day=${day}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setWords(data);
			})
	}, [day]);


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