
import { useState } from "react";
import './Word.scss'

function Word({ word: w }) {
	const [word, setWord] = useState(w);
	const [isShow, setIsShow] = useState(false);
	const [isDone, setIsDone] = useState(word.isDone);

	function toggleShow() {
		setIsShow(!isShow);
	}
	function toggleDone() {
		//setIsDone(!isDone); // https://my-json-server.typicode.com/leehyemimi/json-server-api
		fetch(`http://localhost:3004/words/${word.id}`, {
			method: "PUT",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...word,
				isDone: !isDone,
			}),
		})
			.then(res => {
				if (res.ok) {
					setIsDone(!isDone);
				}
			})
	}
	function del() {
		if (window.confirm('삭제를 하시겠습니까?')) {
			fetch(`http://localhost:3004/words/${word.id}`, {
				method: "DELETE"
			})
				.then(res => {
					if (res.ok) {
						setWord({ id: 0 });
					}
				})
		}
	}

	if (word.id === 0) {
		return null;
	}

	return (
		<tr className={isDone === true ? 'off' : ''}>
			<td>
				<input type="checkbox"
					checked={isDone}
					onChange={toggleDone}
				/>
			</td>
			<td>{word.eng}</td>
			<td>{isShow && word.kor}</td>
			<td>
				<button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
				<button onClick={del} className="btn_del">삭제</button>
			</td>
		</tr>
	)
}

// REST API
// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

export default Word;