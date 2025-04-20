import SubscriptionPrev from "../components/index/subscription";
import "./suscription-details.css";
import { subscriptions } from "../constants";

const DetailsList = ({ data }) => {
  return (
    <ul>
      {data.map((item, idx) => {
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
};

export default function SubscriptionsPage() {
  return (
    <div className="main-card">
      <h1>
        OUR <span className="accented">MEMBERSHIPS</span>
      </h1>
      <p>
        We offer flexible plans to suit every lifestyle, whether you&apos;re just
        getting started or ready to go all-in.
      </p>
      <div className="info-grid">
        {subscriptions.map((sub, index) => {
          return (
            <div key={`subscription_${index}`}>
              <SubscriptionPrev
                name={sub.name}
                price={sub.price}
                path={sub.path}
                link={sub.link}
                guest={sub.guest}
              />
              <div>
                <h3>Details</h3>
                <DetailsList data={sub.details} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
