
import './Header.scss'
import {Link} from 'react-router-dom';
function Header(){
	return(
		<div className="header">
			<h1>
				<Link to="/">토익 영단어(고급)</Link>
			</h1>
			<div className="menu">
				<a href="/#" className="link">단어 추가</a>
				<a href="/#" className="link">Day 추가</a>
				{/* <Link to="/create_word" className="link">
					단어 추가
				</Link>
				<Link to="/create_day" className="link">
					Day 추가
				</Link> */}
			</div>
		</div>
	)
}

export default Header;