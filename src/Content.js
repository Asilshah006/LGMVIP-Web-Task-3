import React from 'react'
import StudentList from './StudentList'

const Content = ({student , setStudent , name , setName , email, setEmail, website, setWebsite, avatar, setAvatar, gender , setGender, skills , setSkills , handlecheckbox , handleSubmit }) => {
  return (
    <div className="content">
        <div className='form_section'>
          <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">
                Name :  
                <input 
                  type="text"
                  placeholder='Name'
                  id='name'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  />
              </label>
              


              <label htmlFor="">
                Email:  
                <input 
                  type="text"
                  placeholder='Email'
                  id='email'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  />
              </label>
              

              <label htmlFor="">
                Website :  
                <input 
                  type="text"
                  placeholder='Website'
                  id='website'
                  value={website}
                  onChange={(e)=>setWebsite(e.target.value)}

                  />

              </label>
            
              <label htmlFor="">
                Image Link :  
                <input 
                  type="text"
                  placeholder='Image URL'
                  id='image_input'
                  value={avatar}
                  onChange={(e)=>setAvatar(e.target.value)}
                  />
              </label>

              <label htmlFor="">
                Gender :  
          
                <label htmlFor="">
                Male :
                <input 
                  radioGroup='gender'
                  type='radio'
                  name='Gender'
                  value='male'
                  onChange={(e)=>setGender(e.target.value)}
                  />
              </label>

              <label htmlFor="">
                Female :
                <input 
                  radioGroup='gender'
                  type='radio'
                  name='Gender'
                  value='female'
                  onChange={(e)=>setGender(e.target.value)}
                  />
                </label> 
          
              </label>
          
                
              <div className='skills-cont'>
                  <label htmlFor="">Skills :   </label>

                  <label htmlFor="">
                    HTML :
                    <input
                      id='html_ch' 
                      type="checkbox"
                      name='html'
                      value= 'html'
                      onChange={(e) => handlecheckbox(e.target.value)}
                      />
                    
                  </label>

                  <label htmlFor="">
                    Java :
                    <input 
                      id='java_ch'
                      type="checkbox"
                      name='java'
                      value= 'java'
                      onChange={(e) => handlecheckbox(e.target.value)}
                      />
                    
                  </label>

                  <label htmlFor="">
                    CSS :
                    <input 
                    id='css_ch'
                      type="checkbox"
                      name='css'
                      value= 'css'
                      onChange={(e) => handlecheckbox(e.target.value)}
                      />
                    
                  </label>
      
                </div>

              <div className='btn'>
                  
            <button id='enroll_btn' type='submit'>Enroll Student</button>
              <button>Clear</button>
              </div>

          </form>
        </div>

      <div className="results" id='display'>
        <h2>Enrolled Students</h2>
          {
            student.length ? (  
              <StudentList 
                student = {student}
            />
          ):( <p> No Students To Display</p>)
          }
          
      </div>  


    </div>
  )
}

export default Content