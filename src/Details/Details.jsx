import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Details.css';

function Details() {
    const { mealid } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://chinese-food-db.p.rapidapi.com/${mealid}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '7e202ba84dmsh1f8268403cfbacap13af64jsnc211abb9667c',
                    'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setItem(result);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch data. Please try again later.');
            }
        }
        fetchData();
    }, [mealid]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.image} alt="Meal" className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><span>Agood choose:</span>{item.title}</h5>
                            <p className="card-text detail"><span>Description:</span>{item.description}</p>
                            <p className="card-text detail"><span>ingredients:</span>{item.ingredients}</p>
                            <br />
                            <ol className="list-unstyled">
                                {item.method.map(step => (
                                    <li key={Object.keys(step)[0]}>
                                        <strong>{Object.keys(step)[0]}:</strong> {Object.values(step)[0]}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;
