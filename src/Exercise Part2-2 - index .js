import React from 'react'
import ReactDOM from 'react-dom'









const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8
      },
      {
        name: 'Using props',
        exercises: 10
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }

  const Course = ({course}) => {
    const Header = () => (<h2>{course.name}</h2>)
    const Contents = () => {
      const part = () => (      
         course.parts.map(part=><p key={part.name}>{part.name} {part.exercises}</p>)
       //  console.log(course.parts.map(part=><p>{part.name} {part.exercises}</p>))
      )  
      
      return(
        <div>
          {part()}
        </div>
      )
    }
    
    const total = course.parts.reduce((sum,part)=>sum+part.exercises,0)
    //console.log(total)
    const Total = () => {
      return(
        <p>Total {total} exercises</p>
      )
    }
        
    return(
      <div>
        <Header />
        <Contents />
        <Total />
      </div>
    )
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)