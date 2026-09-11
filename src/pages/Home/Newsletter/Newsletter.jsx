import './Newsletter.css';
export default function Newsletter() {
  return (
    <div className="newsletter">
      <p className="newsletter-tag">Newsletter</p>
      <h3>Ops thinking, once a week. No noise.</h3>
      <p className="newsletter-description">
        Join 4,000+ engineers and product leaders receiving our weekly teardown
        of the best SaaS ops practices.
      </p>
      <div className="newsletter-input">
        <input type="email" placeholder="work@email.com" />
        <button className="newsletter-button">Subsribe</button>
      </div>

      <div className="circle-1"></div>
      <div className="circle-2"></div>

      <div className="circle-3"></div>
      <div className="circle-4"></div>
    </div>
  );
}
