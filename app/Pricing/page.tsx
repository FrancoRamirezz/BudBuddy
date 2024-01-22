
//import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
export default function Payment_Form(){

'use client'
const endpoint =() =>{

// const [payment,setPayment] = useState('')
// make an endpoint here, so we will use the api key
//const key = "pk_test_51O61QVCsqSTJpxsPMU368HE7J4hflK1vPcEXsxMvtvMICMbAfK3Udt0dyzltTpGFqvmrcBDUSqaWskKvlmeqkpKA00ioShhWmk"
// here we need to make useful state vars
//const [startproccess, setStartProccess] = useState("");
//const [checkoutproccess, setCheckoutProccess] = useState("");
}
// add the more logic here
// could use stripe 

return(
<div>
   
<Card style={{ maxWidth: 400, margin: '20px auto', padding: '20px', backgroundColor: '#f4f7f6' }}>
      <CardContent>
        <Typography variant="h5" style={{ color: '#4caf50', marginBottom: '20px' }}>
          Cannabis Store Payment
        </Typography>

        <form>
          <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            placeholder='*****'
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Cardholder Name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Expire Date"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="CVC"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
          />

          <Button variant="contained" color="primary" fullWidth>
            Pay Now
          </Button>
        </form>
      </CardContent>
    </Card>






</div>





)
};








