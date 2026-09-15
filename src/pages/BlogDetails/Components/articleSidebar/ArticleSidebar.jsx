import styles from './ArticleSidebar.module.css';

function ArticleSidebar () {
  return (
    <div className={styles.articleSidebar}>
      <div className={styles.asideCardPlain}>
        <p className={styles.asideTitle}>IN THIS ARTICLE</p>
        <div className={styles.tocList}>
          <div className={styles.tocItemActive}>
            <span className={styles.dot}></span>
            <p>The Cost of Silent Entropy</p>
          </div>
          <div>
            <p className={styles.tocItem}>Mapping the Decision Chain</p>
            <p className={styles.tocItem}>Structuring for Scale</p>
          </div>
        </div>
      </div>
      <div className={styles.asideCard}>
        <p className={styles.asideTitle}>NEWSLETTER</p>
        <h3 className={styles.newsletterHeading}>
          Ops thinking, once a week.
          No noise.
        </h3>
        <p className={styles.newsletterText}>
          Join 4,000+ engineers and product leaders receiving our
          weekly teardown of the best SaaS ops practices.
        </p>
        <label htmlFor="newsletter-email" className={styles.visuallyHidden}></label>
        <input className={styles.newsletterInput} id='newsletter-email' type="email" placeholder='work@email.com' required />
        <button className={styles.newsletterBtn}>Subsribe</button>
      </div>
    </div>
  );
}

export default ArticleSidebar;