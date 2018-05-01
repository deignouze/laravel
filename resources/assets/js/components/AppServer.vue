<template>
    <div style="margin: 5px">
        <server-status :server="server"></server-status>
        <server-switch  :server="server"></server-switch>
    </div>
</template>

<script>
    import ServerStatus from "./ServerStatus.vue"
    import ServerSwitch from "./ServerSwitch.vue"
    export default{
        data(){
            return{
                state:"on",
            }
        },
        props: ['server'],
        components:{
            ServerStatus,
            ServerSwitch,
        },
        $on:{

        },
        methods:{
            myalert(){
                alert("hi");
            },

            start(){
                let vm=this;
                setInterval(function(){
                        vm.showH1=!vm.showH1;
                        vm.showH2=!vm.showH1;
                },1000)
            },
        },
        // computed:{
        //     age:function(){
        //         return this.data.age*3;
        //     }
        // },
        //
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