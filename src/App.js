import React from "react";
import PropTypes from "prop-types";

// npm start

const foodILike = [
  {
    id: 1,
    name: "pho",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZzuLZxln8bbr6-njGfIVfgHaE3%26pid%3DApi&f=1",
    rating: 3.5,
  },
  {
    id: 2,
    name: "chicken",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.insight.co.kr%2Fstatic%2F2019%2F07%2F04%2F700%2F33eu5q9z4loz0c68e417.jpg&f=1&nofb=1",
    rating: 5,
  },
  {
    id: 3,
    name: "steak",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qsna5sBgZzaQnBJFGLuZygHaE8%26pid%3DApi&f=1",
    rating: 4.5,
  },
  {
    id: 4,
    name: "donkasu",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pmcJYNOsWHxC_rTrFhnyTwHaHa%26pid%3DApi&f=1",
    rating: 4,
  },
];

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

// key를 추가해줘야 에러가 안난다
function App() {
  return (
    <div>
      {foodILike.map((dish) => {
        return (
          <Food
            key={dish.id}
            name={dish.name}
            image={dish.image}
            rating={dish.rating}
          />
        );
      })}
    </div>
  );
}

// npm i prop-types

export default App;
