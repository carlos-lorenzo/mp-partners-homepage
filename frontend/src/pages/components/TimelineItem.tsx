import '../../style/timeline.css';

interface TimelineItemProps {
  date: string;
  title: string;
  children: React.ReactNode;
  side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, children, side }) => {
  return (
    <div className={`timeline-item timeline-item-${side}`}>
      <div className="timeline-item-content">
        <div className="timeline-header">
          <span className="timeline-date">{date}</span>
          <span className="timeline-circle" />
        </div>
        <h4 className="timeline-title">{title}</h4>
        <div className="timeline-description">{children}</div>
      </div>
    </div>
  );
};

export default TimelineItem;

