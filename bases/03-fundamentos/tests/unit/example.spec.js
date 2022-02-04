

describe('Example Component', ()=>{
  
  test('Debe de ser mayor a 10', ()=>{

    //Arreglar
    let value = 5;

    //Estimulo
    value = value +2;

    //observa el resultado

    expect(value).toBeGreaterThan( 10 );
  });
});