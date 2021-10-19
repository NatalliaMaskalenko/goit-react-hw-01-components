import PropTypes from 'prop-types';
import s from'./Statistics.module.css';

import StatisticsItem from "../StatisticsItem/StatisticsItem";

export default function Statistics({title = 'Upload stats', stats}) {
    return (<section class="statistics">
        <h2 class="title">{title}</h2>
        <ul class="stat-list">
            {stats.map(el => (
                <StatisticsItem
                    key={el.id} 
                    label={el.label}
                    percentage={el.percentage}
                />))
    }
  </ul>
</section>)
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}

