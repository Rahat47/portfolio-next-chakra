import { ResponsivePie } from '@nivo/pie';

const PieTopLang = ({ data }) => {
    return (
        <ResponsivePie
            margin={{ top: 40, right: 50, bottom: 80, left: 50 }}
            data={data}
            padAngle={1}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            arcLinkLabel={function (e) {
                return e.id + ' (' + e.value + ')';
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor='white'
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            // Make tooltip color black
            tooltip={function (e) {
                var t = e.datum;
                return (
                    <div
                        style={{
                            background: 'white',
                            color: 'black',
                            padding: '5px 10px',
                            borderRadius: '3px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                        }}
                    >
                        {t.id}
                        <br />
                        {t.value} Projects
                    </div>
                );
            }}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 80,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#fff',
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default PieTopLang;
