$(document).ready(function(){
    var person = " ";
    var budget = 0;
    var needs = 0;
    var savings = 0;
    var wants = 0;
    
    function myBudget() {
            person = prompt('Tell me your name or ID.');
            budget = parseInt(prompt('Tell me your monthly salary.'));
            needs = (budget*0.5);
            savings= budget*0.2;
            wants = budget*0.3;
   
            $("#part1").append("Hello " + person + "!" +
            " Here is your budget for this month.<br> Needs: $" + needs  +
            "<br> savings: $" +savings  + 
            "<br> wants:  $" +wants );
    }  
    
    $("#begin").on('click',function() {
        myBudget();
    });

    function inputYourNeeds(){
        var spendingOnFood = parseInt(prompt('How much they spend on food?'));
        var spendingOnhousing = parseInt(prompt('How much they spend on housing?'));
        var billsNLoan = parseInt(prompt('How much they spend on bills and loans?'));
        var healthcare = parseInt(prompt('How much they spend on healthcare?'));
        var transportation = parseInt(prompt('How much they spend on transportation?'));
        var others = parseInt(prompt('How much they spend on other essentials?'));
        needs = needs-spendingOnFood-spendingOnhousing-billsNLoan-healthcare-transportation-others;
        // needs = needs-wants;
        $("#part2").append("Remaining amount for needs: " + needs);

        if (needs<0) {
            $("#part2").append("<br>You are $" + needs + " over budget. You will have to reduce the reamount of money form your wants. <br> Needs: $" + needs  +
            "<br> savings: $" +savings  + 
            "<br> wants:  $" +wants);
        } else {
            "You are doing great!"
        }
    }

    $("#input").on('click',function() {
        inputYourNeeds();
    });
         

    function emergencyFund(){
        $("#money").hide();

        var funds = parseInt(prompt('How much will you put towards yout emergency fund?'));
        var amount=funds-savings

        if (funds>savings) {
            prompt("$" + amount + " That’s too much. Try a smaller amount")
        } else {
            alert("$" + amount)
        }
        $("#part3").append("<br>Your emergency funds: $" + funds + "<br> savings: $" +savings  + 
        "<br> wants:  $" +wants);
    }

    $("#emergency").on('click',function() {
        emergencyFund();
    });
         

    function startOver(){
        $("p").empty();
    }

    $("#retart").on('click',function() {
        startOver()
    });

  });