<template>
    <div>RED<br>{{increment}}</div>
</template>

<script>
     export default{
         data(){
             return{
             }
         },
         props: ['server'],
         methods:{

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
         computed:{
             increment(){
                 return this.$store.getters.doubleCounter;
             },
         },

         // watch:{
         //     age:function(){
         //         console.log("triggered");
         //
         //     }
         // },

    }
</script>
<style lang="scss" scoped>

    div{
        width: 100px;
        height: 100px;
    }
</style>