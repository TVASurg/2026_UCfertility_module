//0 is before, 1 is pregnant, 2 is after 
var pregnantChoice = 0;

//0 is none, 1 is colectomy with end, 2 is colectomy with ileostomy
//3 is J-pouch with loop, 4 is J-pouch complete
var surgeryChoice = 0;

var mainSections = [];
var mainJSONparsed = "";

function loadJSON()
{
    var request = new XMLHttpRequest();
    request.open("GET", "mainContent.json", true);
    request.onreadystatechange = function()
    {
        if (request.readyState === 4 && request.status === 200) {
        //console.log(JSON.parse(request.responseText));
        mainJSONparsed = JSON.parse(request.responseText);
        }
    }
    request.send(null);
}

function init()
{
    //remove loader?
    loadJSON();
    //hideSection("question_01");
    hideSection("question_02");
    hideSection("question_03");
    hideSection("mainContent");
    hideSection("contentCarousel");
}

function changePchoice(changeTo)
{
    pregnantChoice = changeTo;
    recalculateMainSection();
}

function changeSchoice(changeTo)
{
    surgeryChoice = changeTo;
    recalculateMainSection();
}

function recalculateMainSection()
{
    //console.log("pChoice is " + pregnantChoice);
    //console.log("sChoice is " + surgeryChoice);

    mainSections =[];
    switch (surgeryChoice)
    {
        case 0:
            if (pregnantChoice == 0)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Fertility Considerations", "Surgery in-depth(fertility)", "Planning and Support"],
                   ["01a0","01b0","01c0", "08a0"],
                   ["04a0","04d0","05a0","06a0"],
                   ["02a0", "02a1", "02a2"],
                   ["03a0","09a0"]
                   
                ]
            }else if (pregnantChoice == 1)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Pregnancy Considerations", "Surgery in-depth(pregnancy)", "Planning and Support"], 
                   ["01a0","01b0","01c0", "08a0"],
                   ["05a0","06a0"],
                   ["02a0", "02a1", "02a2"],
                   ["03a0","09a0"]
                ]

            }else if (pregnantChoice == 2)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Postpartum Considerations", "Surgery in-depth(postpartum)", "Planning and Support"],
                   ["01a0","01b0","01c0"],
                   ["06a0","07a0"],                   
                   ["02a0", "02a1", "02a2"],
                   ["03a0","09a0"]
                ]

            }
            break;
        case 1:
            if (pregnantChoice == 0)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Fertility Considerations", "Complete colon removal surgery(fertility)", "Planning and Support"],
                   ["01a0","01b0","01c0", "08a0"],
                   ["04c0","04d0","05c0","06c0"],
                   ["02c0", "02c1"],
                   ["03a0","09a0"]
                   
                ]
            }else if (pregnantChoice == 1)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Pregnancy Considerations", "Complete colon removal surgery(pregnancy)", "Planning and Support"], 
                   ["01a0","01b0","01c0", "08a0"],
                   ["05c0","06c0"],
                   ["02c0", "02c2"],
                   ["03a0","09a0"]
                ]

            }else if (pregnantChoice == 2)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Postpartum Considerations", "Complete colon removal surgery(postpartum)", "Planning and Support"],
                   ["01a0","01b0","01c0"],
                   ["06c0","07d0"],                   
                   ["02c0", "02c3"],
                   ["03a0","09a0"]
                ]

            }
            break;
        case 2:
            if (pregnantChoice == 0)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Fertility Considerations", "Partial colon removal surgery(fertility)", "Planning and Support"],
                   ["01a0","01b0","01c0", "08a0"],
                   ["04b0","04d0","05b0","06b0"],
                   ["02d0", "02d1"],
                   ["03a0","09a0"]
                   
                ]
            }else if (pregnantChoice == 1)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Pregnancy Considerations", "Partial colon removal surgery(pregnancy)", "Planning and Support"], 
                   ["01a0","01b0","01c0", "08a0"],
                   ["05b0","06b0"],
                   ["02d0", "02d2"],
                   ["03a0","09a0"]
                ]

            }else if (pregnantChoice == 2)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Postpartum Considerations", "Partial colon removal surgery(postpartum)", "Planning and Support"],
                   ["01a0","01b0","01c0"],
                   ["06b0","07b0"],                   
                   ["02d0", "02d3"],
                   ["03a0","09a0"]
                ]

            }
            break;
        case 3:
            if (pregnantChoice == 0)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Fertility Considerations", "J-pouch created, have ostomy(fertility)", "Planning and Support"],
                   ["01a0","01b0","01c0", "08a0"],
                   ["04c0","04d0","05c0","06c0"],
                   ["02e0", "02e1"],
                   ["03a0","09a0"]
                   
                ]
            }else if (pregnantChoice == 1)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Pregnancy Considerations", "J-pouch created, have ostomy(pregnancy)", "Planning and Support"], 
                   ["01a0","01b0","01c0", "08a0"],
                   ["05c0","06c0"],
                   ["02e0", "02e2"],
                   ["03a0","09a0"]
                ]

            }else if (pregnantChoice == 2)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Postpartum Considerations", "J-pouch created, have ostomy(postpartum)", "Planning and Support"],
                   ["01a0","01b0","01c0"],
                   ["06c0","07c0"],                   
                   ["02e0", "02e3"],
                   ["03a0","09a0"]
                ]

            }
            break;
        case 4:
            if (pregnantChoice == 0)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Fertility Considerations", "J-pouch complete, ostomy closed(fertility)", "Planning and Support"],
                   ["01a0","01b0","01c0", "08a0"],
                   ["04c0","04d0","05c0","06c0"],
                   ["02f0", "02f1"],
                   ["03a0","09a0"]
                   
                ]
            }else if (pregnantChoice == 1)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Pregnancy Considerations", "J-pouch complete, ostomy closed(pregnancy)", "Planning and Support"], 
                   ["01a0","01b0","01c0", "08a0"],
                   ["05c0","06c0"],
                   ["02f0", "02f2"],
                   ["03a0","09a0"]
                ]

            }else if (pregnantChoice == 2)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Postpartum Considerations", "J-pouch complete, ostomy closed(postpartum)", "Planning and Support"],
                   ["01a0","01b0","01c0"],
                   ["06c0","07c0"],                   
                   ["02f0", "02f3"],
                   ["03a0","09a0"]
                ]

            }
            break;
        default:

    }

    //console.log(mainSections);
    document.getElementById('mainContent_01_header').innerHTML = mainSections[0][0];
    document.getElementById('mainContent_02_header').innerHTML = mainSections[0][1];
    document.getElementById('mainContent_03_header').innerHTML = mainSections[0][2];
    document.getElementById('mainContent_04_header').innerHTML = mainSections[0][3];

    //debug for relevant sections
    document.getElementById('mainContent_01_debug').innerHTML = mainSections[1];
    document.getElementById('mainContent_02_debug').innerHTML = mainSections[2];
    document.getElementById('mainContent_03_debug').innerHTML = mainSections[3];
    document.getElementById('mainContent_04_debug').innerHTML = mainSections[4];
}

function showCarousel(mainSectionArrayIndex)
{
    //replace carousel header with actual header
    //based on length...determine number of carousel slides needed
        //add slides
        //tweak controls
}

function hideSection(sectionID)
{
    document.getElementById(sectionID).style.display = "none";
}

function showSection(sectionID)
{
    document.getElementById(sectionID).style.display = "block";
}

function showBreadCrumb(breadCrumbID, selectedOption)
{
    document.getElementById(breadCrumbID).innerHTML= selectedOption;
}