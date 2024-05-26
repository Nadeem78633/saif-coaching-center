// SocialMedia.js
import { useEffect } from "react";
import { Typography } from "@mui/material";
import "../assets/Css/socialMedia.css";
import Divider from "@mui/material/Divider";

const SocialMedia = () => {
  const links = [
    { id: 1, title: "Github", link: "temp" },
    { id: 2, title: "LinkedIn", link: "temp" },
    { id: 3, title: "LeetCode", link: "temp" },
  ];

  const setDividerWidth = (linkId) => {
    const linkText = document.getElementById(`link-${linkId}`);
    const divider = document.getElementById(`divider-${linkId}`);
    if (linkText && divider) {
      const textWidth = linkText.getBoundingClientRect().width;
      divider.style.width = `${textWidth}px`;
    }
  };

  useEffect(() => {
    links.forEach((link) => setDividerWidth(link.id));
  }, []); 

  return (
    <div className="margin-bottom">
      <div className="social-media-container">
        <Typography className="social-media">Social media</Typography>
        <div className="social-links">
          {links.map((link) => (
            <div key={link.id} className="social-link">
              <Typography
                id={`link-${link.id}`}
                className="link-title"
                style={{ marginBottom: "5px" }}
              >
                {link.title}
              </Typography>
              <Divider id={`divider-${link.id}`} className="social-divider" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
