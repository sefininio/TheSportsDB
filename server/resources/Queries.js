const Queries = `
    # This type specifies the entry points into our API.
    type Query {
        teamByName(name: String!): [Team]
        team(id: ID!): [Team]
        league(id: ID!): [League]
        player(id: ID!): [Player]
        event(id: ID!): [Event]
    }
`;

export default Queries;