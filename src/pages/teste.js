import React, { Component } from "react";
import UsuarioService from '../services/usuarioService';

export default class Teste extends Component {
    constructor(props) {
        super(props);

        //this.getAllUsers = this.getAllUsers.bind(this);

        this.state = {
            users: []
        };
    }

    componentDidMount(){
        UsuarioService.getAll().then((res) => {
            this.setState({ users: res.data});
        });
    }

    render() {
        return (
            <div>
               <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                             <td> {user.nome} </td>   
                                             <td> {user.email}</td>
                                             <td> {user.tipo}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            </div>
        )
    }
}