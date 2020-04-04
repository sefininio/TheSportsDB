import eventTransform, { eventTeamTransform } from './EventTransform';
import createRetrieveResolver, { API_ENDPOINTS } from '../CreateRetrieveResolver';

const resolver = createRetrieveResolver({
    endpoint: API_ENDPOINTS.EVENT,
    transform: eventTransform,
});

export const eventTeamResolver = (event, type) => {
    return eventTeamTransform(event, type);
}

export default resolver;
