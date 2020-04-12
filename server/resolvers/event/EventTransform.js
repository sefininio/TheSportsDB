import EVENT_TYPE from './EventType';

const eventTransform = (data) => {
    if(!data.events) {
        throw new Error('Not match `id` on Event.')
    }
    const transformed = data.events.map(event => {
        const {
            idEvent,
            strEvent,
            strEventAlternate,
            strFilename,
            strSport,
            strSeason,
            strDescriptionEN,
            intRound,
            intSpectators,
            dateEvent,
            strTime,
            strResult,
            strCircuit,
            strCountry,
            strCity,
            strPoster,
            strFanart,
            strThumb,
            strBanner,
            ...otherProps
        } = event;

        return {
            id: idEvent,
            name: strEvent,
            altName: strEventAlternate,
            filename: strFilename,
            sportType: strSport,
            season: strSeason,
            description: strDescriptionEN,
            round: intRound,
            spectators: intSpectators,
            eventDate: dateEvent,
            eventTime: strTime,
            result: strResult,
            circuit: strCircuit,
            country: strCountry,
            city: strCity,
            poster: strPoster,
            fanart: strFilename,
            thumb: strThumb,
            banner: strBanner,
            ...otherProps
        };
    });

    return transformed;
};

export const eventTeamTransform = (event, type) => {
    const isHome = type === EVENT_TYPE.HOME;

    return {
        id: isHome ? event.idHomeTeam : event.idAwayTeam,
        name: isHome ? event.strHomeTeam : event.strAwayTeam,
        score: isHome ? event.intHomeScore : event.intAwayScore,
        goalDetails: isHome ? event.strHomeGoalDetails : event.strAwayGoalDetails,
        redCards: isHome ? event.strHomeRedCards : event.strAwayRedCards,
        yellowCards: isHome ? event.strHomeYellowCards : event.strAwayYellowCards,
        lineupGoalkeeper: isHome ? event.strHomeLineupGoalkeeper : event.strAwayLineupGoalkeeper,
        lineupDefense: isHome ? event.strHomeLineupDefense : event.strAwayLineupDefense,
        lineupMidfield: isHome ? event.strHomeLineupMidfield : event.strAwayLineupMidfield,
        lineupForward: isHome ? event.strHomeLineupForward : event.strAwayLineupForward,
        lineupSubstitutes: isHome ? event.strHomeLineupSubstitutes : event.strAwayLineupSubstitutes,
        formation: isHome ? event.strHomeFormation : event.strAwayFormation,
        shots: isHome ? event.intHomeShots : event.intAwayShots,
    }
}


export default eventTransform;
