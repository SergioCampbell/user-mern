import React, {Fragment, useEffect, useState}from 'react'

function DataTable(props) {

    const [user, setUser] = useState([{
        _id: '',
        fullName: '',
        email: '',
        password: '',
        date: ''
    }])

    function logOut(){
        console.log('bye bye')
        setUser(null)
        if(setUser === null){
            window.location.href="./user/login"
        }
    }

    useEffect(() => {
        fetch('/users').then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setUser(jsonRes))
    }, [])

    return(
        <Fragment>
        <div className="container">
        <button className="btn btn-danger btn-sm" onClick={logOut} style={{float:'right'}}>log out</button>
            <h1>Dashboard</h1>
        </div>
            <div className="container">
                <table className="table table-striped table-dark shadow-lg">
                    <thead className="thead-dark">
                        <tr>
                            <td>id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Date created</td>
                        </tr>
                    </thead>
                    <tbody>
                        { user.map((user, index) =>
                            <tr key={index}>    
                                <td>
                                {user._id}
                                </td>                
                                <td>
                                    {user.fullName}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.date}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
    
}

export default DataTable;
