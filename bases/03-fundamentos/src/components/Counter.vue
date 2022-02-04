<template>
  <h2>{{verificaTitulo}} </h2>
  <p> {{counter}} <sup>2</sup> = {{ counter * counter}} </p>

  <div>
      <button @:click="increase">+1</button>
      <button v-on:click="decrease">-1</button>

  </div>

</template>

<script>
export default {
    props:{
        title: String,
        start: {
            type: Number,
            default: 100,
            validator(value){
                return value >= 100;
            }
        }
    },
    name: 'holamundo',
    //lo que hace data es que me retorna un objeto reactivo osea que vue esta pendiente a los cambios
    data(){
        return{
            counter: this.start
        }
    },
    methods:{
        getSquareValue(){
            return this.counter * this.counter;
        },
        increase(){
            this.counter++;

        },
        decrease(){
            this.counter--;
            
        }

    },
    //las propiedades computadas se guardan en cache lo cual ayuda a que el proceso sea mas eficiente 
    computed:{
        squareCounter(){
            return this.counter * this.counter;
        },
        verificaTitulo(){
            return this.title ? this.title : 'Salieron';
        }
    }
}
</script>

<style>

button{
    background-color: #64BB87;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}

</style>