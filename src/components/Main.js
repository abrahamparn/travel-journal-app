import React from "react";
import Card from "./Card";
import CardData from "./CardData";
export default function Main(){
    const cardData = CardData.map(data =>
        <Card data={data}/>

        )
    return(
        <main className="main">
            {cardData}
        </main>
    )
}