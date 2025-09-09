import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { type CardsType } from "../components/Card";
export function useContent() {
    const [contents, setContents] = useState<CardsType[]>([]);

    function refresh() {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                const data = response.data as { content: CardsType[] };
                setContents(data.content);
            })
    }

    useEffect(() => {
        refresh()
        let interval = setInterval(() => {
            refresh()
        }, 10 * 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return {contents, refresh};
}