import axios from 'axios';
import playerTransform from './PlayerTransform';

const playerResolver = async(_, args, ctx) => {
    const url = `${ctx.baseUrl}lookupplayer.php?id=${args.playerId}`;
    const res = await axios.get(url);

    return playerTransform(res.data.players);
};

export default playerResolver;
