import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({title, stats}) => (   
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.statList}>
            {stats.map((stat) => (
                <li className={styles.item} key={stat.id} style={{ backgroundColor: `rgba( ${random()} , ${random()} , ${random()}` }}>
                    <span className="label">{stat.label}</span>
                    <span className={styles.percentage}>{stat.percentage}%</span>
                </li>)
            )}
        </ul>
      </section>
);

Statistics.propTypes = {
    stats: PropTypes.array.isRequired
};

function random() {
  return Math.floor(Math.random() * 256);
}


export default Statistics;