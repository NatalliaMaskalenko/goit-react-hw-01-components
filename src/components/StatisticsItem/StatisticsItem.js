import PropTypes from 'prop-types';

export default function StatisticsItem({ label, percentage }) {
    return (<li class="item" >
        <span class="label">{label}</span>
        <span class="percentage">{percentage}%</span>
    </li>)
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}


