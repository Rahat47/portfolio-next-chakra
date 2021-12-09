import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const MostStarredBar = ({ repoData }) => {
    const topStarred = repoData => {
        if (repoData.length > 0) {
            const LIMIT = 5;
            const sorted = repoData.sort(
                (a, b) => b.stargazers_count - a.stargazers_count
            );
            const filtered = sorted.filter(repo => !repo.fork);
            return filtered.slice(0, LIMIT);
        } else {
            return [];
        }
    };

    const data = topStarred(repoData).map(repo => ({
        name: repo.name,
        stars: repo.stargazers_count,
    }));

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='stars' fill='#28FFBF' />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MostStarredBar;
