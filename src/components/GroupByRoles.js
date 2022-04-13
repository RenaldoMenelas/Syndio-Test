import React from 'react'
import { useState, useEffect } from 'react'

function Race() {

    const url = "https://run.mocky.io/v3/f1b01b57-3147-476a-a632-0c10ad2a3c1a"
    const [roleByFunctionData, setRoleByFunctionData] = useState([])
    const [isTrue , setIsTrue] = useState(false)

    useEffect((isTrue) => {
        const getData = async () => {
            let fetching = await fetch(url)
            let json = await fetching.json()
            let result = json
            setRoleByFunctionData(result)
           setIsTrue(!isTrue)
        }
            getData()
        }, [])
    
  const [index, setIndex] = useState(0)
  
    return (
        <>
               
    <div className="tabs-container"> 
      
      <div className="Gender_and_Race_tab">
            
       <div className={`tab-head-inactive ${index===0?`tab-head-active`:null}`}  onClick={() => { setIndex(0) }} >
          Gender 
          </div>
            
       <div className={`tab-head-inactive ${index===1?`tab-head-active`:null}`} onClick={() => { setIndex(1) }}>
           Race <div className="vertical"></div>
            </div>
            
     </div>
    
     <div className="tab-content" hidden={index !== 0} >
            <div className="white-boxes">
              
              <span>{!isTrue ? "" : roleByFunctionData.data.gender.payEquityGap.label}</span>
              <p>Men earn <b>{!isTrue ? "" : roleByFunctionData.data.gender.payEquityGap.data.minority.value}</b> for every <b> { !isTrue ? "" : roleByFunctionData.data.gender.payEquityGap.data.majority.value}</b> earned by comparable Women</p>
            </div>
       
            <div className="white-boxes">
              
              <span>{!isTrue ? "" : roleByFunctionData.data.gender.employeeComparison.label}</span>
              <p>Men make up <b>{!isTrue ? "" : roleByFunctionData.data.gender.employeeComparison.data.value}</b>  of employees </p>
            </div>
            <div className="white-boxes">
              
              <span>{!isTrue ? "" : roleByFunctionData.data.gender.budget.label}</span>
              <p> <b>{!isTrue ? "" : roleByFunctionData.data.gender.budget.data.value }</b> minimum recommended budget to reduce pay equity gap</p>
           </div>
       
     </div>
          
    <div className="tab-content" hidden={index !== 1}>
            
            <div className="white-boxes">
              
             <span>{!isTrue ? "" : roleByFunctionData.data.race.payEquityGap.label}</span>
             <p>Asians earn <b>{!isTrue ? "" : roleByFunctionData.data.race.payEquityGap.data.minority.value}</b> for every <b>{ !isTrue ? "" : roleByFunctionData.data.race.payEquityGap.data.majority.value}</b> earned by comparable Hispanics </p>
            </div>
            
            <div className="white-boxes">
              
             <span>{!isTrue ? "" : roleByFunctionData.data.race.employeeComparison.label}</span>
             <p>Asians make up <b>{!isTrue ? "" : roleByFunctionData.data.race.employeeComparison.data.value}</b> of employees </p>
            </div>

            <div className="white-boxes">
              
             <span>{!isTrue ? "" : roleByFunctionData.data.race.budget.label}</span>
             <p> <b>{!isTrue ? "" : roleByFunctionData.data.race.budget.data.value }</b> minimum recommended budget to reduce pay equity gap</p>
            </div>
     </div>



   </div>
    
        </>
    )
}

export default Race
