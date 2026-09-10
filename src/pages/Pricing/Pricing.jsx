/**------------------------------------------------------------------------
 *                           Import files and libraries
 *------------------------------------------------------------------------**/
import './Pricing.css';
import PricingHeader from './headerComponent/PricingHeader';
import PriceDetails from './pricingConatiner/PriceContainer';
import Questions from '../../components/questionsComponent/Questions';
function Pricing() {
  return (
    <div className="pricing-page">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <PricingHeader />
        <PriceDetails />
        <Questions />
      </div>
    </div>
  );
}
export default Pricing;
