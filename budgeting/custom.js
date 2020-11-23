$(document).ready(function(){
    var person = " ";
    var budget = 0;
    var needs = 0;
    var savings = 0;
    var wants = 0;
    
    $("#begin").on('click',function myBudget() {
        person = prompt('Tell me your name or ID.');
        budget = parseInt(prompt('Tell me your monthly salary.'));
        needs = budget*0.5;
        savings= budget*0.2;
        wants = budget*0.3;
        $("#part1").append("Hello " + person + " Here is your budget for this month.<br> Needs: " + needs  + "savings: <br> " +savings  + "wants: <br> " +wants )
    });



    function inputYourNeeds(){
        var spendingOnFood = parseInt(prompt('how much they spend on food?'));
        needs = needs-spendingOnFood;
        var spendingOnhousing = parseInt(prompt('how much they spend on housing?'));
        needs = needs-spendingOnhousing;
        var billsNLoan = parseInt(prompt('how much they spend on bills and loans?'));
        needs = needs-billsNLoan;
        var healthcare = parseInt(prompt('how much they spend on healthcare?'));
        needs = needs-healthcare;
        var transportation = parseInt(prompt('how much they spend on transportation?'));
        needs = needs-transportation;
        var others = parseInt(prompt('how much they spend on other essentials?'));
        needs = needs-others;

         
        if (needs<0) {
            $("#part2").append("Remaining amount for needs: " + needs + " <br> savings: <br> " +savings  + " <br> wants: <br> " + wants );
        } else {
                $("#part2").append("You are doing great!");
            }
    }

    $("#input").on('click',function inputYourNeeds() {
        inputYourNeeds();

    });

    

    $("#emergency").on('click',function EmergencyFund() {
        emergency = parseInt(prompt(' how much will you put towards you emergency fund?'));
        if (emergency>savings){
            $("#part3").append("That’s too much. Try a smaller amount");
        } else {            
            value=emergency-savings
    }

    $("#part3").append(" Needs: " + needs  + "savings: <br> " +savings  + "wants: <br> " +wants )
});


var person = " ";
    var budget = 0;
    var needs = 0;
    var savings = 0;
    var wants = 0;
    
    $("#restart").on('click',function startOver() {
        $("p").empty();
    });

});
