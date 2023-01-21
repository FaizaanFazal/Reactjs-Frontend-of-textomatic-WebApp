import React from 'react'
import {
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryPie
} from "victory";


export default function Analyzertool() {
  const data = [
    { x: 1, y: 5 },
    { x: 2, y: 17.5 },
    { x: 3, y: 30 },
    { x: 4, y: 35 },
    { x: 5, y: 23 },
    { x: 4, y: 8 },
    { x: 6, y: 4 },
    { x: 7, y: 10 }
  ];

  return (
    
    <div className='container text-black mb-5'>
    <br/>
    <br/>
    <br/>
           <h3 className='text-center mt-4 mb-5'>Text Analysis</h3>
          <div className='bordergraylight text-center'>
              <div>
              <input type="file" />
            
    <div className='row m-2'>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox"> Sentiment Analysis</label>
               
            </div>
      </div>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox"> Keyword Frequency</label>
               
            </div>
      </div>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox">samples by week</label>
               
            </div>
      </div>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox"> Samples by topic</label>
               
            </div>
      </div>
    </div>
    <button>Analyze </button>

              </div>
              <div className='row text-center'>
                {/* data visualization  here */}
                 
                  <div className='col-sm-6 mx-auto'>
      <VictoryChart
        horizontal
        height={500}
        width={700}
        theme={VictoryTheme.material}
        domainPadding={50}
      >
        <VictoryAxis
          style={{
            axis: { stroke: "grey" },
            axisLabel: { fontSize: 20, padding: 40 },
            grid: { stroke: "none" },
            ticks: { stroke: "none", size: 0 },
            tickLabels: { fontSize: 15, padding: 10 }
          }}
          tickValues={[1, 2, 3, 4, 5, 6, 7]}
          tickFormat={[
            "0-9",
            "10-19",
            "20-29",
            "30-39",
            "40-49",
            "50-69",
            "80+"
          ]}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[0, 17.5, 35]}
          tickFormat={["0%", "17.5%", "35%"]}
        />
        <VictoryGroup>
          <VictoryBar data={data} x="x" y="y" />
        </VictoryGroup>
      </VictoryChart>
    </div>
    <div className='col-sm-6 mx-auto'>
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={{ y: 100 }}
      style={{
        data: { width: 40 },
        grid: { stroke: "red" }
      }}
      height="500"
      width="700"
    >
      <VictoryGroup
        theme={VictoryTheme.material}
        offset={60}
        tickValues={[2, 4, 6, 8]}
        style={{
          data: { width: 40 }
        }}
        colorScale={["green", "orange"]}
      >
        <VictoryBar />
        <VictoryBar />
      </VictoryGroup>
    </VictoryChart>
    </div>
    <div className='col-sm-6 mx-auto'>
    <VictoryPie
    animate={{
  duration: 2000
}}
    colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
  data={[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]}
/>
    
    </div>
              </div>
              
          </div>
          <br></br>
    </div>
  )
}
