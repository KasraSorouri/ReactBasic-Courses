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
  const part1 = {
    name: 'Basics of React',
    exercises: 8
  }
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercises: 12
  }

  return (
    <div>
      <Header course_name={course} />
      <Contents part1={part1.name} part2={part2.name} part3={part3.name}
        exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)