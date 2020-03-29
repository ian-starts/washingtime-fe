import React from 'react'
import Head from 'next/head'

export default (props) => {
    return (
        <div>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <title>{props.title}</title>
                <meta name="title" content={props.title}/>
                <meta name="description"
                      content={"Help mee om alle initiatieven rondom COVID-19 in kaart te brengen!"}/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://helpdehelpers.nl/"/>
                <meta property="og:title" content={props.title}/>
                <meta property="og:description"
                      content={"Help mee om alle initiatieven rondom COVID-19 in kaart te brengen!"}/>
                <meta property="og:image" content="https://helpdehelpers.nl/assets/images/metatag.png"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://helpdehelpers.nl/"/>
                <meta property="twitter:title" content={props.title}/>
                <meta property="twitter:description"
                      content={"Help mee om alle initiatieven rondom COVID-19 in kaart te brengen!"}/>
                <meta property="twitter:image" content="https://helpdehelpers.nl/assets/images/metatag.png"/>
            </Head>
            {props.children}
        </div>
    )
}