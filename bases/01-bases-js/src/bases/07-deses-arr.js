

const caracteres = ['Goku', 'Vegeta', 'Trunks'];


const [goku,vegeta,trunks, goten = 'no tiene valor'] = caracteres;


const returnArray = (letters, numbers) => {
    return [ letters, numbers];
}

const [letters, numbers] = returnArray(['QWERT',094]);



console.log(letters, numbers);