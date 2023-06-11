import { useState } from "react";
import Content from "./Content";
import Header from "./Header";



function App() {

  const [student , setStudent] = useState([
    {
       id : 1,
       name: 'Asil',
       email:'asilshah17@gmail.com',
       website: 'www.xyz.com',
       avatar : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      gender : 'male',
      skills : 'html'
    }
  ])
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [website , setWebsite] = useState('')
  const [avatar , setAvatar] = useState('')
  const [gender , setGender] = useState('')
  const [skills , setSkills] = useState('')

  const handlecheckbox=(value)=>{
    !skills.length ? (
      setSkills(value)
    ): (
      setSkills(skills.concat(`, ${value}`))
    )
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    const id = student.length? student[student.length-1].id + 1 : 1;
    const newStudent = {id , name , email ,website , avatar , gender, skills}
    const listStudents = [...student , newStudent];
    setStudent(listStudents)
    localStorage.setItem('studentlist' , JSON.stringify(listStudents))
    setName('')
    setEmail('')
    setWebsite('')
    setAvatar('')
    setGender('')
    setSkills('')
  }

  console.log(student);

  return (
    <div className="App">
      <Header 
        title = {'Student Enrollment Form'}/>
      <Content
        student = {student}
        setStudent={setStudent}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        website={website}
        setWebsite={setWebsite}
        avatar={avatar}
        setAvatar={setAvatar}
        gender={gender}
        setGender={setGender}
        skills={skills}
        setSkills={setSkills}
        handlecheckbox = {handlecheckbox}
        handleSubmit = {handleSubmit}
        />
    </div>
  );
}

export default App;
