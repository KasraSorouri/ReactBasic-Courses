import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <h2>{props.course_name}</h2>
  )
}

const Contents = (props) => {
  return(
    <div>
      <Part part_name={props.part1} Part_exer={props.exercises1} />
      <Part part_name={props.part2} Part_exer={props.exercises2} />
      <Part part_name={props.part3} Part_exer={props.exercises3} />
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.part_name} {props.Part_exer}</p>
  )
}
const Total = (props) => {
  return(
    <p>Total {props.exercises1 + props.exercises2 + props.exercises3} exercises</p>
  )
}

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12

  return (
    <div>
      <Header course_name={course} />
      <Contents part1={part1} part2={part2} part3={part3}
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)