
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';

import Day from "./pages/Day";
import DayList from "./pages/DayList";
import Header from "./pages/Header";
import EmptyPage from "./pages/EmptyPage";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route exact path="/" element={<DayList />} />
				<Route path="/day/:day" element={<Day />} />
				<Route path="*" element={<EmptyPage />} />
			</Routes>
		</div>
	);
}

export default App;
