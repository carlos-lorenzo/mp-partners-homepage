import TimelineItem from './components/TimelineItem';
import '../style/about.css';
import '../style/timeline.css';

export default function About() {
    return (
        <div id="about-page">
            <h1 id="about-title">Our Journey</h1>
            <h2 id="about-subtitle">From Foundation to Future</h2>
            <div className="timeline">
                <TimelineItem date="September 2025" title="Founded" side="left">
                    <p>MP Partners was founded by Bocconi University students <a href='https://www.linkedin.com/in/alnicolau/' target='_blank'>Alvaro Nicolau</a> and <a href='https://www.linkedin.com/in/antonio-di-paolo/' target='_blank'>Antonio Di Paolo</a> with the goal of supporting companies, start-ups, and alternative investment operators, particularly within the sports, media, and innovation industries, in developing strategic and growth-oriented projects.</p>
                </TimelineItem>
                <TimelineItem date="Present" title="Our Impact" side="right">
                    <p>As part of our track record, we have already launched collaborations in the sports industry, including a project developed with Open Field Advisory, where we supported the firm in identifying Italian companies interested in partnerships with American sports teams (NFL), as well as potential collaborations for related events in Italy and the U.S., contributing to market research, investor relations, and deal execution.</p>
                </TimelineItem>
                <TimelineItem date="Future" title="Our Future" side="left">
                    <p>We are currently finalizing contracts with venture capital funds and developing further collaborations with start-ups to expand our network and strengthen our investment-readiness ecosystem.</p>
                </TimelineItem>
            </div>
        </div>
    );
}

