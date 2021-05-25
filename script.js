function adduser() {
    //player 1
    player1_name = document.getElementById("player_1_name").value;
    localStorage.setItem("player1_name", player1_name);
    //player 2
    player2_name = document.getElementById("player_2_name").value;
    localStorage.setItem("player2_name", player2_name);
    //checking if names are not given
    if (player1_name, player2_name == "") {
        window.alert("Please input your names in the input field.")
    } else {
        window.location = "game_page.html";

    }

}

//game page js

var player_1 = localStorage.getItem("player1_name");
var player_2 = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML = player_1;
document.getElementById("player2_name").innerHTML = player_2;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn is :" + player_1;
document.getElementById("player_answer").innerHTML = "Answer turn is :" + player_2;

function send() {
    get_num1 = document.getElementById("num1").value;
    get_num2 = document.getElementById("num2").value;
    actual_answer = parseInt(get_num1) * parseInt(get_num2);
    console.log(actual_answer);

    question_number = "<h4>" + get_num1 + " X " + get_num2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check() {
    get_answer = document.getElementById("input_check_box").value;

    if (get_answer == actual_answer) {
        if (answer_turn == "player_1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        if (question_turn == "player_1") {
            question_turn = "player_2";
            document.getElementById("player_question").innerHTML = "question turn- " + player_2;
        } else {
            question_turn = "player_1";
            document.getElementById("player_question").innerHTML = "question turn- " + player_1;
        }

        if (answer_turn == "player_1") {
            answer_turn = "player_2";
            document.getElementById("player_answer").innerHTML = "answer turn- " + player_2;
        } else {
            answer_turn = "player_1";
            document.getElementById("player_answer").innerHTML = "answer turn- " + player_1;
        }
        document.getElementById("output").innerHTML = "";
        window.alert("🎉You got it right🎉");
        document.getElementById("input").innerHTML = row2;
    } else {
        document.getElementById("input_check_box").value = "";
        window.alert("Oops! You failed. Please try again.");
        document.getElementById("input").innerHTML = row2;
    }
}