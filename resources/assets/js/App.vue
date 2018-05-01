<template>
    <div>
        <!--<button class="btn btn-primary" @click="selectedComponent='AppBlue'">Load blue</button>-->
        <!--<button class="btn btn-primary" @click="selectedComponent='AppRed'">Load red</button>-->
        <!--<app-blue></app-blue>-->
        <!--<app-red></app-red>-->
        <router-view></router-view>
    </div>
</template>

<script>
    // import AppServer from  "./components/AppServer.vue"
    import AppBlue from  "./components/AppBlue.vue"
    import AppRed from  "./components/AppRed.vue"

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'on'},
                    { id: 2, status: 'off'},
                    { id: 3, status: 'on'},
                    { id: 4, status: 'off'}
                ],
                selectedComponent:AppRed
            };
        },
        components:{
            // AppServer,
            AppBlue,
            AppRed,
        },
        methods:{
            newQuote(quote){
                this.quotes.push(quote)
            }
    }

    }
</script>

<style scoped>

</style>