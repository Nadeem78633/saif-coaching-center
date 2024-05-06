import { CardMedia, Grid, Card, useMediaQuery } from "@mui/material";
import React from "react";

const Subjects = () => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const subjects = [
    { id: 1, name: "English" },
    { id: 2, name: "Physics" },
    { id: 3, name: "Chemsitery" },
    { id: 4, name: "Math" },
  ];

  return (
    <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <Grid container spacing={2}>
        {subjects.map((subject, index) => {
          const cardHeight =
            isSmallScreen && (index === 0 || index === 3) ? 300 : 200;

          return (
            <Grid
              item
              key={subject.id}
              xs={6}
              sm={6}
              md={3}
              lg={3}
              xl={3}
              style={{
                display: index <= 1 ? "flex" : "block", // Control stacking order up to 2nd grid
                // Additional styling for fourth card (optional)
                ...(index === 3 && {
                  marginTop: isSmallScreen ? "auto" : 0, // Adjust margin on small screens only
                }),
              }}
            >
              <Card style={{ width: "100%", height: cardHeight }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Subjects;
