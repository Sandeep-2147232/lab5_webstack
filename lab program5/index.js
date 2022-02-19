

var xmlDoc
var xmlFile = 'staff.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            xmlDoc = xmlReq.responseXML
            displayTable()
        }
    }
    xmlReq.open('GET', xmlFile, true)
    xmlReq.send()
}

function displayTable()
{
    var i;
    var table = "<tr><th>NAME</th><th>Department</th><th>EMAIL</th><th>PHONE</th><th></th><th>Edit</th><th>Delete</th></tr>"

    var x = xmlDoc.getElementsByTagName("Staff")
    for (i = 0; i < x.length; i++)
    {
        table += "<tr><td>" +
            x[i].getElementsByTagName("Staff-name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Staff-dep")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Staff-emailid")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Staff-phonenum")[0].childNodes[0].nodeValue + "</td><td>" +
            "<td><span class='btnnn' onclick='editRecord(" +i+ ")'>edit</span></td>" +
            "<td><span class='btnnn' onclick='deleteRecord(" +i+ ")'>delete</span></td></tr>"
    }
    document.getElementById("table").innerHTML = table
}

function deleteRecord(i)
{
    y = xmlDoc.getElementsByTagName("Staff")[i]
    var name = y.getElementsByTagName("Staff-name")[0].childNodes[0].nodeValue
      xmlDoc.documentElement.removeChild(y)
        console.log("Record deleted: " + name)
        displayTable()

}

//function to add new record to xml
function addNewRecord()
{
    var i
    var Staff = []
    var x = document.getElementById("addRecordForm")
    Staff = xmlDoc.createElement("Staff")
    Staff[0] = xmlDoc.createElement("Staff-name")
    Staff[1] = xmlDoc.createElement("Staff-dep")
    Staff[2] = xmlDoc.createElement("Staff-emailid")
    Staff[3] = xmlDoc.createElement("Staff-phonenum")
    for(i = 0; i < 4; i++)
    {
        Staff[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        Staff.appendChild(Staff[i])
    }
    xmlDoc.documentElement.appendChild(Staff);
    console.log("Record added: " + x.elements[0].value)
    displayTable()
}
function validate() {

    var nm = document.getElementById("Staff-name").value;
    var ag = document.getElementById("Staff-age").value;
    var em = document.getElementById("Staff-emailid").value;
    var ph = document.getElementById("Staff-phonenum").value;
    var re = /^[7-9][0-9]{9}$/;
    if (re.test(user)) {
        alert("done");
        return true;
    }
    else {

        user2.style.border = "red solid 3px";
        return false;
    }
}