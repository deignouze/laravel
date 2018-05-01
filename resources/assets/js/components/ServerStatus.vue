<template>
    <div>
        {{server.id}} : {{server.status}}
    </div>
</template>

<script>
     export default{
         data(){
             return{
                 status:"off"
             }
         },
         props: ['server'],
         methods:{

         },
         // created() {
         //     bus.$on('serverSelected', (server) => {
         //         this.server = server;
         //     });
         // },

         // computed:{
         //     age:function(){
         //         return this.data.age*3;
         //     }
         // },

         // watch:{
         //     age:function(){
         //         console.log("triggered");
         //
         //     }
         // },

    }
</script>
<style lang="scss">
</style>