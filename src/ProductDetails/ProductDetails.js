import './ProductDetails.css'
export default function ProductDetails(props) {
  console.log(props)
  return (
    <div className="product-container">
      <img src={props.item.images[0]} alt={props.item.name} style={{width: "inherit", height: "auto"}} />
      <h5>{props.item.description}</h5>
    </div>
  )
}