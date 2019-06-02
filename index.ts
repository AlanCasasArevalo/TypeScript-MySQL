import Server from "./src/server/server";
import router from "./src/router/router";

const server = Server.init(3000);

server.app.use(router);

server.start( () => {
    console.log('servidor corriendo en el puerto 3000')
});






















