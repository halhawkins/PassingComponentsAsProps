import { useEffect, useState, useContext } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./MainList.css";
import TWSContext from "../TWSMapContext";

/**
 * 
 * task: when user clicks on a product in the list, it will copy the product to the saved list
 */

async function getList() {
    const results = await fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(data => setList(data))
    if (!results.ok) {
      throw new Error(results.statusText)
    }
    // const data = await results.json()
    return await results.json()
  }

export default function MainList(props) {
  const [twsElements, setTwsElements] = useContext(TWSContext)
  const [list, setList] = useState([])

  useEffect(() => {
    getList()
    .then((data) => {
      setList(data)
      console.log("data",data)
  })
    // console.log("data",data)
    // setList(data)
  },[])

  const handleProductClick = (e,item) => {
    console.log("item",item)
    const element = <ProductDetails key={item.id} item={item} onClick={(e) => handleProductClick(e,item)} />
    setTwsElements((prevTwsElements) => [...prevTwsElements, element])
  }

  console.log("list",list)

  return (
    <div className="main-list">
      {console.log("list type",list)}
      {list?.products?.length > 0 ? (list.products.map((item,index) => {
        console.log("item",item)
        return (
          <ProductDetails key={index} item={item} onClick={(e) => handleProductClick(e,item)} />
        )
      })): <></>}
    </div>
  );
}