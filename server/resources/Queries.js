const Queries = `
    # This type specifies the entry points into our API.
    type Query {
        teamByName(name: String!): [Team]
        team(teamId: ID!): [Team]
        league(leagueId: ID!): [League]
        player(playerId: ID!): [Player]
    }
`;

export default Queries;