//clien-id=816465474275-7ktqbknm1pq9gn98hsr6ub47q89kdul9.apps.googleusercontent.com

//client-secret=gYMQ8D07afBj5nR4R-tlSMkl

$(document).ready(function(){
     
     // client id of the project

     var clientId = "816465474275-7ktqbknm1pq9gn98hsr6ub47q89kdul9.apps.googleusercontent.com";

     // redirect_uri of the project

     var redirect_uri = "https://riaz7865.github.io/world/upload.html;

     // scope of the project

     var scope = "https://www.googleapis.com/auth/drive";

     // the url to which the user is redirected to

     var url = "";


     // this is event click listener for the button

     $("#login").click(function(){

        // this is the method which will be invoked it takes four parameters

        signIn(clientId,redirect_uri,scope,url);

     });

     function signIn(clientId,redirect_uri,scope,url){
      
        // the actual url to which the user is redirected to 

        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";

        // this line makes the user redirected to the url

        window.location = url;




     }



});
