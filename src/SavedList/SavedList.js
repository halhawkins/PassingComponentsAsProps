import TWSContext from "../TWSMapContext"
import React, { useContext } from "react"

export default function SavedList(props) {
  const [twsElements] = useContext(TWSContext)
  return (
    <div className="saved-list">{twsElements}</div>
  )
}