import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './App.css'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const buttonStyle = {
  marginTop: '20%',
  marginRight: '40%',
  marginLeft: '49%',  
};


const TableExampleSimple = (props) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>        
      </TableRow>
    </TableHeader>
    <TableBody>      
        {props.data.map(d=>
          <TableRow>
        <TableRowColumn>{d.name}</TableRowColumn>
        </TableRow>)}       
    </TableBody>
  </Table>
);


var data = [{name: "mukund"}, {name:"Ishan"}];

class App extends Component {
  render() {    
    return (            
      <MuiThemeProvider>
        <AppBarExampleIcon />
        <DialogExampleSimple/>        
      </MuiThemeProvider>      
    );
  }
}



const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);


class DialogExampleSimple extends React.Component {
  state = {
    open: false,
    name: '',
    frequency: ''
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});    
  };

  submitClose = () => {
    this.setState({open: false});
    data.push({name:this.state.name})
  };

  updateValue = (hintText,e)=>{
    if(hintText==='Name'){
    this.setState({name: e.target.value})
    }
    
    
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.submitClose}
      />,
    ];
    console.log(data.length)

    return (
      <div>
        <RaisedButton label="Fill" onClick={this.handleOpen} style={buttonStyle} />
        <Dialog
          title="Action Form"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}          
        >        
        <TextFieldExampleSimple updateData ={this.updateValue}/>
          The actions in this window were passed in as an array of React objects.
        </Dialog>
        <TableExampleSimple data={data} />
      </div>
    );
  }
}


const TextFieldExampleSimple = (props) => (
  <div>
    <TextField
      hintText="Name"
      onChange ={(hintText,e)=>props.updateData}
    /><br />
    <br />
    <TextField
      hintText="School"
      
    /><br />    
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
    
    <TextField
      hintText="Hint Text"
      floatingLabelText="Fixed Floating Label Text"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br />
    <TextField
      hintText="MultiLine with rows: 2 and rowsMax: 4"
      multiLine={true}
      rows={2}
      rowsMax={4}
    /><br />
    <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="Full width"
      fullWidth={true}
    />
  </div>
);

export default App;
