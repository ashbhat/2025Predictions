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
        <meta property="og:image" content="https://2025predictions.com/images/2025-header.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://2025predictions.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Predicting 2025" />
        <meta name="twitter:description" content="Predictions for the year 2025" />
        <meta name="twitter:image" content="https://2025predictions.com/images/2025-header.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <img 
          src="/images/2025-header.jpg" 
          alt="2025 Predictions Header"
          className={styles.headerImage}
        />
        <h1 className={styles.mainTitle}>The Year of Intelligence</h1>
        <h2 className={styles.subtitle}>Predicting 2025</h2>
        <Timeline />
        <div className={styles.content}>
          <div className={styles.prediction}>
            <div className={styles.monthHeader}>January</div>
            <p>January brings significant political and technological changes: On January 3rd, the new Congress convenes, followed by a nationwide TikTok ban on January 19th, and DJT&apos;s inauguration on January 20th. The month also sees the first Formula E race in Mexico and major developments in the ongoing legal battle between Elon Musk and OpenAI.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>February</div>
            <p>February kicks off with the Grammy Awards on February 1st, followed by anticipated Super Bowl advertisements on February 9th. Later in the month, NASA astronauts Suni Williams and Butch Wilmore make their return to Earth aboard a SpaceX spacecraft, concluding their extended mission to the International Space Station.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>March</div>
            <p>The entertainment industry takes center stage as the Academy Awards ceremony unfolds on March 2nd, celebrating the year&apos;s finest achievements in cinema.</p>
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
            <p>June marks two significant events: The FIFA World Cup kicks off in the United States, bringing global football excitement, while in Paris, the historic Notre-Dame cathedral reopens its doors to tourists after years of restoration.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>July</div>
            <p>Scientists predict a peak of 115 sunspots in July, which could create spectacular auroras but also pose risks to global infrastructure, potentially causing outages in GPS systems, radio communications, and electrical grids.</p>
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
            <p>The gaming world anticipates a major milestone with the release of Grand Theft Auto 6, one of the most eagerly awaited video game releases in recent years.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>November</div>
            <p>Revolutionary developments in brain-computer interfaces lead to new medical applications. Ethics debates intensify around neurotechnology.</p>
          </div>

          <div className={styles.prediction}>
            <div className={styles.monthHeader}>December</div>
            <p>The year concludes with a cinematic spectacle as Avatar 3 arrives in theaters, continuing James Cameron&apos;s groundbreaking science fiction saga.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
