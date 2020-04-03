import leagueResolver from './league/retrieve';
import socialResolver from './social/retrieve';
import stadiumResolver from './stadium/retrieve';
import teamResolver from './team/retrieve';
import teamByNameResolver from './team/search';

const resolvers = {
    Query: {
        teamByName: teamByNameResolver,
        team: teamResolver,
        league: leagueResolver,
    },
    Team: {
        social: team => socialResolver(team),
        stadium: team => stadiumResolver(team),
        league: (team, args, ctx) => leagueResolver(team, { leagueId: team.idLeague }, ctx),
    },
    League: {
        social: league => socialResolver(league),
    }
};

export default resolvers;