import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "@/utils/database";

type Card = {
  id: string;
  question: string;
  fixedAnswer: string;
  questionPrompt: string;
  tags: string[];
  difficulty: number;
};

const CardList = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [randomCardSelected, setRandomCardSelected] = useState<Card | null>(
    null,
  );

  useEffect(() => {
    getDocs(collection(db, "cards")).then((snapshot) => {
      const cardsData = snapshot.docs.map((doc) => doc.data() as Card);
      setCards(cardsData);
    });
  }, []);

  const pickRandomCard = () => {
    // what if 1 million cards? 
    const randomIndex = Math.floor(Math.random() * cards.length);
    setRandomCardSelected(cards[randomIndex]);
  };

  return (
    <div className="flex flex-col py-20 md:py-32">
      <h2>CardList</h2>
      <button onClick={pickRandomCard}>Pick Random Card</button>

      {randomCardSelected && (
        <div className="bug">
          <h3>{randomCardSelected.question}</h3>
          <p>{randomCardSelected.fixedAnswer}</p>
          <p>{randomCardSelected.questionPrompt}</p>
          <p>{randomCardSelected.tags.join(", ")}</p>
          <p>{randomCardSelected.difficulty}</p>
        </div>
      )}

      {cards.map((card, index) => (
        <div key={index}>
          <h3>{card.question}</h3>
          <p>{card.fixedAnswer}</p>
          <p>{card.questionPrompt}</p>
          <p>{card.tags.join(", ")}</p>
          <p>{card.difficulty}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
