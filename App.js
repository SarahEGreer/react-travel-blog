import React from "react"
import Card from "./Card"
import Nav from "./Nav"
import Footer from "./Footer"
import data from "./data"


export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                title={item.title}
                location={item.location}
                url={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                img={item.imageUrl}
                alt={item.imageAltText}
            />
        )
    })
    return (
        <div>
            <Nav />
            <div className="container">
                {cards}
            </div>
            <Footer />
        </div>
    )
}

