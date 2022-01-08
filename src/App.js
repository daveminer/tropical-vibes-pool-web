import Title from "./Title";

import "./App.css";

import PublicIcon from "@mui/icons-material/Public";
import LockIcon from "@mui/icons-material/Lock";
import WeekendIcon from "@mui/icons-material/Weekend";
import { Typography } from "@mui/material";

const icons = [
  {
    description:
      "Constructed and operated according to community best practices",
    icon: <LockIcon color="primary" fontSize="large" />,
    label: "Safe",
  },
  {
    description: "Stake your ADA and earn staking rewards automatically",
    icon: <WeekendIcon color="primary" fontSize="large" />,
    label: "Easy",
  },
  {
    description:
      "TropicPool will always be a single pool operator run on dispersed infrastructure",
    icon: <PublicIcon color="primary" fontSize="large" />,
    label: "Decentralized",
  },
];

function App() {
  return (
    <div className="app">
      <Title />
      <div className="phrase-row">
        <Typography color="primary" className="phrase" variant="h4">
          Soak in the ADA!
        </Typography>
      </div>
      {icons.map((iconInfo, idx) => (
        <>
          <div className="details-container">
            <div className="detail-icon">
              <div key={idx} className="details-row">
                {iconInfo.icon}
              </div>
            </div>
            <div className="detail-text">
              <Typography
                sx={{ fontWeight: 700 }}
                color="primary"
                variant="body"
              >
                {iconInfo.label}
              </Typography>
            </div>
          </div>
          <div className="detail-description">
            <Typography color="primary" variant="body">
              {iconInfo.description}
            </Typography>
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
