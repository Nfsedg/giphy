import { useState, useRef, useEffect } from 'react'

export default function useNearScreen ({ distance ='100px', externalRef, once = true } = {}) {
    const [isNearScreen, setShow] = useState(false);
    const divRef = useRef(null)

    useEffect(() => {
        let observer

        const element = externalRef ? externalRef.current : divRef.current

        const observerOptions = {
            rootMargin: distance
        }
        const onChangeScroll = (entries, observer) => {
            const el = entries[0];
            if(el.isIntersecting) {
                setShow(true)
                once && observer.disconnect();
            } else {
                !once && setShow(false)
            }
        };

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChangeScroll, observerOptions);
            if (element) observer.observe(element)
        })

        return () => observer && observer.disconnect();
    }, [distance, externalRef])

    return {isNearScreen, divRef}
}