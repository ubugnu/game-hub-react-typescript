import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import Game from "../interfaces/Game";

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true)

        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => {
                setGames(res.data.results)
                setLoading(false)
            })
            .catch(err => {
                // to handle the useStrict mode that mount the component twice
                if (err instanceof CanceledError) return;
                // Normal error handling
                setError(err.message)
                setLoading(false)
            })

        return () => controller.abort();
    }, [])

    return { games, error, isLoading }
}

export default useGames;