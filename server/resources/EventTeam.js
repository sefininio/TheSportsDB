const EventTeam = `
    # home|away
    type EventTeam {
        id: ID!                             # idHomeTeam|idAwayTeam
        name: String                        # strHomeTeam|strAwayTeam
        score: Int                          # intHomeScore|intAwayScore
        goalDetails: String                 # strHomeGoalDetails|strAwayGoalDetails
        redCards: String                    # strHomeRedCards|strAwayRedCards
        yellowCards: String                 # strHomeYellowCards|strAwayYellowCards
        lineupGoalkeeper: String            # strHomeLineupGoalkeeper|strAwayLineupGoalkeeper
        lineupDefense: String               # strHomeLineupDefense|strAwayLineupDefense
        lineupMidfield: String              # strHomeLineupMidfield|strAwayLineupMidfield
        lineupForward: String               # strHomeLineupForward|strAwayLineupForward
        lineupSubstitutes: String           # strHomeLineupSubstitutes|strAwayLineupSubstitutes
        formation: String                   # strHomeFormation|strAwayFormation
        shots: Int                          # intHomeShots|intAwayShots
    }
`;

export default EventTeam;
