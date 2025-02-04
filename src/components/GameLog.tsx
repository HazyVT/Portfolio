import { useEffect, useState } from "react";

class Review {
    name: string;
    image: string;
    rating: number;

    constructor(name: string, image: string, rating: number) {
        this.name = name;
        this.image = image;
        this.rating = rating;
    }
}

function GameLog() {
    const [totalGames, setTotalGames] = useState<number>();
    const [backlog, setBacklog] = useState<number>();
    const [reviews, setReviews] = useState<Review[]>([]);

    async function getReviews() {
        const url = "https://backloggd-api.vercel.app/user/hazorah";
        const resp = await fetch(url);
        const json = await resp.json();

        setTotalGames(json.content["Total Games Played"]);
        setBacklog(json.content["Games Backloggd"]);

        const tempArr: Review[] = [];
        json.content.recentlyReviewed.forEach(
            (review: { name: string; image: string; rating: number }) => {
                const rv = new Review(review.name, review.image, review.rating);
                tempArr.push(rv);
            }
        );

        setReviews(tempArr);
    }

    useEffect(() => {
        getReviews();
    }, []);

    return (
        <div className="game-log-container">
            <h2>Game Journal</h2>
            <div className="game-log-inner">
                {reviews.map((review, index) => {
                    return (
                        <div
                            key={index + review.name}
                            className="review-container"
                        >
                            <img
                                src={review.image}
                                alt={review.name}
                                width="264"
                                height="352"
                            />
                            <div className="review-text">
                                <h4>{review.name}</h4>
                                <p>Rating: {review.rating} / 5</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="data-container">
                <div>
                    <p>Total Games Played: </p>
                    <h4>{totalGames}</h4>
                </div>
                <div>
                    <p>Games In Backlog: </p>
                    <h4>{backlog}</h4>
                </div>
            </div>
        </div>
    );
}

export default GameLog;
