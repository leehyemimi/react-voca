
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import './App.scss';

import Day from "./compoent/Day";
import DayList from "./compoent/DayList";
import Header from "./compoent/Header";
import EmptyPage from "./compoent/EmptyPage";

function App() {
	return (
		<BrowserRouter>
		<div className="App">
			<Header/>
			<Routes>
				<Route exact path="/" element={<DayList/>}/>
				<Route path="/day/:day" element={<Day/>}/>
				<Route path="*" element={<EmptyPage/>}/>
			</Routes>
		</div>
		</BrowserRouter>
	);
}

export default App;
