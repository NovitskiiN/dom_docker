module.exports = function createMessage(name, email, password) {
  return {
    from: 'nikit0s95@mail.ru',
    to: email,
    subject: '¡Te has registrado en Ganaclub!',
    html: `
            <h4 style="padding: 10px;background-color: #50526e;color: #fff;">Acceso al GanaClub</h4>
            <h1 style="color: #3f4259">
            Gracias por registrarse, ${name}!</h1>
            <p style="padding:10px;background-color: #f8f9fa;color: #50526e;font-size:18px">
            Aquí están tu login y contraseña de GanaClub:<br/>
            Tu login: ${email} <br/>
            Contraseña: ${password} <br/>
            Conéctate: https://ganaclub.org/login
            </p>
            <h3 style="color: #3f4259">Mis mejores deseos, equipo GanaClub.</h3>
      `,
  };
};
