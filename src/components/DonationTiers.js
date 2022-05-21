import React from "react";
import { Button } from "reactstrap";
import { formatNumber } from "../util";

const DonationTiers = ({ tiers, value, onChange }) => {
  return (
    <div className="donation-tiers">
      {tiers.map((tier) => (
        <Button
          key={tier}
          className="donation-tier-button"
          onClick={() => onChange(tier)}
          color={tier === value ? "success" : "secondary"}
        >
          {formatNumber(tier)}
        </Button>
      ))}
    </div>
  );
};

export default DonationTiers;
