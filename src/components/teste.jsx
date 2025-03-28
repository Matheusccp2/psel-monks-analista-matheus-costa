import React, { useEffect, useState } from "react";

const CardsSection = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://seusite.com/wp-json/custom/v1/cards")
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => console.error("Erro ao carregar os cards:", error));
    }, []);

    return (
        <div className="cards-container">
            {cards.map(card => (
                <div key={card.id} className="card">
                    <img src={card.image} alt={card.title} />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsSection;
