// Promesas

console.log('Inicio...');

new Promise( (resolve, reject) => {
    // console.log('Cuerpo de la promesa'); // se ejecuta de manera sincrona

    // se ejecuta de manera asyncrona
    setTimeout( () => {

        /*
        para finalizar se puede usar
            - return resolve('Success...'):
            - resolve('Success...');
              return;
        */

        resolve('Success...');
        reject('Error...');

    }, 1000);

}).then( (message) => console.log(message)
).catch( (messageError) => console.log(messageError) 
).finally( () => console.log('Termino ejecución de promesa...'))

console.log('Fin...');
