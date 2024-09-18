# NetFlix GPT

-Create React App
-Configured Tailwind
-Header
-Routing
-Login Form
-Sign Form
-Form Validation
-UseRef Hook
-firebase setup
-Deploying our app to production
-create signUp user account
-Implement signIn user Api
-Created redux store with userSlice.
-Implemented signOut
-Update Profile
-BugFix : SignUp use displayName and profile Picture
 Update.
-BugFix :if the user is not logged in Redirect /browse
 to Login Page and Vice-Versa.
-Unsubscribed to the onAuthStateChanged callback
-Add Hardcoded values to the constants file.
-Registered on TMDB website for movie api's &&
 created  app over there && got access token.
-Get Data from TMDB for now Playing movies list.
-Custom Hook for nowPlayingMovies
-created movesSlice
-Update Store with Movies Data
 Planning For MainContainer and secondary Container
-Fetch data for trailer video 
-Updated store with Trailer video Data
-Embedded the youtube video and make it auto play and
 mute.
-Tailwind classed to make main container look awesome
-Built Secondary Component.
-Built Movie List Component.
-Built Movies Card Component.
-Found Out TMDB Image CDN.
-Made the Browse Page Look amazing with Tailwind CSS.
-Created Some Custom Hooks like useTopRatedMovies,
 UseUpcomingMovies, UsePopularMovies, UseNowPlayingMovies, useMovieTrailer,
-GPT search Page.
-GPT search Bar
-Multi Language Feature in out app.
-Integrate GPT API's(get Open AI key).








# Features

-Login/SignUp Page
-Sign In / Sign Up Form
-Redirect to Browse Page

- Browse Page (After Authentication)
  -Header
  -Main Movie
  -Trailer in Background
  -Title & Description
  -Movie Suggestions
  -Movie List \* N
  -NetFlix GPT
  -Search Bar
  -Movie Suggestions

  we had a bug in our app which was even i am not loggedIn i was able to go to the Browse page, If Iam logged in and try to go to the home page through URL then it was not redirecting me to the Browse page. so we have this BUG because we are not checking authentication. We have this issue also because we are routing from the parent component and not from the children. Now we have to keep checking authentication from a place which will be in our whole app and also in my routerProvider, here that component is out Header component.

🚩 NOTE:while we are building our app and when we make api call we see that our api call is made 2 times, or sometimes most of the things gets called 2 times. This happens because of the STRICT MODE OF REACT.you can see it in index.js
and it only happens in local, it will not happen in your build.
