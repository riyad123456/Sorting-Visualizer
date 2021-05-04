import React from 'react';
import "./mycss.css";
import {bubbleSort} from "./util.js";
import {quickSort} from "./util.js";

const ANIMATION_SPEED_MS = 1;

const PIVOT_COLOR = 'green';

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';




function Bar({height_}) {
  return (
    <div className="elem" style = {{"height": {height_}.height_+"px"}} >
    </div>
  );
}


function Chart(props){
  const chart = props.chart.map((step) =>
  <Bar height_={step} key={step.height_}/>  );
    return(
      <div className="my-chart" >
          {chart}
      </div>
    );
}




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      My_Array: Array.from({length: 200}, () => Math.floor(Math.random() * 750)),
      stop: false
    };
  }
  reset() {
    this.setState(
      {My_Array: Array.from({length: 200}, () => Math.floor(Math.random() * 750))
    }
    )
    }
  
    
  
  BubbleSort() {
    const animations = bubbleSort(this.state.My_Array);
    console.log(animations.length)
    for(let i =0; i< animations.length; i++){
      const arrayBars = document.getElementsByClassName('elem');
      const [barOne, barTwo] = animations[i];
      const changeStyling = (i%3) !== 2;
      if(!this.state.stop){
      if( changeStyling){
        const color = ((i%3) === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[barOne].style.backgroundColor = color;
          arrayBars[barTwo].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
        
      } else {
        setTimeout(() => {
          let tmp = arrayBars[barOne].style.height;
          arrayBars[barOne].style.height = arrayBars[barTwo].style.height;
          arrayBars[barTwo].style.height = tmp;
        }, i * ANIMATION_SPEED_MS);
      }
    } else {
      break;
    }
    } 
  }

    QuickSort(){
      let animationscontainer = [];
      const animations = quickSort(this.state.My_Array,0,this.state.My_Array.length-1, animationscontainer);
      for(let i =0; i< animations.length; i++){
        const arrayBars = document.getElementsByClassName('elem');
        const animation = animations[i];
        const changeStyling = (i%3) !== 2;
        if( changeStyling){
          const color = ((i%3) === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            try{ 
              arrayBars[animation.getI()].style.backgroundColor = color;
              arrayBars[animation.getJ()].style.backgroundColor = color;
              arrayBars[animation.getPivot()].style.backgroundColor = PIVOT_COLOR;
            } catch(e) { 
              console.log(e);
              console.log(animation)
              console.log(arrayBars.length)
            }
          }, i * ANIMATION_SPEED_MS);
        } else {
            if(animation.getSwap()){
              setTimeout(() => {
                let tmp = arrayBars[animation.getI()].style.height;
                arrayBars[animation.getI()].style.height = arrayBars[animation.getJ()].style.height;
                arrayBars[animation.getJ()].style.height = tmp;
                
              }, i * ANIMATION_SPEED_MS);
            }
            setTimeout(() => {
              arrayBars[animation.getPivot()].style.backgroundColor = PRIMARY_COLOR;
              
            }, i * ANIMATION_SPEED_MS);
            
        }
      } 
    }
  render() {
    
    return (
      
      <div className="main">
        
          <Chart
            chart={this.state.My_Array}
            onClick={() => {this.Sort()}  }
          />
        
        <div className ="buttons-container" style={{'display': 'flex'}}>
        <button className="sort-button" onClick={() => this.BubbleSort()}>BubbleSort</button>
        <button className="sort-button" onClick={() => this.reset()}>reset</button>
        <button className="sort-button" onClick={() => this.QuickSort()}>QuickSort</button>
        </div>
        
      </div>
    );
  }
} 
export default App