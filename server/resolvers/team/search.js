import axios from 'axios';
import teamTransform from './TeamTransform';

const teamSearchResolver = async(_, args, ctx) => {
    let url;
    if (args.name) {
        url = `${ctx.baseUrl}searchteams.php?t=${args.name}`;
    } else if (args.leagueId) {
        url = `${ctx.baseUrl}lookup_all_teams.php?id=${args.leagueId}`;
    } else {
        ctx.errorHandler({
            message: 'Cannot search Team, name or leagueId not provided.',
            args,
            parent: _,
        });
        return;
    }

    const res = await axios.get(url);

    return teamTransform(res.data);
};

export default teamSearchResolver;
