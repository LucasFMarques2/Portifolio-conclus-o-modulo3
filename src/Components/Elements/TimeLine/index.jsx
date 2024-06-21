import styles from './TimeLine.module.css';

export function TimeLine({ events }) {
  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timelineYear}>{event.year}</div>
          <div className={styles.timelineContent}>{event.text}</div>
        </div>
      ))}
    </div>
  );
}