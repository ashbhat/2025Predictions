import Head from 'next/head'
import styles from '../styles/predictions.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>2025 Predictions</title>
        <meta name="description" content="Predictions for the year 2025" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <img 
          src="/images/2025-header.jpg" 
          alt="2025 Predictions Header"
          className={styles.headerImage}
        />
        <div className={styles.content}>
          <div className={styles.prediction}>
            <div className={styles.monthHeader}>January</div>
            <p>AI continues to dominate headlines as new breakthroughs in multimodal models emerge. Major tech companies announce significant AI-first product updates.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>February</div>
            <p>Global climate initiatives gain momentum as extreme weather events increase. New international agreements on emissions reduction are proposed.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>March</div>
            <p>Breakthrough in quantum computing reaches headlines as a major tech company achieves quantum advantage in a practical application.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>April</div>
            <p>Space tourism sees its first commercial flight with regular citizens. New announcements about lunar missions capture public attention.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>May</div>
            <p>Revolutionary breakthrough in renewable energy storage technology announced. Major automotive companies accelerate their EV timelines.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>June</div>
            <p>Global cryptocurrency regulations begin to harmonize as major economies agree on common framework. New use cases for blockchain emerge.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>July</div>
            <p>Breakthrough in personalized medicine using AI leads to new treatment approaches. Healthcare sees increased adoption of AI diagnostic tools.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>August</div>
            <p>Major developments in augmented reality technology as new consumer-focused AR devices hit the market. Mixed reality becomes mainstream.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>September</div>
            <p>Significant advances in sustainable agriculture technology help address global food security concerns. Vertical farming adoption accelerates.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>October</div>
            <p>Breakthrough in fusion energy research announces major milestone. New timeline for commercial fusion power generation revealed.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>November</div>
            <p>Revolutionary developments in brain-computer interfaces lead to new medical applications. Ethics debates intensify around neurotechnology.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>December</div>
            <p>Major breakthrough in autonomous vehicle technology leads to expanded self-driving car services in major cities worldwide.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
