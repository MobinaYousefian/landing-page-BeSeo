{/* <script type = "text/javascript">
   <!--
      function validateEmail() {
         var emailID = document.myForm.EMail.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myForm.EMail.focus() ;
            return false;
         }
         return( true );
      }
   //-->
</script>


<script type = "text/javascript">
   <!--
      // Form validation code will come here.
      function validate() {
      
         if( document.myForm.Name.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            return false;
         }
         if( document.myForm.EMail.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.EMail.focus() ;
            return false;
         }
         if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
            document.myForm.Zip.value.length != 5 ) {
            
            alert( "Please provide a zip in the format #####." );
            document.myForm.Zip.focus() ;
            return false;
         }
         if( document.myForm.Country.value == "-1" ) {
            alert( "Please provide your country!" );
            return false;
         }
         return( true );
      }
   //-->
</script> */}

const form = document.querySelector(".form")
const userName = document.querySelector("#name")
const email = document.querySelector("#email")
const subject = document.querySelector("#subject")
const message = document.querySelector("#message")
const send =  document.querySelector(".send")
const errorMsg = document.querySelector(".error-message")
function formInputValidate() {
    errorMsg.classList.remove("show-error") 
    if( userName.value == "" ) {
        errorMsg.classList.add("show-error")
        errorMsg.innerHTML="* Please enter your Name"
       userName.focus() ;
       return false;
    }
    if( email.value == "" ) {
       errorMsg.classList.add("show-error")
       errorMsg.innerHTML="* Please enter your Email"
       email.focus() ;
       return false;
    }
    if( subject.value == "" ) {
        errorMsg.classList.add("show-error")
        errorMsg.innerHTML="* Please enter your subject"
        subject.focus() ;
        return false;
     }
     if( message.value == "" ) {
        errorMsg.classList.add("show-error")
        errorMsg.innerHTML="* Please enter your message"
        message.focus() ;
        return false;
     }

    return( true );
 }


 function validateEmail() {
    var emailID = email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        errorMsg.classList.add("show-error")
        errorMsg.innerHTML="* Please enter correct Email"
       email.focus() ;
       return false;
    }
    return( true );
 }


form.addEventListener("submit",(e)=>{
    e.preventDefault();
     formInputValidate();
    const isValid=validateEmail()
    if(!errorMsg.classList.contains("show-error") && isValid){
        userName.value = ""
        email.value = ""
        subject.value = ""
        message.value = ""
    }
})