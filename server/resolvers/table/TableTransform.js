const tableTransform = (data) => {
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
