<template>
    <div>
    <!--<div >  counter : {{counter}}</div>-->
    <button @click="increment(2)">increment</button>
    <button @click="decrement">decrement</button>
        <input type="text" v-model="myvalue">
        {{myvalue}}
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
     export default{
         data(){
             return{
             }
         },
         props: ['server'],
         methods:{
             ...mapActions([
                 "increment",
                 "decrement",
             ]),

             // myalert(){
             //     alert("hi");
             // },
             //
             // turnOnOff(){
             //     console.log("hi")
             //     if(this.server.status==="off"){
             //         this.server.status="on"
             //     }else{
             //         this.server.status="off"
             //     }
             //     console.log(this.server.status);
             // },
         },
         computed:{
             myvalue:{
                 get(){
                         return this.$store.state.myvalue;
                 },
                 set(myvalue){
                         this.$store.dispatch("updateValue",myvalue);
                 }
             }
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