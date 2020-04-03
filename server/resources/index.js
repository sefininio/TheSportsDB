import League from './League';
import Social from './Social';
import Stadium from './Stadium';
import Team from './Team';
import Queries from './Queries';
import Mutations from './Mutations';

const typeDefs = `
    ${League},
    ${Social},
    ${Stadium},
    ${Team},
    ${Queries},
`;

export default typeDefs;