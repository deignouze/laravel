<template>
    <div>
        <div v-for="(book,i) in books"><li>{{i}} - {{book}}</li></div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                data:{
                    val:0,
                    message:"",
                },
                showH2:true,
                showH1:false,
                books:{
                    "title":"lor",
                    "pages":"5",
                },
            }
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
    $myColor:#fff;
    .active{
        background-color:$myColor;
        width: 100px;
        height: 100px;
    }
    .highlight{
        background-color: red;
    }
    .shrink{
        background-color: blue;
    }
    .cla2{
        border: 3px solid green;
    }
</style>