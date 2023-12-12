import { useEffect, useState } from 'react'

const Getdata = (url, method="GET") => {
    const [post, setPost] = useState([])
    const [error, setError] = useState('')
    const [ispending, setIspending] = useState(false)
    const [options, setOptions] = useState(null)

    const optionsData = (post) => {
        if(method === 'POST'){
            setOptions({
                method: "POST",
                body: JSON.stringify(post),
                header: {
                    "Content-type" : "application/json; charset=UTF-8",
                },
            });
        }
    };

    useEffect(() => {
        const fetchApis = async (options) => {
            setIspending(true)
            const response = await fetch(url, {...options});

            const jsonResponse = await response.json();

            if (response.ok) {
                setPost(jsonResponse)
                setError("")
                setIspending(false)
            }

            if (!response.ok) {
                setError(jsonResponse.error)
                console.log(error);
                setIspending(false)
            }

        }
        if(method === "GET"){
            fetchApis();
        }
        else if(method === "POST" && options){
            fetchApis(options)
        }
    }, [url, method, options, error])

    return {post, error, ispending, optionsData}
}

export default Getdata