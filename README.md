# Sphinx-Routes-HackJam

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SignUp</title>
  <link rel="stylesheet" href="signupstyless.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=play_arrow" />
  <link href="https://fonts.googleapis.com/css2?family=Stack+Sans+Text:wght@200..700&display=swap" rel="stylesheet">
  <script src="loginform.js" defer></script>
</head>
<body>

<h1 id="title">Sign up</h1>
    <fieldset class="color">
    <form>
        <div>
            <label id="name-label" for="name">Full Name: <input placeholder="Enter your full name" id="name" name="name" type="text" required /></label>
        </div>
        <div>
        <label class="margin" id="email-label" for="email">Email: <input placeholder="Enter your email" id="email" name="email" type="email" required /></label>
        </div>
        <div>
            <label class="margin" id="username" for="username">Username: <input placeholder="Username" id="username" name="username" type="text" required /></label>
        </div>
        <div>
             <label class="margin" id="password-label" for="password">Password: <input placeholder="Password" id="password" name="password" type="text" required /></label>
        </div>
        <div>
            <label class="margin"id="weight" for="weight">Weight:<input placeholder="Weight in Oz" min="0" max="60000" id="number" name="weight" type="number" required /></label>
    
        </div>
    <div>
        <label class="margin" id="camel-color" for="camel-color">Color of the rope on the camel in the last page: <input placeholder="Purple" id="camel-color" name="camel-color" type="text" required /></label>
    </div>
    <div>
        <label class="margin" id="child-label" for="child">Do you agree to signing away your first child?: <input placeholder="Yes or No" id="child" name="child" type="text" required /></label>
    </div>
<div>
    <label class="margin"id="ruler" for="ruler">Oldest ruler in Egypt:<input placeholder="idk bro google it" id="ruler" name="ruler" type="text" required /></label>
    
</div>
<div>
    <label class="margin" id="intro-song" for="intro-song">What would the intro song to your life be? <input placeholder="It better not be something stupid" id="intro-song" name="intro-song" type="text" required /></label>
</div>

<div>
    <button class="inline" id="play-button">
  <span class="material-symbols-outlined">play_arrow</span>
</button>
<label class="inline" id="sound-label" for="sound">
  Write what you just heard 
  <input placeholder="sound" id="sound" name="sound" type="text" required />
</label>

</div>
    <input id="submit" type="submit" value="Sign up">

    <p class="center">Already have an Account? <a href="login.html">login</a> </p>
</form>
 </fieldset>
</body>
</html>