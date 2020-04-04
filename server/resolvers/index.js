import eventResolver, { eventTeamResolver } from './event/retrieve';
import EVENT_TYPE from './event/EventType';
import leagueResolver from './league/retrieve';
import playerResolver from './player/retrieve';
import socialResolver from './social/retrieve';
import stadiumResolver from './stadium/retrieve';
import teamResolver from './team/retrieve';
import teamByNameResolver from './team/search';

const resolvers = {
    Query: {
        teamByName: teamByNameResolver,
        team: teamResolver,
        league: leagueResolver,
        player: playerResolver,
        event: eventResolver,
    },
    Team: {
        social: team => socialResolver(team),
        stadium: team => stadiumResolver(team),
        league: (team, args, ctx) => leagueResolver(team, { leagueId: team.idLeague }, ctx),
    },
    League: {
        social: league => socialResolver(league),
    },
    Player: {
        social: player => socialResolver(player),
        team: (player, args, ctx) => teamResolver(player, { teamId: player.idTeam }, ctx),
    },
    Event: {
        league: (event, args, ctx) => leagueResolver(event, { leagueId: event.idLeague }, ctx),
        home: event => eventTeamResolver(event, EVENT_TYPE.HOME),
        away: event => eventTeamResolver(event, EVENT_TYPE.AWAY),
    }
};

export default resolvers;