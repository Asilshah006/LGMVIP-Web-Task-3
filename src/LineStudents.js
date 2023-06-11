import React from 'react'

const LineStudents = ({id, st}) => {
   
    return (
    <div className='card'>

    <div className="description">
      <h4>Description</h4>
      <h6>{st.name}</h6>
      <p>{st.gender}</p>
      <p>{st.email}</p>
      <p>{st.website}</p>
      <p>{st.skills}</p>
    </div>

    <div className="image">
      <h4>Image</h4>
      <img src={st.avatar} alt="" width={80} height={80} />
    </div>

  </div>
  )
}

export default LineStudents