const leagueTransform = (data) => {
    const transformed = data.map(league => {
        const {
            idLeague,
            strSport,
            strLeague,
            strLeagueAlternate,
            strDivision,
            idCup,
            strCurrentSeason,
            intFormedYear,
            dateFirstEvent,
            strGender,
            strCountry,
            strDescriptionEN,
            strBadge,
            strBanner,
            strLogo,
            strPoster,
            strTrophy,
            strNaming,
            ...otherProps
        } = league;

        return {
            id: idLeague,
            name: strLeague,
            altName: strLeagueAlternate,
            sportType: strSport,
            division: strDivision,
            cupId: idCup,
            currentSeason: strCurrentSeason,
            formedYear: intFormedYear,
            firstEvent: dateFirstEvent,
            gender: strGender,
            country: strCountry,
            description: strDescriptionEN,
            badgeImg: strBadge,
            bannerImg: strBanner,
            logoImg: strLogo,
            posterImg: strPoster,
            trophyImg: strTrophy,
            naming: strNaming,
            ...otherProps
        };
    });

    return transformed;
};

export default leagueTransform;
