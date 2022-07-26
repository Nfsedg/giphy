import { useCallback } from 'react';
import { Route, useLocation } from "wouter";
import ListOfGifs from 'components/ListOfGifs';
import Details from 'pages/Detail';
import { GifsContextProvider } from 'context/GifsContext';
import { Helmet } from 'react-helmet';
import TrendingSearches from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';
import Login from 'components/Login'
import 'App.css';

export default function Home () {
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  const handleSubmit = useCallback(({keyword, rating}) => {
    pushLocation(`/gif/${keyword}/${rating}`)
  }, [pushLocation])

  return(
    <>
      <Helmet>
        <title>Home | Giphy</title>
      </Helmet>
      <main>
        <div className="App">
          <h1>Welcome</h1>
          <SearchForm onSubmit={handleSubmit}/>
          <section>
            <GifsContextProvider>
              <div style={{
                minHeight: '100vh'
              }}>
                <Route 
                  component={ListOfGifs}
                  path="/gif/:keyword/:rating?"
                  />
                <Route 
                  component={Details}
                  path="/details/:id"
                  />
                <Route 
                  component={() => <h1>Error 404</h1>}
                  path="/404"
                  />
                <Route
                  component={Login}
                  path="/login"
                />
              </div>
              <TrendingSearches/>
            </GifsContextProvider>
          </section>
        </div>
      </main>
    </>
  )
};