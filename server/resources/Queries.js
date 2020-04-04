const Queries = `
    # This type specifies the entry points into our API.
    type Query {
        teamSearch(name: String, leagueId: ID): [Team]
        team(id: ID!): [Team]
        league(id: ID!): [League]
        player(id: ID!): [Player]
        event(id: ID!): [Event]
        table(leagueId: ID!, seasonId: ID!): [Table]
        tableAllSeasons(leagueId: ID!): [Table]
    }
`;

export default Queries;