const Event = `
    type Event {
        id: ID!                             # idEvent
        name: String                        # strEvent
        altName: String                     # strEventAlternate
        filename: String                    # strFilename
        sportType: String                   # strSport
        season: String                      # strSeason
        description: String                 # strDescriptionEN
        round: Int                          # intRound
        spectators: Int                     # intSpectators
        eventDate: String                   # dateEvent
        eventTime: String                   # strTime
        result: String                      # strResult
        circuit: String                     # strCircuit
        country: String                     # strCountry
        city: String                        # strCity
        poster: String                      # strPoster
        fanart: String                      # strFanart
        thumb: String                       # strThumb
        banner: String                      # strBanner
        home: EventTeam
        away: EventTeam
        league: [League]
    }
`;

export default Event;
