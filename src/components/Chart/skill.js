import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts'

const SkillChart = (props) => {

    const defaultOptions = {
        series: [{
            name: '2020',
            data: props.value,
        }],
        options: {
            chart: {
                height: 50,
                type: 'radar',
                foreColor: '#282c35',
                fontFamily: 'Poppins, sans-serif',
                toolbar: {
                    show: false
                },
                animations: {
                    speed: 3500,
                },
            },

            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val + "%"
                    },
                }
            },
            dataLabels: {
                enabled: true,
                tooltip: {
                    enabled: true
                },
                formatter: function (val) {
                    return val + "%"
                },
            },
            title: {
                text: props.title,
                align: 'center',
                offsetY: 20,
            },
            xaxis: {
                categories: props.data
            },
            yaxis: {
                show: false,
            },
            colors: ['#7706D8'],
        },

    }

    const [state, setStateptions] = useState(defaultOptions)

    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="radar" height={350} />
        </div>
    );
}

export default SkillChart;