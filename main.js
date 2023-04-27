const app=Vue.createApp({
    data(){
        return{
            message:'Holaaaa WG7',
            jugadores:[
                {
                    id:1,
                    name:'Ronaldo',
                    dorsal:9
                },
                {
                    id:2,
                    name:'Messi',
                    dorsal:10
                },
                {
                    id:1,
                    name:'Cristiano Ronaldo',
                    dorsal:7
                }
                
            ]
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
    props:['player'],
    template:`
        <div class='text-center'>
        <strong>{{player.name}}</strong>:
        <span>{{player.dorsal}}</span>    
        </div>
    `

});
