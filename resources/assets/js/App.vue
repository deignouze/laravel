<template>
    <div>
        <div v-for="server in servers">
            <app-server :server="server"></app-server>
        </div>
    </div>
</template>

<script>
    import AppServer from  "./components/AppServer.vue"
    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'on'},
                    { id: 2, status: 'off'},
                    { id: 3, status: 'on'},
                    { id: 4, status: 'off'}
                ]
            };
        },
        components:{
            AppServer,
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