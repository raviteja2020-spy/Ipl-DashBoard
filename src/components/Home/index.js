import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplList: formattedData, isLoading: false})
  }

  render() {
    const {iplList, isLoading} = this.state

    return (
      <div className="ipl-dashboard">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1>IPL DASHBOARD BY Ravi Teja</h1>
        </div>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-list">
            {iplList.map(eachTeamItem => (
              <TeamCard key={eachTeamItem.id} teamDetails={eachTeamItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
