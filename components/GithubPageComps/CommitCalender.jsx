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
            emptyColor='#161b22'
            // colors={['#009DAE', '#71DFE7', '#C2FFF9', '#FFE652']}
            colors={['#11663c', '#01863f', '#2fc750', '#61e777']}
            margin={{ top: 40, right: 40, bottom: 80, left: 40 }}
            monthBorderColor='transparent'
            dayBorderWidth={2}
            dayBorderColor='#1b1f230f'
            daySpacing={5}
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
