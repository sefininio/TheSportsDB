const Table = `
    type Table {
        name: String
        played: Int
        goalsFor: Int                               # goalsfor
        goalsAgainst: Int                           # goalsagainst
        goalsDifference: Int                        # goalsdifference
        win: Int
        draw: Int
        loss: Int
        total: Int
        team: [Team]
    }
`;

export default Table;
