
var rows = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H'];
var column = [1, 2, 3, 4, 5, 6, 7, 8];
// var board = $('$chessboard');

var chessBoard = function(){
    var count = 0;
           for(var i = 0; i < 8; i++)
           {
             for (var j = 0; j < 8; j++)
               {
                 if(count%8 == 0)
                 {
                   $("#chessboard").append('<div class="spot" style="clear:left"></div>');
     
                 }else{
                   $("#chessboard").append('<div class="spot"></div>');
                   }

           if(((i%2 == 0) && (j%2 != 0)) || ((i%2 != 0) && (j%2 == 0)))
	        {
	          $(".spot").eq(count).addClass("black");
	        }
	        else
	        {
	          $(".spot").eq(count).addClass("white");
	        }
	        count++;

	    
        }
    }
}
$(document).ready(function(){
    chessBoard();
})





// Calculater 
$(document).ready(function() {
    var num_1 = 0;
    var operation = "";
    var num_2 = 0;
    
    $("div.numbers div").click(function() {
      var num = $(this).text();
      $("#input").append(num)
    });
    
    $("div.operators div").click(function() {
      if($("#input").text != "") { 
        num_1 = $("#input").text();
        num_1 = parseInt(num_1);
        operation = $(this).text();
        $("#input").append(operation) 
      }
    });
    
    $("#result").click(function() {
      num_2 = $("#input").text().split("").reverse().join("");
      num_2 = parseInt(num_2);
      num_2 = num_2.toString();
      num_2 = num_2.split("").reverse().join("");
      num_2 = parseInt(num_2);
     
      var answer = "error!";
      if(operation == "+") {
        answer = num_1 + num_2;
      } else if(operation == "-") {
        answer = num_1 - num_2;
      } else if(operation == "*") {
        answer = num_1 * num_2;
      } else if(operation == "/") {
        answer = num_1 / num_2;
      }
      $("#input").empty();
      $("#input").append(answer);
    });
    
    
    $("#clear").click(function() {
      $("#input").empty()
    });
  });
  
  
  function maxminvalue() {
    let arr = [10,50,5,8,0,100,35];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    $("#max").append(max);
    $("#min").append(min);
}
