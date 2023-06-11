import React from 'react'
import LineStudents from './LineStudents'

const StudentList = ({student}) => {
  return (
    <>
      {
        student.map(st =>(
            <LineStudents 
              key={st.id}
              st={st}
              />
        ))
      }
    </>
  )
}

export default StudentList