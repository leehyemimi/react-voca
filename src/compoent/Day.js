
import './Day.scss'
import dummy from './../db/data.json'
import { useParams } from "react-router-dom";


function Day(){
	const {day} = useParams();
	//const day = 2;
	const wordList = dummy.words.filter(word =>(
		word.day === Number(day)
	))
	return(
		<>
		<h2>Day {day}</h2>
		<table>
			<tbody>
			{wordList.map(word=>
				<tr key={word.id}>
						<td>{word.eng}</td>
						<td>{word.kor}</td>
				</tr>
			)}
			{/* {
				wordList.map((word,i)=>{
				return(
						<tr key={word.id}>
								<td>{word.eng}</td>
								<td>{word.kor}</td>
						</tr>
					)
				})
			} */}
			</tbody>
		</table>
		</>
	)
}

export default Day;