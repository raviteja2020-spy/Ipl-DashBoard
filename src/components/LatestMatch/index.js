import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-main-card">
      <div className="latest-match-inner-card">
        <div className="latest-match-details">
          <p className="compete-team-name">{competingTeam}</p>
          <p className="match-data">{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="compete-team-logo"
        />
      </div>
      <hr className="line" />
      <div className="latest-match-inner-card-2">
        <div className="latest-match-innings-details">
          <p className="latest-match-inner-details">First Innings</p>
          <p className="latest-match-inner-details">{firstInnings}</p>
          <p className="latest-match-inner-details">Second Innings</p>
          <p className="latest-match-inner-details">{secondInnings}</p>
          <p className="latest-match-inner-details">Man of the Match</p>
          <p className="latest-match-inner-details">{manOfTheMatch}</p>
          <p className="latest-match-inner-details">Umpires</p>
          <p className="latest-match-inner-details">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
