import { SwipeableDrawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
// import database from "../firebase.js";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Richard Martin",
      url: " https://hollywoodlife.com/wp-content/uploads/2019/05/famous-hunks-over-45-ricky-martin-2.jpg?w=800",
    },
    {
      name: "Henry Church",
      url: "https://pbs.twimg.com/media/ChVKg39UcAAIYp6.jpg ",
    },
    {
      name: "Peny lupan",
      url: "https://mn2s-content.s3.eu-west-2.amazonaws.com/wp-content/uploads/2021/02/18183851/Pen%C3%A9lope-Cruz.png ",
    },
  ]);

  // useEffect(() => {
  //   database
  //     .collection("people")
  //     .onSnapshot((snapshot) =>
  //       setPeople(snapshot.docs.map((doc) => doc.data()))
  //     );
  // }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
