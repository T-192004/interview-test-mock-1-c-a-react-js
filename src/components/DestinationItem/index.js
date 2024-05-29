import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {name, description, imageUrl} = destination
  return (
    <li className="list-item">
      <img className="destination-img" src={imageUrl} alt={name} />
      <div className="list-content">
        <h1 className="list-title">{name}</h1>
        <p className="list-desc">{description}</p>
      </div>
    </li>
  )
}

export default DestinationItem
