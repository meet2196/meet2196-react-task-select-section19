import React from 'react';
import './App.css';
import CustSelect from './CustSelect';

const styles= {
  app: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyItems: 'center',
    alignItems: 'center', 
    display: 'grid',
    height: '100vh',
    fontfamily: 'Calibri',
    color: 'rgba(1,1,100,1)',
    gridTemplateColumns: '1fr',
    fontSize: 30
  },
  select: {
    width:'100%',
    maxWidth:600 
  }
}

const options=[
  {label:'React', value:'react'},
  {label: 'ReactNavtive', value:'react-native'},
  {label: 'Javascript', value:'js'},
  {label: 'CSS', value:'css'},
  {label: 'Html', value:'html'},
]
function onChangeIn(value){
  console.log(value);
}



function App() {
  return (
    <div style={styles.app}>
      
      <CustSelect isMulti={true} style={styles.select} defaultValue={[options[3],options[2]]} onChange={onChangeIn} options={options} label="Select The Liabrary" />
    </div>
  );

}
export default App;
