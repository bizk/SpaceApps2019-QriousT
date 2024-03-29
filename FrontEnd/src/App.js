import React, { Component } from 'react';
import './App.css';
import './NavBar.js';

import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, IconButton, Typography, Grid, Divider, Switch, Button } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import { CountryDropdown } from 'react-country-region-selector';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import {red} from '@material-ui/core/colors';

const primary = red[500];

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function   changeImage(){
    
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      conuntry:'',
      // huracane, flood, drought, fire, heavyStorms, tsunami, highContamination,
      mapUrl: require("./resources/maps/arg.jpeg"),
    }
  };

  selectCountry(val) {
    this.setState({country:val});
  };

  checkHazardsGroup() {
    const [state, setState] = React.useState({
      hurricane: false,
      flood: false,
      drought: false,
      fire: false,
      heavyStorms: false,
      tsunami: false,
      highContamination: false,
    })
  };

  // const handleHazzardChange = name => event => {
  //   setState({ ...state, [name]: event.target.checked });
  // };


  render() {
    const { country } = this.state;

    return(
      <div className="App">
        <NavBar />

        <div className="selector">
          <div className='selector_container'>
              <Grid container alignItems="justify" spacing={2} >
                <Grid item xs={12}>
                  <Typography align="justify">
                    The PVDS is a tool that aims to identify. parts of the population that are at a critically vulnerable in the presence of environmental hazards.
                  </Typography>
                </Grid>
                <Grid item xs={3}><Typography align="left" variant="h4">Parameters</Typography></Grid> 
                <Grid item xs={12}><Divider/></Grid>
                <Grid item xs={3}>
                  <Typography align="left" variant="h5">Country</Typography>
                </Grid>
                <Grid item xs={9}>
                  <CountryDropdown
                    value={country}
                    onChange={(val) => this.selectCountry(val)}
                  />
                </Grid>
                <Grid item xs={12}><Divider/></Grid>
                <Grid item xs={3}>
                  <Typography align="left" variant="h5">Hazards</Typography>
                </Grid>
                <Grid item xs={9}/>        
                  {/* <FormControl required error={error} component="fieldset" className={classes.formControl}> */}
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <Grid container >
                          <Grid align="justify" item xs={6}><FormControlLabel
                          // control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
                            control={<Checkbox value="all" />} label="All" /></Grid>
                          <Grid align="justify"item xs={6}><FormControlLabel control={ <Checkbox value="flood" /> } label="Flood" /></Grid>
                          <Grid align="justify"item xs={6}><FormControlLabel control={<Checkbox value="Hurricane" />} label="Hurricane" /></Grid>
                          <Grid align="justify"item xs={6}><FormControlLabel control={ <Checkbox value="drought" /> } label="Drought" /></Grid>
                          <Grid align="justify"item xs={6}><FormControlLabel control={ <Checkbox value="fire" /> } label="Fire" /></Grid>
                          <Grid align="justify"item xs={6}><FormControlLabel control={ <Checkbox value="heavyStorm" /> } label="Heavy Storms" /></Grid>
                          <Grid align="justify"item xs={6}><FormControlLabel control={ <Checkbox value="tsunami" /> } label="Tsunami" /></Grid>
                          <Grid align="justify"item xs={6}><FormControlLabel control={ <Checkbox value="highContamination" /> } label="High contamination" /></Grid>
                        </Grid>
                      </FormGroup>
                      <FormHelperText>Choose at least one.</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}><Divider/></Grid>
                  <Grid item xs={3}>
                    <Typography variant="h5">Vulnerabilities</Typography>
                  </Grid>

                  <Grid item xs={9}/>

                  {/* <FormControl required error={error} component="fieldset" className={classes.formControl}> */}
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <Grid container >
                         <Grid align="justify"item xs={12}>
                          <FormControlLabel control={<Switch
                                  // checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB"
                                  color="primary"/>}
                              label="Economically"/>  
                          </Grid>
                          <Grid align="justify"item xs={12}>
                          <FormControlLabel control={<Switch
                            // checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB"
                            color="primary"/>}
                            label="Access to medical atention."/>  
                          </Grid>
                          <Grid align="justify"item xs={12}>
                            <FormControlLabel control={<Switch
                              // checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB"
                              color="primary"/>}
                            label="Humanitarian help access"/>  
                          </Grid>
                        </Grid>
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}><Divider/></Grid>
              </Grid>   
          </div>
        </div>

        <div className="mapDisplay">
          <img src={require("./resources/default_world_map.jpeg")}/>
        </div> 

        <div className="suggestions">
          <Grid container alignItems="justify" spacing={1}>
            <Grid item xs={12}> 
              <Typography align="left" variant="h5"> Events </Typography>
            </Grid>
            <Grid item xs={12}><Divider/></Grid>
            <Grid item xs={12}>
              <div className="eventBox">
                <Grid container>
                  <Grid align='left' item xs={12}>
                    <img className="eventIcon" src={require("./resources/Icons/sos.png")}/>
                    <Typography>51472 families are in danger.</Typography>
                  </Grid>
                  <Grid align='left' item xs={12}>
                    <img className="eventIcon" src={require("./resources/Icons/ambulance.png")}/>
                    <Typography float="left">12% of the population wont be able to acces aid in case of environmental disasters.</Typography>
                  </Grid>
                  <Grid align='left' item xs={12}>
                    <img className="eventIcon" src={require("./resources/Icons/evacuation.png")}/>
                    <Typography>In the next 5 years 17% of the population will migrate due to drought hazards.</Typography>
                  </Grid>
                </Grid>
                
              </div>
            </Grid>
          </Grid>
            
        </div>
      </div>
    )
  }
}

export default App;
