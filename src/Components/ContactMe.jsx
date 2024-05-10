import { Grid, TextField, Typography ,Button,Avatar} from "@mui/material";
import "../assets/Css/contactMe.css";
import GroupIcon from "@mui/icons-material/Group";
const ContactMe = () => {
  return (
    <>
      <Grid container spacing={2} className="contact-container">
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <Typography variant="h6" className="contact-us">
            <Avatar className="contact-us-icon">
              <GroupIcon sytle={{ color: "white" }} />
            </Avatar>
            <span>Contact US </span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={8} xl={8}>
          <form type="submit">
            <TextField
              variant="standard"
              label="First Name"
              sx={{ width: "100%" }}
            />
            <TextField
              variant="standard"
              label="Last Name"
              sx={{ width: "100%" }}
            />
            <TextField
              variant="standard"
              label="Email"
              sx={{ width: "100%" }}
            />
            <TextField
              variant="standard"
              label="Message"
              sx={{ width: "100%" }}
            />
            <Button variant="contained" type="submit" className="submit-button">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactMe;
