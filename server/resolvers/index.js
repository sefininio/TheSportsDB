import eventResolver, { eventTeamResolver } from './event/retrieve';
import EVENT_TYPE from './event/EventType';
import leagueResolver from './league/retrieve';
import playerResolver from './player/retrieve';
import socialResolver from './social/retrieve';
import stadiumResolver from './stadium/retrieve';
import tableResolver from './table/search';
import teamResolver from './team/retrieve';
import teamSearchResolver from './team/search';

const resolvers = {
    Query: {
        teamSearch: teamSearchResolver,
        team: teamResolver,
        league: leagueResolver,
        player: playerResolver,
        event: eventResolver,
        table: tableResolver,
        tableAllSeasons: tableResolver,
    },
    Team: {
        social: team => socialResolver(team),
        stadium: team => stadiumResolver(team),
        league: (team, args, ctx) => leagueResolver(team, { id: team.idLeague }, ctx),
    },
    League: {
        social: league => socialResolver(league),
    },
    Player: {
        social: player => socialResolver(player),
        team: (player, args, ctx) => teamResolver(player, { id: player.idTeam }, ctx),
    },
    Event: {
        league: (event, args, ctx) => leagueResolver(event, { id: event.idLeague }, ctx),
        home: event => eventTeamResolver(event, EVENT_TYPE.HOME),
        away: event => eventTeamResolver(event, EVENT_TYPE.AWAY),
    },
    Table: {
        team: (table, args, ctx) => teamResolver(table, { id: table.teamid }, ctx),
    }
};

export default resolvers;