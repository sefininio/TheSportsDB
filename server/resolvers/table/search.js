import axios from 'axios';
import tableTransform from './TableTransform';

const aggregate = async(args, ctx) => {
    if (args.leagueId && args.seasonId) {
        const url = `${ctx.baseUrl}lookuptable.php?l=${args.leagueId}&s=${args.seasonId}`;
        const res = await axios.get(url);
        return res;
    }

    // const leagueSeasons = await axios.get(
    //     `${ctx.baseUrl}search_all_seasons.php?id=${args.leagueId}`
    // );

    // const results = leagueSeasons.data.seasons.map( async(season) => {
    //     const table = await axios.get(
    //         `${ctx.baseUrl}lookuptable.php?l=${args.leagueId}&s=${season.strSeason}`
    //     );
    //     return table;
    // });

    // Promise.all(results).then(completed => {
    //     return completed.map(res => res.data.table);
    // });
}

const tableResolver = async(_, args, ctx) => {
    const res = await aggregate(args, ctx);
    return tableTransform(res.data);
};

export default tableResolver;
