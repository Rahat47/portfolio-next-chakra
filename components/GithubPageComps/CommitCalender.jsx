import { ResponsiveCalendar } from '@nivo/calendar';
import { useBreakpointValue } from '@chakra-ui/react';
const CommitCalender = ({ data }) => {
    return (
        <ResponsiveCalendar
            data={data}
            from='2021-02-01'
            to='2021-12-31'
            direction={useBreakpointValue({
                base: 'vertical',
                md: 'horizontal',
            })}
            renderWrapper
            theme={{
                textColor: '#fff',
                fontSize: '14px',
            }}
            emptyColor='#EAEAEA'
            // colors={['#009DAE', '#71DFE7', '#C2FFF9', '#FFE652']}
            colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
            margin={{ top: 40, right: 40, bottom: 80, left: 40 }}
            monthBorderColor='#F7F7F7'
            dayBorderWidth={2}
            dayBorderColor='#F7F7F7'
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'row',
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left',
                },
            ]}
            tooltip={({ day, value, color }) => (
                <div
                    style={{
                        backgroundColor: color,
                        padding: '4px 8px',
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'center',
                        color: '#fff',
                    }}
                >
                    <div>{day}</div>
                    <div>:</div>
                    <div style={{ marginLeft: 8 }}>({value})</div>
                </div>
            )}
        />
    );
};

export default CommitCalender;
