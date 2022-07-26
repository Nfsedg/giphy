import React, { Suspense } from 'react'
import useNearScreen from "hooks/useNearScreen";

const TrendingSearches = React.lazy(() => import('./TradingSearchesComponent'))


export default function LazyTrending() {
    const {isNearScreen, divRef} = useNearScreen();

    return <div ref={divRef}>
            <Suspense fallback={'Charging...'}>
                {isNearScreen ? <TrendingSearches /> : null}
            </Suspense>
    </div>
};