
import './Header.scss'
import { useNavigate } from 'react-router-dom';
function Header() {
	const navigate = useNavigate();
	return (
		<div className="header">
			<h1 onClick={() => {
				navigate('/')
			}}>
				토익 영단어 (고급)
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