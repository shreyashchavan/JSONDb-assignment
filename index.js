var jpdbBaseURL = 'http://api.login2explore.com:5577';
var jpdbIRL = '/api/irl';
var jpdbIML = '/api/iml';
var StudenDb = "STUDENT";
var StudRel = "STD-REL";
var connToken = '90932312|-31949271360857681|90954214';

$('#roll-no').focus();

function saveRecNo2LS(jsonObj){
    var lvdata = JSON.parse(jsonObj.data);
    localStorage.setItem('recno', lvdata.rec_no);
}

function getRollnoAsJsonObj(){
    var rollno = $("#roll-no").val();
    var jsonStr ={
        rollno: rollno
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj){
    saveRecNo2LS(jsonObj);
    var data = JSON.parse(jsonObj.data).record;
    $("#full-name").val(data.name);
    $("#class").val(data.clas);
    $("#birth-date").val(data.dob);
    $("#address").val(data.address);
    $("#enrollment-date").val(data.enrol);
}

function reset() {
    $('#roll-no').val("");
    $('#full-name').val("");
    $('#class').val("");
    $('#birth-date').val("");
    $('#address').val("");
    $('#enrollment-date').val("");
    $('#save-button').prop("disabled", true);
    $('#update-button').prop("disabled", true);
    $('#reset-button').prop("disabled", true);
    location.reload();
}

function validatedata(){
    var rollno, name, clas, dob, address, enrol;
    rollno= $('#roll-no').val();
    name = $('#full-name').val();
    clas = $('#class').val();
    dob = $('#birth-date').val();
    address= $('#address').val();
    enrol= $('#enrollment-date').val();

    if (rollno === ''){
        alert('Roll Number Missing');
        $("#roll-no").focus();
        return "";
    }
    if (name === ''){
        alert('Name Missing');
        $("#full-name").focus();
        return "";
    }
    if (clas === ''){
        alert('class Missing');
        $("#class").focus();
        return "";
    }
    if (rollno === ''){
        alert('Roll Number Missing');
        $("#roll-no").focus();
        return "";
    }

    var dobDate = new Date(dob);
    var enrolDate = new Date(enrol);
    if(dobDate > enrolDate) {
        alert("Date of birth should be less than enrollment date");
        return "";
    }
    var jsonStrObj ={
        rollno: rollno,
        name : name,
        clas : clas,
        dob: dob,
        address: address,
        enrol:enrol

    };
    return JSON.stringify(jsonStrObj);
}

function save(){
    var jsonStrObj = validatedata();
    if(jsonStrObj === ""){
        return "";
    }
    var putRequest = createPUTRequest(connToken, jsonStrObj, StudenDb, StudRel);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    reset();
    $("#roll-no").focus();
}

function update(){
    $("#update-button").prop('disabled', true);
    jsonChg = validatedata();
    var updateRequest = createUPDATERecordRequest(connToken, jsonChg, StudenDb, StudRel, localStorage.getItem('recno'));
    jQuery.ajaxSetup({async:false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async:true});
    console.log(resJsonObj);
    reset();
    $("#roll-no").focus();
}

function getno(){
    var rollno = getRollnoAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, StudenDb, StudRel, rollno);
    jQuery.ajaxSetup({async:false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});
    if(resJsonObj.status == 400){
        $("#save-button").prop('disabled', false);
        $("#reset-button").prop('disabled', false);
        $("#full-name").focus();
    } else if (resJsonObj.status === 200){
        $('#roll-no').prop('disabled', true);
        fillData(resJsonObj);
        $("#update-button").prop('disabled', false);
        $("#reset-button").prop('disabled', false);
        $('#save-button').prop('disabled', true);
        $("#full-name").focus();
    }
}

