
import {Route,Routes} from 'react-router-dom';

import './App.scss';

import Day from "./compoent/Day";
import DayList from "./compoent/DayList";
import Header from "./compoent/Header";
import EmptyPage from "./compoent/EmptyPage";

function App() {
	return (
		<div className="App">
			<Header/>
			<Routes>
				<Route exact path="/react-voca" element={<DayList/>}/>
				<Route path="/react-voca/day/:day" element={<Day/>}/>
				<Route path="*" element={<EmptyPage/>}/>
			</Routes>
		</div>
	);
}

export default App;
