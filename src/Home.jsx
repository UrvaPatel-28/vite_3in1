import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Home = () => {
  return (

    <Wrapper>
      <div className="main-container">
        <h1>Hello , I am Patel Urva</h1>
        <div className="project-container">

          <NavLink to='/todoapp'>
            <div className="project">
              <h2>ToDo App</h2>
            </div>
          </NavLink>
          <NavLink to='/weatherapp'>
            <div className="project">
              <h2>Weaher App</h2>
            </div>
          </NavLink>
          <NavLink to='/timeconversionapp'>
            <div className="project">
              <h2>TimeZone Conversion</h2>
            </div>
          </NavLink>
        </div>
      </div>
    </Wrapper>

  )
}
const Wrapper = styled.section`
.main-container{
  padding: 1rem;

a{
    text-decoration: none;
}
  h1{
    font-size: 5rem;
    text-align: center;
    -webkit-text-stroke: 1px blue;
  }

  .project-container{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    margin-top: 5rem;
  }
  
  .project{
    background-color: #eee;
    padding: 1rem;
    display: flex;
    height: 10rem;
    width: 40rem;
    font-size: 2.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    color: blue;
    margin: auto;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
  .project:hover{
    background-color: blue;
    color: #eee;
  }
}
@media (max-width:600px) {
    html{
        font-size: 55%;
    }
    .main-container {
    .project{
    
    width: 30rem;
    font-size: 2rem;
    }
    h1{
        font-size: 4.5rem;
    }
    
  }
        
}
@media (max-width:365px) {
   
   
  .main-container {
    .project{
    
    width: 25rem;
    font-size: 2rem;
    }
    h1{
        font-size: 3rem;
    }
    
  }
}
`
export default Home
