
const { 
    createBot, 
    createProvider, 
    createFlow, 
    addKeyword 
} = require('@bot-whatsapp/bot')
const QRPortal = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const DBProvider = require('@bot-whatsapp/database/mock')


const menuAPI = async () => {

}




const flujoPrincipal = addKeyword(['hola','ole','ola','buenas'])
.addAnswer('Bienvenido a LUDINIS')
.addAnswer('¿Cual es tu gmail?')
.addAnswer('En unos minutos te enviaremos un email',{capture:true},(ctx, {fallBack})=> {


    if(!ctx.body.includes('@')){
        return fallBack()
    }

    console.log('Mensaje entrante: ', ctx.body)
})

const flujoSecundario = addKeyword('gracias').addAnswer('de nada')



const main = async () =>{
    
    const adapterDB = new DBProvider()
    const adapterFlow =  createFlow([flujoPrincipal])
    const adapterProvider = createProvider (WsProvider)
    
    createBot(
        {
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        }
    )
}

QRPortal()
main()
