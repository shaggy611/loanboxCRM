import './style.scss';
import 'normalize.css';
import './style_mobile.scss';
import { Chart } from 'chart.js/auto';
import Highcharts from 'highcharts';
import { circliful } from 'js-plugin-circliful';
import ApexCharts from 'apexcharts'

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
const linedChart = document.querySelector('#lined-chart')
const cpaLinedChartPurple = document.querySelector('#cpa-lined-chart-purple')
const cpaLinedChartBlue = document.querySelector('#cpa-lined-chart-blue')
const responsesChartDonut = document.querySelector('#responses_chart_donut')
const paymentsChartDonut = document.querySelector('#payments_chart_donut')
const linedChartAnalyst = document.querySelector('#lined-chart-analyst')
const goalsChartBlue = document.querySelector('#goals_chart_blue')
const goalsChartPurple = document.querySelector('#goals_chart_purple')
const circleStatus = document.querySelector('#circle-status')
const overdueSectionChart = document.querySelector('#overdue-section-chart')

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

    if (linedChart) {
        const a = Highcharts.chart('lined-chart', {
            chart: {
                type: 'spline',
                height: 347,
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
    }

    if (linedChartAnalyst) {
        const a = Highcharts.chart(linedChartAnalyst, {
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
                    pointInterval: 31 * 24 * 3600 * 1000,
                    pointStart: Date.UTC(2022, 0, 1)
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
                data: [202, 228, 232, 243, 254, 271, 277, 304, 321, 329, 341, 349, 352, 353, 368, 369, 373, 385, 391, 394],
                color: 'rgba(52, 122, 226, 1)',
                marker: {
                    radius: 4,
                    symbol: 'circle'
                }

            }, {
                name: 'Payout',
                lineWidth: 2,
                data: [414, 419, 434, 439, 449, 453, 465, 469, 489, 490, 512, 521, 542, 547, 558, 567, 571, 589, 593, 598],
                color: 'rgba(255, 149, 0, 1)',
                marker: {
                    radius: 4
                }
            }, {
                name: 'Margin',
                lineWidth: 2,
                data: [600, 611, 621, 622, 626, 634, 646, 660, 661, 665, 666, 667, 695, 713, 714, 724, 751, 760, 774, 777],
                color: '#7367F0',
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
    }

    if (goalsChartBlue) {
        circliful.newCircle({
            percent: 80,
            id: 'goals_chart_blue',
            type: 'simple',
            text: '$10,000',
            strokeLinecap: "round",
            noPercentageSign: false,
            backgroundCircleWidth: 15,
            foregroundCircleWidth: 15,
            animationStep: 3,
            progressColors: [
                { percent: 1, color: '#467FFF' },
                { percent: 80, color: '#467FFF' }
            ]
        });
    }

    if (goalsChartPurple) {
        circliful.newCircle({
            percent: 40,
            id: 'goals_chart_purple',
            type: 'simple',
            text: '$10,000',
            strokeLinecap: "round",
            noPercentageSign: false,
            backgroundCircleWidth: 15,
            foregroundCircleWidth: 15,
            animationStep: 3,
            progressColors: [
                { percent: 1, color: '#7367F0' },
                { percent: 40, color: '#7367F0' }
            ]
        });
    }

    if (circleStatus) {
        circliful.newCircle({
            percent: 50,
            id: 'circle-status',
            type: 'simple',
        });
    }


    if (cpaLinedChartPurple) {
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
                //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    overflow: 'justify'
                },
                type: 'datetime'
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
                crosshairs: {
                    width: 12,
                    color: 'rgba(114, 103, 240, 0.299)',
                }
            },
            plotOptions: {
                spline: {
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    },
                    pointInterval: 31 * 24 * 3600 * 1000,
                    pointStart: Date.UTC(2022, 0, 1)
                },
                shadow: true,
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '',
                lineWidth: 4,
                data: [101, 105, 109, 111, 125, 152, 156, 169, 185, 243, 254, 264, 270, 272, 280, 287, 337, 373, 387, 415, 428, 434, 435, 522, 536, 567, 583, 586, 624, 632, 656, 673, 708, 747, 753, 787, 796, 812, 813, 829, 832, 846, 909, 913, 930, 948, 952, 969, 979, 994],
                color: '#7367F0',
                marker: {
                    radius: 0,
                    symbol: 'circle'
                },
                shadow: {
                    color: '#7367F0',
                    width: 50,
                    opacity: 2,
                    offsetX: 0,
                    offsetY: 40
                }

            }],
            navigation: {
                menuItemStyle: {
                    fontSize: '12px'
                }
            }
        });
    }

    if (cpaLinedChartBlue) {
        const b = Highcharts.chart('cpa-lined-chart-blue', {
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
                //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    overflow: 'justify'
                },
                type: 'datetime'
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
                crosshairs: {
                    width: 12,
                    color: 'rgba(70, 127, 255, 0.24)',
                }
            },
            plotOptions: {
                spline: {
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    },
                    pointInterval: 31 * 24 * 3600 * 1000,
                    pointStart: Date.UTC(2022, 0, 1)
                },
                shadow: true,
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '',
                lineWidth: 4,
                data: [70, 67, 82, 28, 25, 62, 26, 49, 68, 36, 22, 52],
                color: '#467FFF',
                marker: {
                    radius: 0,
                    symbol: 'circle'
                },
                shadow: {
                    color: '#467FFF',
                    width: 100,
                    opacity: 2,
                    offsetX: 0,
                    offsetY: 80
                }

            }],
            navigation: {
                menuItemStyle: {
                    fontSize: '12px'
                }
            }
        });
    }

    if (responsesChartDonut) {
        new Chart(
            responsesChartDonut,

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
                        },
                        tooltip: {
                            usePointStyle: true,
                            callbacks: {
                                labelPointStyle: function (context) {
                                    return {
                                        pointStyle: 'dash',
                                        rotation: 0,
                                        width: 0
                                    };
                                }
                            }
                        }
                    }
                }
            }
        );
    }

    if (paymentsChartDonut) {
        new Chart(
            paymentsChartDonut,

            {
                type: 'doughnut',
                data: {
                    labels: ['No activity after completed loan 7 days', 'No activity after completed loan 7 days', 'No activity after completed loan 7 days', 'No activity after completed loan 7 days', 'No activity after completed loan 7 days'],
                    datasets: [
                        {
                            labels: 'Payments',
                            data: [1896, 256, 180, 903, 129],
                            backgroundColor: [
                                'rgba(70, 127, 255, 0.4528)'
                            ],
                            hoverOffset: 1,
                            borderJoinStyle: 'round',
                            borderWidth: 7,
                            hoverBackgroundColor: '#467FFF',
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
                        },
                        tooltip: {
                            usePointStyle: true,
                            callbacks: {
                                labelPointStyle: function (context) {
                                    return {
                                        pointStyle: 'dash',
                                        rotation: 0,
                                        width: 0
                                    };
                                }
                            }
                        }
                    }
                }
            }
        );
    }

    if (overdueSectionChart) {
        const prices = [721600, 289711, 431889]
        const sum = prices.reduce((sum, value) => sum + value, 0)
        const series = prices.map(item => (item * 100 / sum))

        const options = {
            series: series,
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                            show: false,
                        },
                        value: {
                            fontSize: '16px',
                            title: '',
                            formatter: function (val) {
                                return `$ ${((val * sum) / 100).toLocaleString()}`
                            }
                        },
                        total: {
                            show: true,
                            fontSize: '14px',
                            label: 'Total',
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return `$${sum.toLocaleString()}`
                            }
                        }
                    },
                    hollow: {
                        size: '40%',
                    }
                }
            },
            stroke: {
                lineCap: 'round'
            },
            colors: ['#53389E', '#7F56D9', '#B692F6'],
            labels: ['Payout: $721,600', 'Returned: $289,711', 'In progress: $431,889'],
            legend: {
                show: true,
                showForSingleSeries: false,
                showForNullSeries: true,
                showForZeroSeries: true,
                position: 'right',
                horizontalAlign: 'center',
                verticalAlign: 'bottom',
                floating: false,
                fontSize: '14px',
                fontFamily: '',
                fontWeight: 400,
                formatter: undefined,
                inverseOrder: false,
                width: undefined,
                height: undefined,
                tooltipHoverFormatter: undefined,
                customLegendItems: [],
                offsetX: 0,
                offsetY: 0,
                labels: {
                    colors: undefined,
                    useSeriesColors: false
                },
                markers: {
                    width: 12,
                    height: 12,
                    strokeWidth: 0,
                    strokeColor: '#fff',
                    fillColors: undefined,
                    radius: 12,
                    customHTML: undefined,
                    onClick: undefined,
                    offsetX: 0,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 5,
                    vertical: 3
                },
                onItemClick: {
                    toggleDataSeries: true
                },
                onItemHover: {
                    highlightDataSeries: true
                },
            },
            responsive: [{
                breakpoint: 992,
                options: {
                    chart: {
                        width: 350,
                        height: 450
                    },
                    legend: {
                        position: 'bottom',
                        fontSize: '10px',
                    }
                },
            }]
        };

        const chart = new ApexCharts(overdueSectionChart, options)
        chart.render()
    }

})

