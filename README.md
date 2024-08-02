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
  -BugFix : SignUp use displayName and profile Picture Update.
  -BugFix :if the user is not logged in Redirect /browse to Login Page and Vice-Versa.
  -Unsubscribed to the onAuthStateChanged callback
  -Add Hardcoded values to the constants file.
  





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
            -Movie List * N
 -NetFlix GPT
    -Search Bar
    -Movie Suggestions
   

   we had a bug in our app which was even i am not loggedIn i was able to go to the Browse page, If Iam logged in and try to go to the home page through URL then it was not redirecting me to the Browse page. so we have this BUG because we are not checking  authentication.  We have this issue also because we are routing from the parent component and not from the children. Now we have to keep checking authentication from a place which will be in our whole app and also in my routerProvider, here that component is out Header component.