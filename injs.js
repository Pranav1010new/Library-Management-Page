/* <script> */

        function fun() {
            let a = document.getElementById("email").value;
            let b = document.getElementById("password").value;
            if (a == "admin@gmail.com" && b == "prograd") {
                window.location.assign("nextpage.html");
                alert("Login Succesfull");
            }
            else {
                alert("Please enter Email as \"admin@gmail.com\" and Password as \"prograd\"");
            }
        }
    // </script>