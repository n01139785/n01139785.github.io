//1 = 100, 2 = 80, 3 = 70, 4 = 50, 5 = 30, 6 = 20, 7 = 10, 8 = 0

class Mission {
    constructor(Name, Personal_Evangelism, Medical, Construction, Kids_Ministry, Senior_adults, Leading_Worship, Church_Leadership_Training, Community_Outreach, AgeGroup) {
        this.Name = Name;
        this.Personal_Evangelism = Personal_Evangelism;
        this.Medical = Medical;
        this.Construction = Construction;
        this.Kids_Ministry = Kids_Ministry;
        this.Senior_adults = Senior_adults;
        this.Leading_Worship = Leading_Worship;
        this.Church_Leadership_Training = Church_Leadership_Training;
        this.Community_Outreach = Community_Outreach;
        this.AgeGroup = AgeGroup;
        this.total = 0;
    }

}



    var Montreal_1 = new Mission("Montreal", 120, 0, 0, 110, 0, 0, 0, 130, "Adults");
    var Montreal_2 = new Mission("Montreal", 130, 0, 0, 0, 0, 0, 110, 120, "Adults");
    var Montreal_2_2= new Mission("Montreal", 130, 0, 0, 0, 0, 0, 110, 120, "Family");
    var Montreal_3 = new Mission("Montreal", 106, 0, 0, 56, 0, 76, 16, 106, "College");

    //var Haiti_1 = new Mission("Haiti", 0, 10, 70, 80, 20, 30, 50, 100, "Single Adults");
    var Haiti_2 = new Mission("Haiti", 0, 10, 70, 80, 20, 30, 50, 100, "College");
    var Haiti_2_2 = new Mission("Haiti", 0, 10, 70, 80, 20, 30, 50, 100, "Adults");

    var Guatemala_1 = new Mission("Guatemala", 90, 90, 90, 0, 0, 0, 0, 90, "Adults");
    var Guatemala_2 = new Mission("Guatemala", 90, 0, 90, 90, 0, 0, 0, 90, "Family");
    var Guatemala_3 = new Mission("Guatemala", 90, 0, 90, 90, 0, 0, 0, 90, "College");
    var Guatemala_4 = new Mission("Guatemala", 90, 0, 90, 90, 0, 0, 0, 90, "High School ");

    var Kuala_Lumpur = new Mission("Kuala Lumpur", 100, 10, 0, 70, 20, 50, 30, 80, "Adults");

    var Miami = new Mission("Miami", 100, 20, 10, 80, 0, 30, 50, 70, "Family");

    var Puerto_Rico_1 = new Mission("Puerto Rico", 106, 0, 0, 86, 0, 36, 56, 76, "Family");
    var Puerto_Rico_2 = new Mission("Puerto Rico", 50, 0, 70, 100, 10, 30, 80, 20, "College");
    var Puerto_Rico_2_2 = new Mission("Puerto Rico", 50, 0, 70, 100, 10, 30, 80, 20, "Adults");

    var London = new Mission("London", 130, 0, 0, 0, 0, 0, 110, 120, "College");
    var London_1 = new Mission("London", 130, 0, 0, 0, 0, 0, 110, 120, "High School");

    var Cuba = new Mission("Cuba", 10, 20, 100, 70, 50, 30, 80, 0, "Adults");

    var Harvest_City = new Mission("NYC/Jersey City", 70, 0, 10, 50, 30, 20, 100, 80, "High School");
    var Harvest_City_1 = new Mission("NYC/Jersey City", 70, 0, 10, 50, 30, 20, 100, 80, "Family");

    var Romania_1 = new Mission("Romania", 80, 10, 0, 100, 20, 70, 30, 50, "College");
    var Romania_1_2 = new Mission("Romania", 80, 10, 0, 100, 20, 70, 30, 50, "Family");
    var Romania_1_3 = new Mission("Romania", 80, 10, 0, 100, 20, 70, 30, 50, "Adults");
    var Romania_1_4 = new Mission("Romania", 80, 10, 0, 100, 20, 70, 30, 50, "High School");



    let Mission_Trips = [];

    Mission_Trips = [
        Montreal_1,
        Montreal_2,
        Montreal_2_2,
        Montreal_3,
      //  Haiti_1,
        Haiti_2,
        Haiti_2_2,
        Guatemala_1,
        Guatemala_2,
        Guatemala_3,
        Guatemala_4,
        Kuala_Lumpur,
        Miami,
        Puerto_Rico_1,
        Puerto_Rico_2,
        Puerto_Rico_2_2,
        London,
        London_1,
        Cuba,
        Harvest_City,
        Harvest_City_1,
        Romania_1,
        Romania_1_2,
        Romania_1_3,
        Romania_1_4
    ];



var User = new Mission("User", 0, 0, 0, 0, 0, 0, 0, 0, "");





var Attributes;
function myFunction() {

    // var    Attributes = [
    //     document.getElementById("Att1").value.split(","),
    //     document.getElementById("Att2").value.split(","),
    //     document.getElementById("Att3").value.split(","),
    //     document.getElementById("Att4").value.split(","),
    //     document.getElementById("Att5").value.split(","),
    //     document.getElementById("Att6").value.split(","),
    //     document.getElementById("Att7").value.split(","),
    //     document.getElementById("Att8").value.split(",")
    //     ];
    let i = 0;

// for(i=0; i < Attributes.length; i++){
//     if("Personal_Evangelism" === Attributes[i][0]){
//         User.Personal_Evangelism = Attributes[i][1];
//     }
//     if("Medical" === Attributes[i][0]){
//         User.Medical = Attributes[i][1];
//     }
//     if("Construction" === Attributes[i][0]){
//         User.Construction = Attributes[i][1];
//     }
//     if("Kids_Ministry" === Attributes[i][0]){
//         User.Kids_Ministry = Attributes[i][1];
//     }
//     if("Senior_adults" === Attributes[i][0]){
//         User.Senior_adults = Attributes[i][1];
//     }
//     if("Leading_Worship" === Attributes[i][0]){
//         User.Leading_Worship = Attributes[i][1];
//     }
//     if("Church_Leadership_Training" === Attributes[i][0]){
//         User.Church_Leadership_Training = Attributes[i][1];
//     }
//     if("Community_Outreach" === Attributes[i][0]){
//         User.Community_Outreach = Attributes[i][1];
//     }

//}
User.AgeGroup = check()

    for(i=0;i < Mission_Trips.length;i++){
        if(Mission_Trips[i].AgeGroup === User.AgeGroup) {
            Mission_Trips[i].total = Score(Mission_Trips[i], User);
        }
        if( Mission_Trips[i].AgeGroup === "Family" && User.AgeGroup === "Middle School"){
            Mission_Trips[i].total = Score(Mission_Trips[i], User);
        }
    }

    Mission_Trips.sort(function(a, b){return a.total-b.total});
dupeCheck();
    //location.assign("Results.html");

        document.getElementById("Part1").innerHTML = `<h2>Here Are Your Mission Matches!</h2>  
<textarea id="Result1" readonly><</textarea> <br> <textarea id="Result2" readonly><</textarea> <br> <textarea id="Result3" readonly><</textarea><br>
<p>Go check out the booths located under the welcome pavilion or the link below for more information.</p>
<br> <a  href="https://app.managedmissions.com/OurTrips/4780" target="_blank">
Current Trips
</a>`

    result();

    return false
}

function check() {
    var age;
    if(document.getElementById("Middle School").checked === true){
        age = "Middle School"
    }

    if(document.getElementById("Adults").checked === true){
        age = "Adults"
    }

    if(document.getElementById("Family").checked === true){
        age = "Family"
    }

    if(document.getElementById("College").checked === true){
        age = "College"
    }

    if(document.getElementById("High School").checked === true){
        age = "High School"
    }
    return age;
}

function check2(name){
var values;
var i;
    if(name==="Personal_Evangelism") {
         values = document.getElementsByName("Personal_Evangelism");
        for ( i = 0; i < values.length; i++) {
            if (values[i].checked) {
                User.Personal_Evangelism = values[i].value;
            }
        }
    }

    if(name==="Medical") {
         values = document.getElementsByName("Medical");
        for ( i = 0; i < values.length; i++) {
            if (values[i].checked) {
                User.Medical = values[i].value;
            }
        }
    }

    if(name==="Construction") {
         values = document.getElementsByName("Construction");
        for ( i = 0; i < values.length; i++) {
            if (values[i].checked) {
                User.Construction = values[i].value;
            }
        }
    }

    if(name==="Kids_Ministry") {
        values = document.getElementsByName("Kids_Ministry");
        for ( i = 0; i < values.length; i++) {
            if (values[i].checked) {
                User.Kids_Ministry = values[i].value;
            }
        }
    }

    if(name==="Senior_adults") {
         values = document.getElementsByName("Senior_adults");
        for ( i = 0; i < values.length; i++) {
            if (values[i].checked) {
                User.Senior_adults = values[i].value;
            }
        }
    }

    if(name==="Leading_Worship") {
        values = document.getElementsByName("Leading_Worship");
        for ( i = 0; i < values.length; i++) {
            if (values[i].checked) {
                User.Leading_Worship = values[i].value;
            }
        }
    }

    if(name==="Church_Leadership_Training") {
         values = document.getElementsByName("Church_Leadership_Training");
        for ( i = 0; i < values.length; i++) {
            if (values[i].checked) {
                User.Church_Leadership_Training = values[i].value;
            }
        }
    }

    if(name==="Community_Outreach") {
        values = document.getElementsByName("Community_Outreach");
        for ( i = 0; i < values.length; i++) {
            if (values[i].checked) {
                User.Community_Outreach = values[i].value;
            }
        }
    }
}

function result() {
    var top3 = [ Mission_Trips[(Mission_Trips.length-1)].Name, Mission_Trips[(Mission_Trips.length-2)].Name, Mission_Trips[(Mission_Trips.length-3)].Name ]
    document.getElementById("Result1").innerText = top3[0];
    document.getElementById("Result2").innerText = top3[1];
    document.getElementById("Result3").innerText = top3[2];
}

function dupeCheck(){
    let check = false;
    let a, b ,c;
    while(check === false) {
        a = Mission_Trips[(Mission_Trips.length - 1)];
        b = Mission_Trips[(Mission_Trips.length - 2)];
        c = Mission_Trips[(Mission_Trips.length - 3)];


         if(a.Name===b.Name){
             Mission_Trips[Mission_Trips.length-2].total = 0;
         }
         if(a.Name===c.Name){
             Mission_Trips[(Mission_Trips.length - 3)].total = 0;
         }
         if(b.Name===c.Name) {
             Mission_Trips[(Mission_Trips.length - 3)].total = 0;
         }
        Mission_Trips.sort(function(a, b){return a.total-b.total});
        a = Mission_Trips[(Mission_Trips.length - 1)];
        b = Mission_Trips[(Mission_Trips.length - 2)];
        c = Mission_Trips[(Mission_Trips.length - 3)];
        console.log(a);
        console.log(b);
        console.log(c);
        if (a.Name === b.Name || a.Name === c.Name || b.Name === c.Name) {
            console.log(a);
            console.log(b);
            console.log(c);
            //console.log(Mission_Trips);
            check = false;
        }
        check = true
    }


}


User.setAtt = function(){

}


function Compare(Mission, User) {
if(Mission>User){
    return User;
}
else{
    return Mission;
}
}

function Score(Mission, User) {
    var M1 = Compare(Mission.Personal_Evangelism,User.Personal_Evangelism);
    var M2 = Compare(Mission.Church_Leadership_Training,User.Church_Leadership_Training);
    var M3 = Compare(Mission.Medical,User.Medical);
    var M4 = Compare(Mission.Construction,User.Construction);
    var M5 = Compare(Mission.Kids_Ministry,User.Kids_Ministry);
    var M6 = Compare(Mission.Senior_adults,User.Senior_adults);
    var M7 = Compare(Mission.Leading_Worship,User.Leading_Worship);
    var M8 = Compare(Mission.Community_Outreach,User.Community_Outreach);

    Mission.total = parseFloat(M1)+ parseFloat(M2) + parseFloat(M3)+ parseFloat(M4)+ parseFloat(M5)+parseFloat(M6)+parseFloat(M7)+parseFloat(M8);

    return Mission.total;
}