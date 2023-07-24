import { useContext } from "react"
import TWSContext from "./TWSMapContext"

export default function useTWSMapContext() {
  const [twsElements, setTwsElements] = useContext(TWSContext);

  const addToTWS = (element) => {
    setTwsElements((prevTwsElements) => [...prevTwsElements, element]);
  };

  const removeFromTWS = (element) => {
    setTwsElements((prevTwsElements) =>
      prevTwsElements.filter((el) => el.key !== element.key)
    );
  };

  return { twsElements, addToTWS, removeFromTWS };
}
