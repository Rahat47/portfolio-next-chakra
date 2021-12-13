import { ResponsiveLine } from '@nivo/line';

const MostStarredLine = ({ rawData }) => {
    const data = [];

    Object.keys(rawData)?.length > 0 &&
        data.push({
            id: 'Rahat47',
            color: 'hsl(209, 70%, 50%)',
            data: rawData.map(({ name, value, fill }) => ({
                x: name,
                y: value,
                color: fill,
            })),
        });

    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 100, bottom: 100, left: 50 }}
            curve='cardinal'
            pointSize={10}
            colors={{ scheme: 'purple_blue' }}
            useMesh={true}
            theme={{
                textColor: '#fff',
            }}
            // enablePointLabel
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: -40,
            }}
            tooltip={({ point }) => (
                <div
                    style={{
                        background: '#fff',
                        border: '1px solid #ccc',
                        padding: '10px',
                        fontSize: '12px',
                        color: '#000',
                    }}
                >
                    <div>
                        <strong>{point.data.x}</strong>
                    </div>
                    <div>{point.data.y} stars</div>
                </div>
            )}
            enableArea={true}
            enableGridX={false}
            enableGridY={false}
            motionConfig='wobbly'
        />
    );
};

export default MostStarredLine;
