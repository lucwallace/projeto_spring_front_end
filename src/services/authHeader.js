export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    const teste = JSON.parse(localStorage.getItem('user'));

    console.log("Testando " + teste.accessToken)

    if (user && user.accessToken) {
        console.log("Entrei no if")
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}