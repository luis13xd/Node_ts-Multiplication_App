import { yarg } from "./config/plugins/args.plugin"
import { ServerApp } from "./presentation/server-app";

//console.log(process.argv)

///console.log(yarg.b)

//funcion anonima autoinvocante asyncrona
(async() => {
   await main();
})();

async function main() {

    const { b:base, l:limit, s:show, n:fileName, d:fileDestination } = yarg;
   
    ServerApp.run({ base, limit, show, fileName, fileDestination });
}
