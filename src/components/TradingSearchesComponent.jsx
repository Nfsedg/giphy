import { useEffect, useState } from "react";
import getTredingTerms from "services/getTrending";
import Category from "components/Category";

export default function TrendingSearches() {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        getTredingTerms().then(setTrends);
    }, [])

    return <Category name='Tendencias' options={trends}/>
}