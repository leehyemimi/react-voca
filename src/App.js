
import { Route, Routes } from 'react-router-dom';

import './App.scss';

import Day from "./pages/Day";
import DayList from "./pages/DayList";
import Header from "./pages/Header";
import EmptyPage from "./pages/EmptyPage";
import CreateWord from "./pages/CreateWord";
import CreateDay from "./pages/CreateDay";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route exact path="/" element={<DayList />} />
				<Route path="/day/:day" element={<Day />} />
				<Route path="/create_word" element={<CreateWord />} />
				<Route path="/create_day" element={<CreateDay />} />
				<Route path="*" element={<EmptyPage />} />
			</Routes>
		</div>
	);
}

export default App;
