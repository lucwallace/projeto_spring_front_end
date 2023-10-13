import http from "../config/http-common";

class UsuarioService {

    getAll(){
        return http.get("/usuarios");
    }

    get(id){
        return http.get(`/usuarios/${id}`);
    }

    create(data){
        return http.post("/usuarios/", data);
    }

    update(id, data){
        return http.put(`/usuarios/${id}`, data);
    }

    delete(id){
        return http.delete(`usuarios/${id}`);
    }

}

export default new UsuarioService();