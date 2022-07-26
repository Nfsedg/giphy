import useSingleGif from 'hooks/useSingleGif';
import Gif from 'components/Gif';
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';


export default function Details ({params}) {
    const { gifs: gif, isError, isLoading } = useSingleGif({id: params.id});
    const title = gif ? gif.title : '';

    if(isLoading) {
        return (
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <h1>Loading...</h1>
            </>
        )
    }

    if(isError) return <Redirect to='/404'/>
    if(!gif) return null

    return(
        <>
            <Helmet>
                    <title>{title} | Giphy</title>
            </Helmet>
            <h1>GIF id {params.id}</h1>
            <Gif {...gif} />
        </>
    )
};