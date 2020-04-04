import axios from 'axios';
import eventTransform, { eventTeamTransform } from './EventTransform';

const eventResolver = async(_, args, ctx) => {
    const url = `${ctx.baseUrl}lookupevent.php?id=${args.eventId}`;
    const res = await axios.get(url);

    return eventTransform(res.data.events);
};

export const eventTeamResolver = (event, type) => {
    return eventTeamTransform(event, type);
}

export default eventResolver;
