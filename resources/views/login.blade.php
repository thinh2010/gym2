@extends('layouts.other')

@section('content')
	<div class="containerFullScreen">
	    <div class="pgTitle"> All UK gyms have been asked to close </div>

	    <div class="subTitle" id="gov"> Due to the onset of COVID-19, the UK government has asked all gyms to close indefinitely.
	    </div>

	    <div class="subTitle" id="goodNews"> But we have some good news! We'll be releasing effective (and fun!) workout and nutrition plans to help you keep your hard-earned results.
	    </div>
	    <div class="subTitle" id="below"> Sign-up below to be one of the first to receive these plans:
	    </div>

	    <div class="egForm">
	      <input class="egInput" id="nameFst" placeholder="First Name" required>
	      <input class="egInput" id="nameLst" placeholder="Last Name" required>
	      <input class="egInput" id="email" placeholder="email" required>
	    </div> <!--egForm-->

	    <div class="btnDiv">
	      <div class="btn" id="btnPg00"> Sign-Up </div>
	    </div>

	  </div> <!--containerFullScreen-->
@endsection