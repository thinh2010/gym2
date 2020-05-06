<!DOCTYPE html>
<html>
<title>{{ config('app.name', 'Low Cost Gym | No Contract | Gyms Near Me - vGym') }}</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="{{ asset('gym/css/login.css') }}" rel="stylesheet">


<body>

<!-- Top Toolbar -->
<div id="toolbar">
  <div class="containerFullScreen">
    <div id="logoTitle"><a href="/">vGym</a></div>
    <div id="toolbarOptions">

    </div> <!--toolbarOptions-->
    <div id="menuBtn"> &equiv;</div>
  </div> <!--containerFullScreen-->
</div> <!-- toolbar -->


<div id="separator">
</div>



<div id="pg00" class="page">
  @yield('content')
  
</div> <!--pg00-->

</body>

</html>
