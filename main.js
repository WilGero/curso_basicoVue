const app=Vue.createApp({
    data(){
        return{
            message:'Holaaaa WG7',
            textSize:1,
            jugador:{
                    id:1,
                    name:'Ronaldo',
                    dorsal:9
                },
        }
    },
    methods:{
        agrandar(size){
            this.textSize += size;
        }
    }
});

app.component('button-count',{
    data(){
        return{
            counter:0
        }
    },
    template: `
        <button class='btn btn-primary' @click='counter++'>Hiciste {{counter}} clicks</button>
    `
});
app.component('jugador-info',{
    data(){
        return{

        }
    },
    props:['jugador'],
    template:`
        <div class='text-center'>
            <strong>{{jugador.name}}</strong>:
            <span>{{jugador.dorsal}}</span> <br>
            <slot></slot>
            <button @click="$emit('agrandarTexto',0.2)" class='btn btn-success' >+</button>    
        </div>
    `

});
