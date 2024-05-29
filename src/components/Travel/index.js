import {Component} from 'react'
import Loader from 'react-loader-spinner'
import DestinationItem from '../DestinationItem'
import './index.css'

class Travel extends Component {
  state = {isLoading: true, destinationsData: []}

  componentDidMount = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const fetchedData = await response.json()
    const updatedData = fetchedData.packages.map(data => ({
      id: data.id,
      name: data.name,
      imageUrl: data.image_url,
      description: data.description,
    }))
    this.setState({destinationsData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, destinationsData} = this.state
    return (
      <div className="app-container">
        <h1 className="main-heading">Travel Guide</h1>
        <div className="results-container">
          {isLoading ? (
            <div data-testid="loader" className="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="destinations-list">
              {destinationsData.map(destination => (
                <DestinationItem
                  destination={destination}
                  key={destination.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Travel
