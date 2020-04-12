const tableTransform = (data) => {
    if(!data.table) {
        throw new Error('Not match `leagueId` or `seasonId` on Table.')
    }
    const transformed = data.table.map(table => {
        const {
            goalsfor,
            goalsagainst,
            goalsdifference,
            ...otherProps
        } = table;

        return {
            goalsFor: goalsfor,
            goalsAgainst: goalsagainst,
            goalsDifference: goalsdifference,
            ...otherProps
        };
    });

    return transformed;

};

export default tableTransform;
