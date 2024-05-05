import { Typography } from "@mui/material";
import "../assets/Css/copyright.css";

const CopyRight = () => {
  return (
    <>
      <div className="copyright-container">
        <Typography className="copy">
          {" "}
          &copy; 2020 <span className="copy-nadeem">Nadeeem</span> . All rights reserved .
        </Typography>
      </div>
    </>
  );
};

export default CopyRight;
