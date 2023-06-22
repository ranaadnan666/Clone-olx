import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Sidebar from "./Sidebar";
import AreaCard from "./Card";

const DetailedPro = () => {
  return (
    <Grid container spacing={1} width={{xs:"100%",md:"90%",lg:"80%",xl:"70%"}} mx={"auto"} >
          {/* ============== Sidebar section ================= */}

      <Grid xs={1} sm={0} md={3} mt={4} display={{xs:"none",md:"block"}}>
        <Sidebar/>
      </Grid>
      <Grid xs={11.1} sm={12} md={8} mt={3} mx={"auto"} p={1}>
    
      
        {/* ============== Card details================= */}
        
<AreaCard/>

  
      </Grid>
    </Grid>
  );
};

export default DetailedPro;
