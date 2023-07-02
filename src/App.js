//Library import
import  React from 'react'
import Button from './components/Button'
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import Ex4 from './components/Ex4'
import Ex5 from './components/Ex5'
import Ex6 from './components/Ex6'
import Ex7 from './components/Ex7'

//component body  -> functional , const arrow , const , functional , class
         function App(props){
          return(
            <div>
              <h1>JSX part of the React</h1>
              <button>Click Me</button>
              <hr/>

              <Button fname={'Submit'}/>
              <Button fname={'Login'}/>
              <Button fname={'Register'}/>
              <Button fname={'Contact Me'}/>
              <hr/>
              <Ex1/>
              <Ex2/>
              <Ex3/>
              <Ex4/>
              <Ex5/>
              <Ex6/>
              <Ex7/>


            </div>
          )
         }
        
 // default exports
 export default App        



