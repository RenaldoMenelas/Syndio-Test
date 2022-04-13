import './App.css';
import GroupByFunction from './components/GroupByFunction'
import Select from 'react-select';
import axios from 'axios'
import { useState, useEffect } from 'react';
import logo from './syndio-logo.svg'
import GroupByRoles from './components/GroupByRoles'

function App() {

  const url = "https://run.mocky.io/v3/9e343425-c47c-4c7f-a1ac-972c099be0ed"
  const [groupSelections,setGroupSelections] = useState(0)
  useEffect(() => {
    axios.get(url)
      .then(response => {
      
        console.log(response)
        setGroupSelections(response.data)
              
      })
  }, [])

  const styles = {
    control: (styles) => ({ ...styles, backgroundColor: "#262626", border: "1px solid #262626", height: "40px", width: "200px","@media only screen and (max-width: 414px)": {
      ...styles["@media only screen and (max-width: 360px)"],
      width: "100%",
    },
    }),
    singleValue:(styles) =>({...styles, color:'white'}),
    placeholder: (styles) => ({ ...styles, color: 'white' }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor:  "#262626",
        color: "white",
        
        
      };
    }
  };

  let groupByFunction = (groupSelections[0]?.label)
  let groupByRole = (groupSelections[1]?.label)
  const [display, Value] = useState(groupSelections?.label)
  
  const handler = e => {
    
    let selectedGroup = e.label
    console.log(e.label)
    if (selectedGroup === groupByFunction) {
      return Value(<GroupByFunction />);
    } else if (selectedGroup === groupByRole) {
      return Value(<GroupByRoles/>)
      
    }
  }
  
    return (
      <>
        <header className="header">
              
          <img src={logo} className="Syndio-logo" alt="logo" />
             
          <Select onChange={handler} styles={styles} options={groupSelections} className="select" placeholder="Group 1" components={{ IndicatorSeparator: () => null }} />  
         
        </header>
      
        <div className="selected-Group-tab">{display}</div>
        
     
      </>
   
    );
  }
 
  

  


export default App;
