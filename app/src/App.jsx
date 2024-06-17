import React from 'react'
import { 
  Header,
  Navbar,
  Nav
} from 'rsuite'
import { Outlet  } from 'react-router-dom'
import { Pacientes } from './components/Pacientes'


const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  };

function App() {
    const [expand, setExpand] = React.useState(true)
    return (
      <>
     
      <div>
      <Header>
              <Navbar >
                <Navbar.Brand href="#">PLANNER</Navbar.Brand>
                <Nav>
                    <Nav.Item eventKey="1">Home</Nav.Item>
                    <Nav.Item eventKey="2">Pacientes</Nav.Item>
                    <Nav.Item eventKey="3">Procedimentos</Nav.Item>
                    <Nav.Item eventKey="4">Financeiro</Nav.Item>
                </Nav>
              </Navbar>
            </Header>
      
      
        <div className="content">
           <Pacientes />
            
        </div>
      </div>
          
        
        
       
      
     
      
      </>
    )
}

export default App;