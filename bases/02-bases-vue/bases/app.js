//hay dos formas de programacion, la de option API y composition API


const app = Vue.createApp({
    // template:`
    // <h1>Hola mundo</h1>
    // <p> desde app.js<p/>
    // `

    data() {
        return {
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(){
            this.author = 'Juan Pedro';
            this.capitalize();
        },
        capitalize(){
            this.quote = this.quote.toUpperCase();
        }
    },
});

app.mount('#myApp');