import './style.scss';
import 'normalize.css';
import './style_mobile.scss';
import { Chart } from 'chart.js/auto';
import Highcharts from 'highcharts';

const toggleButton = document.querySelector('#menu-button-toggler button');
const appMenu = document.querySelector('.menu');
const menuBlurFilter = document.querySelector('.menu-blur-filter')

const toggleMenu = () => {
    appMenu.classList.toggle('show-menu')
    menuBlurFilter.classList.toggle('show')
}

toggleButton.addEventListener('click', toggleMenu)

toggleButton.onblur = function () {
    appMenu.classList.toggle('show-menu')
    menuBlurFilter.classList.toggle('show')
}

// ======================================================
const chartDonut = document.querySelector('#chart_donut')

document.addEventListener('DOMContentLoaded', () => {
    // Donut Chart
    if (chartDonut) {
        new Chart(
            chartDonut,

            {
                type: 'doughnut',
                data: {
                    labels: ['Item-1', 'Item-2', 'Item-3', 'Item-4', 'Item-5'],
                    datasets: [
                        {
                            label: 'Loan body repayment',
                            data: [1239132, 256413, 180345, 90345, 129825],
                            backgroundColor: [
                                'rgba(176, 169, 255, 0.49)'
                            ],
                            hoverOffset: 1,
                            borderJoinStyle: 'round',
                            borderWidth: 7,
                            hoverBackgroundColor: '#7367F0',
                            borderColor: 'white',
                            borderRadius: 15,
                            hoverBorderColor: 'transparent',
                            rotation: -50
                        }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            }
        );
    }
    // End Donut Chart

    const a = Highcharts.chart('lined-chart', {
        chart: {
            type: 'spline',
            scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1,
            }
        },
        title: {
            text: '',
            align: 'left'
        },
        subtitle: {
            text: '',
            align: 'left'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            minorGridLineWidth: 0,
            gridLineWidth: 1,
            alternateGridColor: '',

        },
        tooltip: {
            valueSuffix: '',
            crosshairs: true
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 2
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 3600000, // one hour
                pointStart: Date.UTC(2022, 5, 13, 0, 0, 0)
            },
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            symbolWidth: 12,
            margin: 30,
            marker: {
                radius: 4,
                symbol: 'circle'
            }
        },
        series: [{
            name: 'Payment',
            lineWidth: 2,
            data: [70, 67, 82, 28, 25, 62, 60, 87, 27, 80, 24, 26, 49, 68, 36, 22, 52, 90],
            color: '#7367F0',
            marker: {
                radius: 4,
                symbol: 'circle'
            }

        }, {
            name: 'Payout',
            lineWidth: 2,
            data: [73, 40, 41, 34, 77, 76, 52, 33, 67, 88, 68, 32, 22, 62, 25, 29, 45, 21],
            color: 'rgba(254, 114, 8, 0.84)',
            marker: {
                radius: 4
            }
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });

    // Progress chart
    // let chartProgress_1 = document.querySelector("#goals_chart_blue");
    // if (chartProgress_1) {
    //     let myChartCircle_1 = new Chart(chartProgress_1, {
    //         type: 'doughnut',
    //         data: {
    //             labels: ["Remain", 'null'],
    //             datasets: [{
    //                 label: "Soft plan",
    //                 backgroundColor: ["#5283ff"],
    //                 data: [68, 48]
    //             }]
    //         },
    //         plugins: [{
    //             beforeDraw: function (chart) {
    //                 let width = chart.chart.width,
    //                     height = chart.chart.height,
    //                     ctx = chart.chart.ctx;

    //                 ctx.restore();
    //                 let fontSize = (height / 150).toFixed(2);
    //                 ctx.font = fontSize + "em sans-serif";
    //                 ctx.fillStyle = "#467FFF";
    //                 ctx.textBaseline = "middle";

    //                 let text = "$10,000",
    //                     textX = Math.round((width - ctx.measureText(text).width) / 2),
    //                     textY = height / 2;

    //                 ctx.fillText(text, textX, textY);
    //                 ctx.save();
    //             }
    //         }],
    //         options: {
    //             legend: {
    //                 display: false,
    //             },
    //             responsive: true,
    //             maintainAspectRatio: false,
    //             cutoutPercentage: 60
    //         }

    //     });
    // }
    // // =========================================
    // let chartProgress_2 = document.querySelector("#goals_chart_purple");
    // if (chartProgress_2) {
    //     var myChartCircle_2 = new Chart(chartProgress_2, {
    //         type: 'doughnut',
    //         data: {
    //             labels: ["Remain", 'null'],
    //             datasets: [{
    //                 label: "Soft plan",
    //                 backgroundColor: ["#5283ff"],
    //                 data: [68, 48]
    //             }]
    //         },
    //         plugins: [{
    //             beforeDraw: function (chart) {
    //                 let width = chart.chart.width,
    //                     height = chart.chart.height,
    //                     ctx = chart.chart.ctx;

    //                 ctx.restore();
    //                 let fontSize = (height / 150).toFixed(2);
    //                 ctx.font = fontSize + "em sans-serif";
    //                 ctx.fillStyle = "#467FFF";
    //                 ctx.textBaseline = "middle";

    //                 let text = "$10,000",
    //                     textX = Math.round((width - ctx.measureText(text).width) / 2),
    //                     textY = height / 2;

    //                 ctx.fillText(text, textX, textY);
    //                 ctx.save();
    //             }
    //         }],
    //         options: {
    //             legend: {
    //                 display: false,
    //             },
    //             responsive: true,
    //             maintainAspectRatio: false,
    //             cutoutPercentage: 60
    //         }

    //     });


    // }
    // End progress chart




    const b = Highcharts.chart('cpa-lined-chart-purple', {
        chart: {
            type: 'spline',
            scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1,
            }
        },
        title: {
            text: '',
            align: 'left'
        },
        subtitle: {
            text: '',
            align: 'left'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            minorGridLineWidth: 0,
            gridLineWidth: 1,
            alternateGridColor: '',

        },
        tooltip: {
            valueSuffix: '',
            crosshairs: true
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 2
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 3600000, // one hour
                pointStart: Date.UTC(2022, 5, 13, 0, 0, 0)
            },
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            symbolWidth: 12,
            margin: 30,
            marker: {
                radius: 4,
                symbol: 'circle'
            }
        },
        series: [{
            name: 'Payment',
            lineWidth: 2,
            data: [70, 67, 82, 28, 25, 62, 60, 87, 27, 80, 24, 26, 49, 68, 36, 22, 52, 90],
            color: '#7367F0',
            marker: {
                radius: 4,
                symbol: 'circle'
            }

        }, {
            name: 'Payout',
            lineWidth: 2,
            data: [73, 40, 41, 34, 77, 76, 52, 33, 67, 88, 68, 32, 22, 62, 25, 29, 45, 21],
            color: 'rgba(254, 114, 8, 0.84)',
            marker: {
                radius: 4
            }
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });

})

