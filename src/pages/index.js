import Head from 'next/head'
import styles from '../styles/predictions.module.css'
import Timeline from '../components/Timeline'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Predicting 2025</title>
        <meta name="description" content="Predictions for the year 2025" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Predicting 2025" />
        <meta property="og:description" content="Predictions for the year 2025" />
        <meta property="og:image" content="https://predicting2025.com/images/2025-header.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://predicting2025.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Predicting 2025" />
        <meta name="twitter:description" content="Predictions for the year 2025" />
        <meta name="twitter:image" content="https://predicting2025.com/images/2025-header.jpg" />
        <meta name="twitter:site" content="@predicting2025" />
        <meta name="twitter:creator" content="@predicting2025" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <img 
          src="/images/2025-header.jpg" 
          alt="2025 Predictions Header"
          className={styles.headerImage}
        />
        <h1 className={styles.mainTitle}>Predicting 2025</h1>
        <h2 className={styles.subtitle}>Published January 1st, 2025</h2>
        <Timeline />
        <div className={styles.content}>
          <div className={styles.prediction}>
            <div className={styles.monthHeader}>January</div>
            <p>January brings significant political and technological changes: On January 3rd, the new Congress convenes, followed by a nationwide TikTok ban on January 19th, and DJT&apos;s inauguration on January 20th. The month also sees the first Formula E race in Mexico and major developments in the ongoing legal battle between Elon Musk and OpenAI.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>February</div>
            <p>February kicks off with the Grammy Awards on February 1st, followed by the Super Bowl with major advertisements that use generative AI. Later in the month, NASA astronauts Suni Williams and Butch Wilmore make their return to Earth aboard a SpaceX spacecraft, concluding their extended mission to the International Space Station.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>March</div>
            <p>The entertainment industry takes center stage as the Academy Awards ceremony unfolds on March 2nd, celebrating the year&apos;s finest achievements in cinema. In addition, SpaceX attempts a starship to starship refueling in low earth orbit in a major televised event.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>April</div>
            <p>Space tourism sees its first commercial flight with regular citizens. New announcements about lunar missions capture public attention.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>May</div>
            <p>May brings celestial spectacle with a total lunar eclipse on the 14th. The month also sees high-profile legal proceedings with the commencement of the Diddy Trial.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>June</div>
            <p>In June, the FIFA Club World Cup is held in the United States. In addition, WWDC is held with the announcment of new advances in AI. The Supreme Court also releases their major decisions.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>July</div>
            <p>In July, the sun is noticibly more active with more sunspots that usual. This is experienced in Earth with auroras being seen in parts of the world that otherwise would not.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>August</div>
            <p>Major developments in augmented reality technology as new consumer-focused AR devices hit the market. Mixed reality becomes mainstream.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>September</div>
            <p>Zuckerburg takes the stage at Meta Connect to deliver a keynote that unveils new AR glasses. These glasses show off a display and is available for consumers to purchase.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>October</div>
            <p>GTA 6 is released after a long wait. Internet culture picks up on the video game by creating many memes.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>November</div>
            <p>Revolutionary developments in brain-computer interfaces lead to new medical applications. Ethics debates intensify around artificial intelligence as agents create a more direct threat to existing knowledge work jobs.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>December</div>
            <p>The year concludes with a cinematic spectacle as Avatar 3 arrives in theaters, continuing James Cameron&apos;s science fiction saga.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
