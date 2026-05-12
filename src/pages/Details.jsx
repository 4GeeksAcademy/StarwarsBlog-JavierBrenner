import React from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Details = () => {
    const { type, id } = useParams();
    const { store } = useGlobalReducer();

    const item = store[type]?.find(element => element.id == id);

    if (!item) return <div className="container mt-5"><h1>Loading...</h1></div>;

    const isCharacter = type === "characters";
    const image = isCharacter ? item.portrait_path : item.image_path;

    return (
        <div className="container mt-5">
            <div className="row border-bottom pb-4 mb-4">
                <div className="col-md-6">
                    <img 
                        src={`https://cdn.thesimpsonsapi.com/200${image}`} 
                        className="img-fluid rounded shadow w-100" 
                        alt={item.name} 
                        style={{ 
                            height: "400px", 
                            width: "auto", 
                            objectFit: "contain",
                            display: "block" 
                        }}
                    />
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-center ps-md-5">
                    <h1 className="display-3 fw-bold">{item.name}</h1>
                    <p className="lead mt-3 text-muted">
                        {isCharacter 
                            ? `Meet ${item.name}, a prominent resident of the Simpsons universe. Check out their details and famous phrases below.`
                            : `Welcome to ${item.name}. This iconic location is a staple of Springfield's landscape.`}
                    </p>
                </div>
            </div>

            <div className="row text-danger mt-4 text-center border-top pt-4">
                {isCharacter ? (
                    <>
                        <div className="col"><strong>Name:</strong> <br/> {item.name}</div>
                        <div className="col"><strong>Age:</strong> <br/> {item.age}</div>
                        <div className="col"><strong>Gender:</strong> <br/> {item.gender}</div>
                        <div className="col"><strong>Occupation:</strong> <br/> {item.occupation}</div>
                        <div className="col"><strong>Status:</strong> <br/> {item.status}</div>
                    </>
                ) : (
                    <>
                        <div className="col"><strong>Name:</strong> <br/> {item.name}</div>
                        <div className="col"><strong>Town:</strong> <br/> {item.town}</div>
                        <div className="col"><strong>Primary Use:</strong> <br/> {item.use}</div>
                    </>
                )}
            </div>

            {isCharacter && item.phrases && (
                <div className="row mt-5">
                    <div className="col-12">
                        <h4 className="text-primary mb-3">Famous Phrases:</h4>
                        <div className="bg-light p-4 rounded shadow-sm">
                            {item.phrases.slice(0, 5).map((phrase, i) => (
                                <p key={i} className="mb-2 italic">
                                    <i className="fa-solid fa-quote-left me-2 text-warning"></i>
                                    {phrase}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};