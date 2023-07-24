import TWSContext from "../TWSMapContext"
import useTWSContext from "../useTWSContext"
import "./SavedList.css"

export default function SavedList(props) {
  const { twsElements } = useTWSContext()

  return (
    <div className="saved-list">{twsElements}</div>
  )
}