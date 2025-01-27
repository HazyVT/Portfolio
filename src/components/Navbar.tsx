import { useNavigate } from 'react-router-dom';

function Navbar() {

	const nav = useNavigate();

	function NavLink(props: {text: string, path: string}) {
		return <a className="nav-link" onClick={() => nav(props.path)}>{props.text}</a>
	}

	return (
		<div className="navbar-container">
			<NavLink text="HOME" path="/" />
			<NavLink text="BLOG" path="/blog" />
			<NavLink text="WORKS" path="/works" />
		</div>
	)
}

export default Navbar;
