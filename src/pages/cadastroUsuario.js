import React, { Component } from "react";
import UsuarioService from '../services/usuarioService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/CadastroUsuario.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import AlertPage from '../components/alert-component/alert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class CadastroUsuario extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTipo = this.onChangeTipo.bind(this);
    this.saveUsuario = this.saveUsuario.bind(this);

    this.state = {
      id: null,
      nome: '',
      email: "",
      tipo: "",
      submitted: false,
      resposta: 1,
      tipoUsuario: []
    };
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
    console.log(e.target.value)
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
    console.log(e.target.value)
  }

  onChangeTipo(e) {
    this.setState({
      idTipo: e.target.value
    });
    console.log(e.target.value)
  }

  componentDidMount() {
    UsuarioService.getFindTipoUsuario().then((res) => {
      this.setState({ tipoUsuario: res.data });
    });
    console.log("Teste " + this.state.tipoUsuario);
  }

  saveUsuario() {
    var data = {
      nome: this.state.nome,
      email: this.state.email,
      tipo: this.state.idTipo
    }
    console.log(data)
    console.log("Teste " + this.state.tipoUsuario);
    toast.success("Cadastro de usuário realizado com sucesso!!!");

    UsuarioService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nome: response.data.nome,
          email: response.data.email,
          tipo: response.data.idTipo,


          submitted: true
        });
        console.log("Responde " + this.state.submitted)
      })
      .catch(e => {
        console.log(e)
        toast.error("ERROR AO REALIZAR O CADASTRO DE USUÁRIO!!!");
      })
  }


  render() {
    return (
      <Container>
        <CssBaseline />
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" className="formLogin" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid id="fields_nome" item xs={12}>
                <TextField id="nome" label="Nome" variant="outlined"
                  fullWidth
                  name="nome" value={this.state.nome}
                  onChange={this.onChangeNome} />
              </Grid>
            </Grid>
            <Grid id="fields_email" item xs={12}>
              <TextField
                required
                fullWidth
                variant="outlined"
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </Grid>
            <Grid id="fields_tipo" item xs={12}>
              <InputLabel id="tipo-label">Tipo</InputLabel>
              <Select
                labelId="tipo-label"
                id="idTipo"
                label="Tipo" value={this.state.idTipo}
                onChange={this.onChangeTipo}
                fullWidth
              >
                {
                  this.state.tipoUsuario.map((value) =>
                    <MenuItem value={value.idTipo}>{value.nomeTipo}</MenuItem>
                  )
                }
              </Select>
            </Grid>
            <Grid id="fields_button" item xs={12}>
              <Button id="btn_cadastrar" onClick={this.saveUsuario} variant="contained">Criar usuário</Button>
              <ToastContainer />
            </Grid>
          </Box>
        </Box>
      </Container>
    )
  }

}
