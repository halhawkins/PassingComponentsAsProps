import { useEffect, useState, useContext } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./MainList.css";
// import TWSContext from "../TWSMapContext";
import useTWSMapContext from "../useTWSContext";

/**
 * 
 * task: when user clicks on a product in the list, it will copy the product to the saved list
 */

async function getList() {
    const results = await fetch('https://dummyjson.com/products')
    if (!results.ok) {
      throw new Error(results.statusText)
    }

    return await results.json()
  }

export default function MainList(props) {
  // const [twsElements, setTwsElements] = useContext(TWSContext)
  const [list, setList] = useState([])

  const { addToTWS, removeFromTWS } = useTWSMapContext()

  useEffect(() => {
    getList()
    .then((data) => {
      setList(data)
  })
  },[])

  const handleProductClick = (e,item) => {
    const element = <ProductDetails key={item.id} item={item} onClick={(e) => handleRemoveProductClick(e,item)} />
    addToTWS(element)
  }

  const handleRemoveProductClick = (e,item) => {
      const element = <ProductDetails key={item.id} item={item} onClick={(e) => handleRemoveProductClick(e,item)} />
      removeFromTWS(element)
    }

  return (
    <div className="main-list">
      {list?.products?.length > 0 ? (list.products.map((item,index) => {
        return (
          <ProductDetails key={index} item={item} onClick={(e) => handleProductClick(e,item)} />
        )
      })): <></>}
    </div>
  );
}