import React, { useState } from 'react'

export default function ApidataComp() {

    const [data, setdata] = useState([])

    const handleapi = async () => {

        let res = await fetch('https://fakestoreapi.com/products')

        let apidata = await res.json()

        setdata(apidata)
    }

    return (

        <div>

            <button onClick={handleapi}>Call</button>

            {data.map((da) => (

                <div>

                    <h1>{da.title}</h1>
<img height={200} width={200} src={da.image} alt="" />

                </div>

            )
            )}


        </div>

    )

}
