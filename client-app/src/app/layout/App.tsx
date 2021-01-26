import React,{useState, useEffect,Fragment} from 'react';
import { Container, Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';
import { IActivty } from '../models/activity';
import { NavBar } from '../../features/NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';



const App =()=> {
  const[activities,setActivities]=useState<IActivty[]>([]);

  useEffect(()=>{
    axios.get<IActivty[]>('http://localhost:5000/api/activities')
    .then((response)=>{ 
   setActivities(response.data)
    });
  },[]);
  return (
    <Fragment>
    <NavBar/><Container style={{marginTop:'7em'}}>
  <ActivityDashboard activities={activities}/>
  </Container>
    </Fragment>
  );
  }


export default App;
