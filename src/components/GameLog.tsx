import { Box, Text, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

class Log {
    total: number;
    backlog: number;

    constructor(total: number, backlog: number) {
        this.total = total;
        this.backlog = backlog;
    }
}

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
    const [log, setLog] = useState<Log>();
    const [reviews, setReviews] = useState<Review[]>([]);

    async function getGameLog() {
        const url = "https://backloggd-api.vercel.app/user/hazorah";
        const resp = await fetch(url);
        const json = await resp.json();
        const nLog = new Log(
            json.content["Total Games Played"],
            json.content["Games Backloggd"]
        );
        setLog(nLog);

        const tempReviews: Review[] = [];

        json.content.recentlyReviewed.forEach((review) => {
            const rv = new Review(review.name, review.image, review.rating);
            tempReviews.push(rv);
        });

        setReviews(tempReviews);
    }

    useEffect(() => {
        getGameLog();
    }, []);

    return (
        <Box maxW="30rem">
            <Box>
                {reviews.map((review, index) => {
                    return (
                        <Box
                            key={index}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            minW="24vw"
                            margin={4}
                        >
                            <Box>
                                <Heading w="10rem" wordBreak="break-word">
                                    {review.name}
                                </Heading>
                                <Text>Rating: {review.rating} / 5</Text>
                            </Box>
                            <Image
                                src={review.image}
                                w="8vh"
                                borderRadius="4px"
                            />
                        </Box>
                    );
                })}
            </Box>
            {log ? (
                <Box
                    display="flex"
                    justifyContent="space-around"
                    marginTop={12}
                    w="30rem"
                >
                    <Text wordBreak="break-word" textAlign="center">
                        Total Games Played:{" "}
                        <Heading as="span">{log.total}</Heading>
                    </Text>
                    <Text wordBreak="break-word" textAlign="center">
                        Games In Backlog:{" "}
                        <Heading as="span">{log.backlog}</Heading>
                    </Text>
                </Box>
            ) : (
                ""
            )}
        </Box>
    );
}

export default GameLog;
