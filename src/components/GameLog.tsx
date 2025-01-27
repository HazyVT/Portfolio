import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

class Log {
    total: number;
    backlog: number;

    constructor(total: number, backlog: number) {
        this.total = total;
        this.backlog = backlog;
    }
}

function GameLog() {
    const [log, setLog] = useState<Log>();

    async function getGameLog() {
        const url = "https://backloggd-api.vercel.app/user/hazorah";
        const resp = await fetch(url);
        const json = await resp.json();
        const nLog = new Log(
            json.content["Total Games Played"],
            json.content["Games Backloggd"]
        );
        setLog(nLog);
    }

    useEffect(() => {
        getGameLog();
    }, []);

    return (
        <Box marginTop={8}>
            {log ? (
                <Box>
                    <Text>Total Games Played: {log.total}</Text>
                    <Text>Games In Backlog: {log.backlog}</Text>
                </Box>
            ) : (
                ""
            )}
        </Box>
    );
}

export default GameLog;
