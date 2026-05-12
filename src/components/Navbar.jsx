import { Link } from "react-router-dom";
import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Simpsons App</span>
			</Link>

			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">Favorites
						<span className="badge bg-secondary ms-1">
							{store.favorites.length}
						</span>
					</button>

					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
						{store.favorites.length === 0 ? (
							<li className="dropdown-item text-center small text-muted">Empty</li>
						) : (
							store.favorites.map((fav, index) => (
								<li key={index} className="d-flex justify-content-between align-items-center px-3 py-1">
									<span className="dropdown-item p-0">{fav.name}</span>
									<button
										className="btn btn-outline-danger btn-sm border-0"
										onClick={() => dispatch({ type: 'set_favorites', payload: fav })}>
										<i className="fas fa-trash"></i>
									</button>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};