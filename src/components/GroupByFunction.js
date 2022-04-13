import { useState, useEffect } from 'react';

function Gender() {

    const url = "https://run.mocky.io/v3/a9f6a4b7-d03c-4a45-b64b-791e054f36b8"
    const [groupByFunctionData, setGroupByFunctionData] = useState([])
    const [isTrue , setIsTrue] = useState(false)

    useEffect((isTrue) => {
    const getData = async () => {
        let fetching = await fetch(url)
        let json = await fetching.json()
        let result = json
        setGroupByFunctionData(result)
       setIsTrue(!isTrue)
    }
        getData()
    }, [])
  
    const [index, setIndex] = useState(0)
    
    return (
  
        <>
            
            <div className="tabs-container">

                <div className="Gender_and_Race_tab">

                    <div className={`tab-head-inactive ${index === 0 ? `tab-head-active` : null}`} onClick={() => { setIndex(0) }} >
                        Gender
                      </div>
                    
                    <div className={`tab-head-inactive ${index === 1 ? `tab-head-active` : null}`} onClick={() => { setIndex(1) }}>
                        Race       
                    </div>

                </div>
     
                <div className="tab-content" hidden={index !== 0} >

                    <div className="white-boxes">

                        <span>{!isTrue ? "" : groupByFunctionData.data.gender.payEquityGap.label}</span>

                        <p>Women earn <b>{!isTrue ? "" : groupByFunctionData.data.gender.payEquityGap.data.minority.value}</b> for every <b> {!isTrue ? "" : groupByFunctionData.data.gender.payEquityGap.data.majority.value}</b> earned by comparable men</p>

                    </div>

                    <div className="white-boxes">

                        <span>{!isTrue ? "" : groupByFunctionData.data.gender.employeeComparison.label}</span>

                        <p>Women make up <b>{!isTrue ? "" : groupByFunctionData.data.gender.employeeComparison.data.value}</b>  of employees </p>

                    </div>

                    <div className="white-boxes">

                        <span>{!isTrue ? "" : groupByFunctionData.data.gender.budget.label}</span>

                        <p> <b>{!isTrue ? "" : groupByFunctionData.data.gender.budget.data.value}</b> minimum recommended budget to reduce pay equity gap</p>

                    </div>
        
                </div>

                <div className="tab-content" hidden={index !== 1}>

                    <div className="white-boxes">

                        <span>{!isTrue ? "" : groupByFunctionData.data.race.payEquityGap.label}</span>

                        <p>Hispanics earn <b>{!isTrue ? "" : groupByFunctionData.data.race.payEquityGap.data.minority.value}</b> for every <b>{!isTrue ? "" : groupByFunctionData.data.race.payEquityGap.data.majority.value}</b> earned by comparable whites </p>

                    </div>
                    <div className="white-boxes">

                        <span>{!isTrue ? "" : groupByFunctionData.data.race.employeeComparison.label}</span>

                        <p>Hispanics make up <b>{!isTrue ? "" : groupByFunctionData.data.race.employeeComparison.data.value}</b> of employees </p>

                    </div>
                    <div className="white-boxes">

                        <span>{!isTrue ? "" : groupByFunctionData.data.race.budget.label}</span>

                        <p> <b>{!isTrue ? "" : groupByFunctionData.data.race.budget.data.value}</b> minimum recommended budget to reduce pay equity gap</p>

                    </div>
                </div>

            </div>
        
        </>
         
    );
  
}
export default Gender;