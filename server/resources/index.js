import Event from './Event';
import EventTeam from './EventTeam';
import League from './League';
import Player from './Player';
import Social from './Social';
import Stadium from './Stadium';
import Table from './Table';
import Team from './Team';
import Queries from './Queries';
import Mutations from './Mutations';

const typeDefs = `
    ${Event},
    ${EventTeam},
    ${League},
    ${Player},
    ${Social},
    ${Stadium},
    ${Table},
    ${Team},
    ${Queries},
`;

export default typeDefs;