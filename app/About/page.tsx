import React from "react";
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material'
function Aboutpage() {
    return (

          <Card style={{ maxWidth: 800, margin: '40px auto', padding: '20px' }}>
            <CardContent>
              <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <Avatar
                    alt="Your Name"
                    src="/your-image.jpg" // Replace with your image path
                    style={{ width: 150, height: 150, margin: 'auto' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h5" gutterBottom>
                    Your Name
                  </Typography>
                  <Typography variant="body1">
                    Brief introduction or biography goes here. Explain who you are, what you do, your experience, or anything interesting about yourself.
                  </Typography>
                </Grid>
              </Grid>
      
              <Typography variant="h6" style={{ marginTop: 20 }}>
                More About Me
              </Typography>
              <Typography variant="body1">
                Here, you can add more detailed information about yourself. This could include your hobbies, interests, professional journey, skills, or achievements.
              </Typography>
            </CardContent>
          </Card>
    );
  }
  
export default Aboutpage;
