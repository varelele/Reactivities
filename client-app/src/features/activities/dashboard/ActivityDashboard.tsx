import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm  from "../form/ActivityForm";
import ActivityStore from "../../../app/stores/activityStore";
import ActivityList from "./ActivityList";


const ActivityDashboard: React.FC = (
) => {
  const activityStore=useContext(ActivityStore);
  const {editMode,selectedActivity}=activityStore;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
        
        ></ActivityList>
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails
          />
        )}
        {editMode&&
        <ActivityForm key={(selectedActivity && selectedActivity.id)? 
          selectedActivity.id : null} 
        activity={selectedActivity!} 
        />}
      </Grid.Column>
    </Grid>
  );
};
export default observer (ActivityDashboard);