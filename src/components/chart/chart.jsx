import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

const options = {
  labels: ['Income', 'Expense'],
  colors: ['#213EBF', '#FD5E53'],
  chart: {
    width: '50px',
  },
  states: {
    hover: {
      filter: {
        type: 'none',
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
    colors: ['#213EBF', '#FD5E53'],
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
    style: {
      fontSize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000000',
    },
  },
};

const ChartSummary = ({ income = 100, expense = 100 }) => (
  <Chart
    options={options}
    series={[income, expense]}
    type="pie"
    width="100%"
    height="100%"
  />
);

ChartSummary.propTypes = {
  income: PropTypes.number.isRequired,
  expense: PropTypes.number.isRequired,
};

export default ChartSummary;
