import React from 'react'

const x = 123
const title = 'welcome to react'
const isView = false
const users = ['john', 'amar' ,'raju' ,'rohith']
const emp = {
    id:123,
    name:'mahesh',
    email:'mahesh@gmail.com'
}

function Ex4(props){
    const  y = 14

    return (
        <div>
            <h1>Variable and data binding in react</h1>
            <h4> x = {x} </h4>
            <h3> {title}</h3>
            <h3>boolean = {isView ? "Say True" : "say False"}</h3>
            <hr/>
            <div>
                {isView ? <h1>True</h1> :<h1>False</h1>}
            </div>
            <hr/>

            <ul>
                {
                    users.map((item,index) =>{
                        return(
                            <li key={index}>{index} {item}</li>
                        )
                    })
                }
            </ul>
            <hr/>

            <h3>emp id = {emp.id} </h3>
            <h3>emp name  ={emp.name}</h3>
            <h3>emp mail = {emp['email']}</h3>
        </div>
    )
}

export default Ex4