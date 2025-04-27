import {
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));
  }, []);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        
      </Container>
    </>
  );
}

export default App;
