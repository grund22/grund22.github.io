//Validation of Contact form
function validation(theForm){
    //sets variable and looks at their value
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var feedback = document.getElementById("feedback").value;
        //checks to see if the name field is blank 
        if( name ===''){
            alert("Please fill in your Name!");
            return false;
        }
        //checks to see if the email field is blank
        else if( email ===''){
            alert("Please fill in your E-mail!");
            return false;
        }
        //checks to see if the message field is left blank
        else if( feedback ===''){
            alert("Please fill in your Message!");
            return false;
        }
        //if everything is filled in properly returns a message
        else{
            alert('Thank you, ' + name + ', your message: "' + feedback + '" has been sent to! Have a great day!')
            return true;
        }
}