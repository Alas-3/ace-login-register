import React, { useState } from "react";
import Buttons from "./Buttons";
import Card from "./Card";
import './CardsPage.css';

import icon1 from '../img/narutoicon.jpg';
import icon2 from '../img/ichigo4x.jpg';
import icon3 from '../img/luffy4x.jpg';

function CardsPage() {
  const [activeButton, setActiveButton] = useState(1);
  const [data, setData] = useState({
    title: "Naruto Uzumaki",
    image: icon1,
    description: "Naruto Uzumaki is a legendary ninja and the Seventh Hokage of the Hidden Leaf Village, known for his strength, optimism, and ability to inspire others. He has faced numerous challenges throughout his life, but has always persevered and trained tirelessly to become a skilled ninja. As an adult, he is still energetic and optimistic, and has mastered powerful techniques such as the Rasengan and Sage Mode. He is also a devoted husband and father, and a mentor to the next generation of ninja. Naruto's legacy as a ninja and a leader is one that will be remembered for generations to come.",
  });

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    switch (buttonNumber) {
      case 1:
        setData({
          title: "Naruto Uzumaki",
          image: icon1,
          description: "Naruto Uzumaki is a legendary ninja and the Seventh Hokage of the Hidden Leaf Village, known for his strength, optimism, and ability to inspire others. He has faced numerous challenges throughout his life, but has always persevered and trained tirelessly to become a skilled ninja. As an adult, he is still energetic and optimistic, and has mastered powerful techniques such as the Rasengan and Sage Mode. He is also a devoted husband and father, and a mentor to the next generation of ninja. Naruto's legacy as a ninja and a leader is one that will be remembered for generations to come.",
        });
        break;
      case 2:
        setData({
          title: "Ichigo Kurosaki",
          image: icon2,
          description: "Ichigo Kurosaki is the main protagonist of the manga and anime series Bleach. He is a legendary Soul Reaper with immense spiritual power and an unwavering determination to protect his loved ones and the innocent. Throughout the series, he gains new powers and forms, and plays a key role in the war between the Soul Reapers and the Quincy in the latest arc of the series. Despite his power, Ichigo remains humble and caring, always willing to put himself in danger to protect those around him.",
        });
        break;
      case 3:
        setData({
          title: "Monkey D. Luffy",
          image: icon3,
          description: "Luffy is the main character of the manga and anime series One Piece. He is a young, energetic pirate who is determined to become the King of the Pirates and find the legendary treasure known as the One Piece. Luffy possesses the power of the Gum-Gum Fruit, which allows him to stretch his body like rubber and unleash powerful attacks. He is known for his iconic straw hat and his carefree, optimistic personality. Luffy's unwavering determination and loyalty to his friends have inspired many, and his legacy as a pirate and ally is one that will be remembered for generations.",
        });
        break;
      default:
        setData({
          title: "Naruto Uzumaki",
          image: icon1,
          description: "Naruto Uzumaki is a legendary ninja and the Seventh Hokage of the Hidden Leaf Village, known for his strength, optimism, and ability to inspire others. He has faced numerous challenges throughout his life, but has always persevered and trained tirelessly to become a skilled ninja. As an adult, he is still energetic and optimistic, and has mastered powerful techniques such as the Rasengan and Sage Mode. He is also a devoted husband and father, and a mentor to the next generation of ninja. Naruto's legacy as a ninja and a leader is one that will be remembered for generations to come.",
        });
    }
  };

  return (
    <div className="CardsPage">
      <h1>Anime Characters</h1>
      <Buttons onClick={handleButtonClick} />
      <Card data={data} />
    </div>
  );
}

export default CardsPage;