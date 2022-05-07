import React from 'react'

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

  export default Course