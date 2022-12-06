var bm;

function fogotpassword() {

    var m = document.getElementById("forgotPasswordModel");

    bm = new bootstrap.Modal(m);
    bm.show();

}

function chng_pswrd_type() {

    var pswrdfield = document.getElementById("Mpswd");
    var pswrdicon = document.getElementById("pswrdicon");

    // alert(pswrdfield.type);

    if (pswrdfield.type == "password") {
        pswrdfield.type = "text";
        pswrdicon.innerHTML = "<i class='bi bi-eye-slash'></i>";
    } else if (pswrdfield.type = "text") {
        pswrdfield.type = "password";
        pswrdicon.innerHTML = "<i class='bi bi-eye'></i>";
    }

}

function Mlogin() {
    var Munm = document.getElementById("Munm");
    var Mpswd = document.getElementById("Mpswd");
    var Mrm = document.getElementById("Mrm");

    var MunmSM = document.getElementById("MunmSM");
    var MpswdSM = document.getElementById("MpswdSM");

    var MtitleSM = document.getElementById("MtitleSM");

    // alert(Mrm.checked);

    var f = new FormData();
    f.append("Munm", Munm.value);
    f.append("Mpswd", Mpswd.value);
    f.append("Mrm", Mrm.checked);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                // alert(text);

            if (text == "Please Enter Your Username") {
                MunmSM.innerHTML = text;
                MunmSM.style.display = "inline";
                MpswdSM.style.display = "none";
            } else if (text == "Please Enter Your Password") {
                MunmSM.style.display = "none";
                MpswdSM.innerHTML = text;
                MpswdSM.style.display = "inline";
            } else if (text == "1") {
                MunmSM.style.display = "none";
                MpswdSM.style.display = "none";
                MtitleSM.innerHTML = text;
                MtitleSM.style.color = "green";
                // MtitleSM.style.display = "inline";
                window.location = "patient.php";
            } else if (text == "2") {
                MunmSM.style.display = "none";
                MpswdSM.style.display = "none";
                MtitleSM.innerHTML = text;
                MtitleSM.style.color = "green";
                // MtitleSM.style.display = "inline";
                window.location = "admin.php";
            } else if (text == "3") {
                MunmSM.style.display = "none";
                MpswdSM.style.display = "none";
                MtitleSM.innerHTML = text;
                MtitleSM.style.color = "green";
                // MtitleSM.style.display = "inline";
                window.location = "doctor.php";
            } else {
                MunmSM.style.display = "none";
                MpswdSM.style.display = "none";
                MtitleSM.innerHTML = text;
                MtitleSM.style.display = "inline";
            }

        }
    }

    r.open("POST", "login_process.php", true);
    r.send(f);

}

//==========================admin=========================================================================================================

function THdash() {
    document.getElementById("THdash").style.display = "block";
    document.getElementById("THprofile").style.display = "none";
    document.getElementById("THlessons").style.display = "none";
    document.getElementById("THassignments").style.display = "none";
}

function THprofile() {
    document.getElementById("THdash").style.display = "none";
    document.getElementById("THprofile").style.display = "block";
    document.getElementById("THlessons").style.display = "none";
    document.getElementById("THassignments").style.display = "none";
}

function THstudents() {
    document.getElementById("THdash").style.display = "none";
    document.getElementById("THprofile").style.display = "none";
    document.getElementById("THlessons").style.display = "none";
    document.getElementById("THassignments").style.display = "none";
}

function THChannel() {
    document.getElementById("THdash").style.display = "none";
    document.getElementById("THprofile").style.display = "none";
    document.getElementById("THlessons").style.display = "block";
    document.getElementById("THassignments").style.display = "none";
}

function THReports() {
    document.getElementById("THdash").style.display = "none";
    document.getElementById("THprofile").style.display = "none";
    document.getElementById("THlessons").style.display = "none";
    document.getElementById("THassignments").style.display = "block";
}


//=================================admin==============================================================

function d_ch_slct() {
    var specid = document.getElementById("dchnlspecility").value;


    var f = new FormData();
    f.append("specid", specid);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            document.getElementById("docchnl").innerHTML = text;

        }
    }

    r.open("POST", "doctors_chnl.php", true);
    r.send(f);
}

function admin_logout() {

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            if (text == 'success') {
                window.location = 'index.php';
            }

        }
    }

    r.open("POST", "admin_logout.php", true);
    r.send();
}

function patient_logout() {

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            if (text == 'success') {
                window.location = 'index.php';
            }

        }
    }

    r.open("POST", "patient_logout.php", true);
    r.send();
}

function doctor_logout() {

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            if (text == 'success') {
                window.location = 'index.php';
            }

        }
    }

    r.open("POST", "doctor_logout.php", true);
    r.send();
}

function doctorDetails(did, dname) {
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                // alert(text);

            document.getElementById("docdtails").innerHTML = text;

        }
    }

    var f = new FormData();
    f.append("did", did);
    f.append("dname", dname);

    r.open("POST", "d_chnl_details.php", true);
    r.send(f);
}

function d_chnl_back() {
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                // alert(text);

            document.getElementById("docdtails").innerHTML = text;

        }
    }

    r.open("POST", "patient_d_chnl.php", true);
    r.send();
}

function make_appointment(chnlid) {
    alert(chnlid);
}