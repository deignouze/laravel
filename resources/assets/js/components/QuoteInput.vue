<template>
    <form>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <textarea class="form-control" rows="3" v-model="quote"></textarea>
            <input type="submit" @click.prevent="createNew">
        </div>
    </form>
</template>

<script>
    export default {
        data: function() {
            return {
                quote: ''
            };
        },
        methods:{
            createNew(){
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style scoped>

</style>