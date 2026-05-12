import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardCharacter = ({ character }) => {
    const { store, dispatch } = useGlobalReducer();

    const isFavorite = store.favorites?.some(fav => fav.name === character.name);

    const handleClickFavorite = () => {
        dispatch({
            type: 'set_favorites',
            payload: character
        });
    };

    return (
        <div className="p-2">
            <div className="card shadow-sm" style={{ width: '18rem', height: '450px' }}>
                <div style={{ height: '200px', backgroundColor: "#f8f9fa" }} className="d-flex align-items-center justify-content-center">
                    <img 
                        src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`} 
                        alt={character.name}
                        style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                    />
                </div>
                
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title text-center fw-bold text-truncate">{character.name}</h5>
                        <div className="text-center" style={{ height: '100px', overflow: 'hidden' }}>
                            <p className="mb-1">{character.gender}</p>
                            <p className="mb-1">{character.age} years old</p>
                            <p className="small text-muted" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {character.occupation}
                            </p>
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center border-top pt-3">
                        <Link to={`/details/characters/${character.id}`} className="btn btn-primary">
                            Learn more
                        </Link>
                        <button 
                            type="button" 
                            className="btn btn-outline-warning"
                            onClick={handleClickFavorite}
                        >
                            <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
