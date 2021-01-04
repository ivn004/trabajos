function login(usuario, contraseña){
    switch(true){
      case usuario == 'ivan' && contraseña == 1234:
        console.log('Bienvenido a nuestro sitio')
        break;
      case usuario != 'ivan' && contraseña == 1234:
        console.log('usuario incorrecto')
        break;
      case usuario == 'ivan' && contraseña != 1234:
        console.log('contraseña incorrecta')
        break;
        case usuario == undefined && contraseña == undefined:
          console.log('Debes ingresar los datos requeridos')
          break; 
      case usuario != 'ivan' && contraseña != 1234:
        console.log('usuario y contraseña incorrectos')
        break;
    }
  }
  login('ivn', 1234)