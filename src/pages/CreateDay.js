import useFetch from '../hooks/useFetch'
function CreateDay() {
	const days = useFetch("http://localhost:3004/days");
	return (
		<div>
			<h3>현재 일수 : {days.length}일</h3>
			<button>day 추가</button>
		</div>
	)
}

export default CreateDay;