$(document).ready(function(){
    function makeMadLib(e) {
      e.preventDefault();
      
      var userNoun = $("#noun").val();
      
      var userAdjective = $("#adjective").val();
    
      var userPerson = $("#person").val();
       
      var obj = {
        noun: userNoun,
        adjective: userAdjective,
        person: userPerson
      };
      
  
    $("#story").append(obj.person + " " + "likes " + obj.adjective+ " " + obj.noun + "!")

     };
    
    

    
    $("#lib-button").on("click", function(e){
      makeMadLib(e);
    });
    
    });