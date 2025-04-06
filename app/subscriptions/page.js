import SubscriptionPrev from "../components/index/subscription";
import "./suscription-details.css";

const DetailsList = ({ data }) => {
  return (
    <ul>
      {data.map((item, idx) => {
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
};

const basicDetails = [
  "24/7 gym access",
  "Full access to equipment and cardio machines",
  "Locker rooms with showers",
];
const vipDetails = [
  "VIP + 2025 VIP + membership",
  "24/7 access",
  "Racquetball access",
  "Wallyball access",
  "Tanning",
  "Guest privileges",
];
const basicPlusDetails = [
  "All perks from the basic subscription",
  "Club Access during staffed hours",
];
const guestDetails = [
    "All perks from the VIP+ subscription",
    "24h Guest Club Access"
  ];

export default function SubscriptionsPage() {
  return (
    <div className="main-card">
      <h1>OUR <span className="accented">SUBSCRIPTIONS</span></h1>
      <p>We offer flexible plans to suit every lifestyle, whether you're just getting started or ready to go all-in.</p>
      <div className="info-grid">
        <div>
          <SubscriptionPrev
            name="Basic"
            price="15"
            path="gallery/_CSS1084.jpg"
            link="https://www.mymemberaccount.com/member-enrollment/10887/group/8924"
          />
          <div>
            <h3>Details</h3>
            <DetailsList data={basicDetails} />
          </div>
        </div>
        <div>
          <SubscriptionPrev
            name="VIP+"
            price="24"
            path="gallery/_CSS0713.jpg"
            link="https://www.mymemberaccount.com/member-enrollment/10887/group/8882"
          />
          <div>
            <h3>Details</h3>
            <DetailsList data={vipDetails} />
          </div>
        </div>
        <div>
          <SubscriptionPrev
            name="Basic+"
            price="10"
            path="gallery/_CSS2071.jpg"
            link="https://www.mymemberaccount.com/member-enrollment/10887/group/8881"
          />
          <div>
            <h3>Details</h3>
            <DetailsList data={basicPlusDetails} />
          </div>
        </div>
        <div>
          <SubscriptionPrev
            name="VIP+ GUEST"
            price="25"
            path="gallery/_CSS0448.jpg"
            link="https://www.mymemberaccount.com/member-enrollment/10887/group/8882"
          />
          <div>
            <h3>Details</h3>
            <DetailsList data={guestDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
