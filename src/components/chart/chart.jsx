import Chart from 'react-apexcharts';

const options = {
    labels: ["Expense", "Income"],
    colors: ["#FD5E53", "#213EBF"],
    chart: {
        width: "50px",
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ["#FD5E53", "#213EBF"],
    },
    tooltip: {
        enabled: true,
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000",
        },
    },
};

const ChartSummary = ({ expense = 100, income = 100 }) => {
    return (
        <Chart
            options={options}
            series={[income, expense]}
            type="pie"
            width={"100%"}
            height={"100%"}
        />
    )
};

export default ChartSummary;