import { Grid, List, ListItem, ListItemText } from "@mui/material";

export default function ActivityDashboard() {
  return (
    <Grid container>
      <Grid size={9}>
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
