import React from "react";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/footer.css";

const linkedinUrl = "https://www.linkedin.com/in/marcoventuri/";

function Footer() {
  return (
    <Grid container className="myFooter" justify="center" alignItems="center">
      <div>
        <Grid item xs={12}>
          <span className="space">
            Made with <FavoriteIcon /> and React by Marco Venturi.
          </span>
          <span>
            Let's keep in touch
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              {" "}
              <LinkedInIcon />{" "}
            </a>
          </span>
        </Grid>
      </div>
    </Grid>
  );
}

export default Footer;
