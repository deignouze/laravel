<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
<style>
    .red{
        border: solid 3px red;
    }

</style>
</head>
<body>
@yield("content")

<script src="{{ asset('js/app.js') }}"></script>
<script>
    // new Vue({
    //     el: '#app',
    //     data: {
    //         attachRed: false,
    //     },
    //     methods: {
    //         changeTitle: function(str) {
    //             this.title = str;
    //         }
    //     }
    // });


</script>
</html>
