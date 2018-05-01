<template>
    <button @click="turnOnOff">Switch</button>
</template>

<script>
     export default{
         data(){
             return{
             }
         },
         props: ['server'],
         methods:{
             myalert(){
                 alert("hi");
             },

             turnOnOff(){
                 console.log("hi")
                 if(this.server.status==="off"){
                     this.server.status="on"
                 }else{
                     this.server.status="off"
                 }
                 console.log(this.server.status);
             },
         },
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