//0 is before, 1 is pregnant, 2 is after 
var pregnantChoice = 0;

//0 is none, 1 is colectomy with end, 2 is colectomy with ileostomy
//3 is J-pouch with loop, 4 is J-pouch complete
var surgeryChoice = 0;

var mainJSONparsed = ""; //container for mainContent.json
var mainSections = []; //primary menu once filter questions are answered
var exitNodes = []; //for each carousel, there are exitNodes that lead to next sections
var nodeTracker = []; //this starts recording once a menu square is selected


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
    hideSection("mainMenu");
    hideSection("mainContent");
    
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
                   ["01a0"],
                   ["04a0"],
                   ["02a0"],
                   ["03a0"]
                ]
            }else if (pregnantChoice == 1)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Pregnancy Considerations", "Surgery in-depth(pregnancy)", "Planning and Support"], 
                   ["01a0"],
                   ["05a0"],
                   ["02a0"],
                   ["03a0"]
                ]

            }else if (pregnantChoice == 2)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Postpartum Considerations", "Surgery in-depth(postpartum)", "Planning and Support"],
                   ["01a0"],
                   ["07a0"],                   
                   ["02a0"],
                   ["03a0"]
                ]

            }
            break;
        case 1:
            if (pregnantChoice == 0)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Fertility Considerations", "Complete colon removal surgery(fertility)", "Planning and Support"],
                   ["01a0"],
                   ["04b0"],
                   ["02b0"],
                   ["03a0"]
                   
                ]
            }else if (pregnantChoice == 1)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Pregnancy Considerations", "Complete colon removal surgery(pregnancy)", "Planning and Support"], 
                   ["01a0"],
                   ["05b0"],
                   ["02b0"],
                   ["03a0"]
                ]

            }else if (pregnantChoice == 2)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Postpartum Considerations", "Complete colon removal surgery(postpartum)", "Planning and Support"],
                   ["01a0"],
                   ["07b0"],                   
                   ["02b0"],
                   ["03a0"]
                ]

            }
            break;
        case 2:
            if (pregnantChoice == 0)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Fertility Considerations", "Partial colon removal surgery(fertility)", "Planning and Support"],
                   ["01a0"],
                   ["04c0"],
                   ["02c0"],
                   ["03a0"]
                   
                ]
            }else if (pregnantChoice == 1)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Pregnancy Considerations", "Partial colon removal surgery(pregnancy)", "Planning and Support"], 
                   ["01a0"],
                   ["05c0"],
                   ["02c0"],
                   ["03a0"]
                ]

            }else if (pregnantChoice == 2)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Postpartum Considerations", "Partial colon removal surgery(postpartum)", "Planning and Support"],
                   ["01a0"],
                   ["07c0"],                   
                   ["02c0"],
                   ["03a0"]
                ]

            }
            break;
        case 3:
            if (pregnantChoice == 0)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Fertility Considerations", "J-pouch created, have ostomy(fertility)", "Planning and Support"],
                   ["01a0"],
                   ["04d0"],
                   ["02d0"],
                   ["03a0"]
                   
                ]
            }else if (pregnantChoice == 1)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Pregnancy Considerations", "J-pouch created, have ostomy(pregnancy)", "Planning and Support"], 
                   ["01a0"],
                   ["05d0"],
                   ["02d0"],
                   ["03a0"]
                ]

            }else if (pregnantChoice == 2)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Postpartum Considerations", "J-pouch created, have ostomy(postpartum)", "Planning and Support"],
                   ["01a0"],
                   ["07d0"],                   
                   ["02d0"],
                   ["03a0"]
                ]

            }
            break;
        case 4:
            if (pregnantChoice == 0)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Fertility Considerations", "J-pouch complete, ostomy closed(fertility)", "Planning and Support"],
                   ["01a0"],
                   ["04e0"],
                   ["02e0"],
                   ["03a0"]
                   
                ]
            }else if (pregnantChoice == 1)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Pregnancy Considerations", "J-pouch complete, ostomy closed(pregnancy)", "Planning and Support"], 
                   ["01a0"],
                   ["05e0"],
                   ["02e0"],
                   ["03a0"]
                ]

            }else if (pregnantChoice == 2)
            {
                mainSections = 
                [
                   ["Intro to UC and Surgery", "Postpartum Considerations", "J-pouch complete, ostomy closed(postpartum)", "Planning and Support"],
                   ["01a0"],
                   ["07d0"],                   
                   ["02e0"],
                   ["03a0"]
                ]

            }
            break;
        default:

    }

    //console.log(mainSections);
    document.getElementById('mainMenu_01_header').innerHTML = mainSections[0][0];
    document.getElementById('mainMenu_02_header').innerHTML = mainSections[0][1];
    document.getElementById('mainMenu_03_header').innerHTML = mainSections[0][2];
    document.getElementById('mainMenu_04_header').innerHTML = mainSections[0][3];

}

function showFirstNode(mainSectionArrayIndex)
{
    nodeTracker=[];
    //replace carousel header with actual header
    document.getElementById('mainContentHeader').innerHTML = mainSections[0][(mainSectionArrayIndex-1)];

    showSection('mainContent');
    hideSection('mainMenu');
    showNextNode(mainSections[mainSectionArrayIndex][0]);
}

function showNextNode(nodeID)
{
    nodeTracker.push(nodeID);
    mainJSONparsed.allEntries.forEach(node =>
    {
        if (node.nodeID == nodeID)
        {
            //heading information goes here
            document.getElementById('currentNodeHeader').innerHTML = node.heading + " (" + nodeID + ") ";

            //we'll deal with the content later within currentNodeContent
            //along with number of slides etc etc

            //bottom nav/exit nodes
            //add filter in later
            exitNodes = node.exitNodes;
        }
    });    
    
    filterExitNodes(exitNodes);
    setExitNodeButtons(exitNodes);

    //based on length...determine number of carousel slides needed
        //add slides
        //tweak controls
}

function goBackOneNode()
{
    if(nodeTracker.length > 1)
    {
        var nodeToGo = (nodeTracker[nodeTracker.length -2]);
        nodeTracker.pop();
        nodeTracker.pop();
        
        showNextNode(nodeToGo);
    }
}

function backToMainMenu()
{
    nodeTracker = [];
    exitNodes = [];
    hideSection ('mainContent');
    showSection('mainMenu');
}

function setExitNodeButtons(exitNodeArray)
{
    var nextNodesIDArray = [];
    var nextNodesHeadingsArray = [];
    var nextNodesHTML = "";
    
    mainJSONparsed.allEntries.forEach(node =>
    {
        for(i=0; i<exitNodeArray.length; i++)
        {
            if (node.nodeID == exitNodeArray[i])
            {
                nextNodesIDArray.push(node.nodeID);
                nextNodesHeadingsArray.push(node.heading);
            }
        }

    });

    nextNodesIDArray.forEach((element, index) =>
    {

        nextNodesHTML += "<a class='branchingLink' href=#";
        nextNodesHTML += " onclick=showNextNode('" + element +"')";
        nextNodesHTML += ">Continue reading about: "
        nextNodesHTML += nextNodesHeadingsArray[index] + " (" + element +")";
        nextNodesHTML += "</a><br/>"
    }
    )
    if (nodeTracker.length > 1)
    {
        nextNodesHTML += '<button id="goBackButton"class="my-3 me-3 btn btn-outline-dark" ';
        nextNodesHTML += " onclick='goBackOneNode()'";
        nextNodesHTML += ">Go back one section";
        nextNodesHTML += "</button>";
    }

        nextNodesHTML += '<button class="my-3 btn btn-outline-dark" ';
        nextNodesHTML += " onclick='backToMainMenu()'";
        nextNodesHTML += ">Back to Main Menu";
        nextNodesHTML += "</button>";
    
    document.getElementById('exitNodes').innerHTML =nextNodesHTML;
}

function filterExitNodes (exitNodeArray, pChoice, sChoice)
{
    var inclusionArray =[];
    switch (surgeryChoice)
    {
        case 0:
            if (pregnantChoice == 0)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",
                    "02a0",
                    "02a1",
                    "02a2",
                    "02b0",
                    "02c0",
                    "04a0",
                    "04f0",
                    "05a0",
                    "06a0",
                    "08a0",
                    "09a0",
                    "09b0"
                ];
            }
            else if(pregnantChoice == 1)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02a0",
                    "02a1",
                    "02a2",
                    "02c0",
                    "02c2",                    
                    "02d0",
                    
                    "05a0",
                    "06a0",
                    "07a0",
                    "08a0",
                    "09a0",
                    "09b0"
                ];

            }
            else if(pregnantChoice == 2)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02a0",
                    "02a1",
                    "02a2",
                    "02c0",
                    "07c0",                    
                    "02d0",
                    
                    "06a0",
                    "07a0",
                    "08a0",
                    "09a0",
                    "09b0"
                ];
            }
        break;
        case 1:
            if (pregnantChoice == 0)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02b0",
                    "02b1",

                    "04b0",
                    "04f0",
                    "05b0",

                    "06a0",
                    
                    "08b0",
                    "09a0",
                    "09b0"
                ];
            }
            else if(pregnantChoice == 1)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02b0",
                    "02b2",

                    "05b0",
                    "06b0",
                    "07b0",
                    
                    "08b0",
                    "09a0",
                    "09b0"
                ];

            }
            else if(pregnantChoice == 2)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02b0",
                    "07b0",
                   
                    "08b0",
                    "09a0",
                    "09b0"
                ];
            }
        break;
        case 2:
            if (pregnantChoice == 0)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02c0",
                    "02ci",
                    "02cii",
                    "02ciii",
                    "02c1",
                    "02d0",

                    "04c0",
                    "04f0",
                    
                    "05c0",

                    "06a0",
                    
                    "08a0",
                    "09a0",
                    "09b0"
                ];
            }
            else if(pregnantChoice == 1)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02c0",
                    "02ci",
                    "02cii",
                    "02ciii",
                    "02c2",

                    "05c0",

                    "06c0",
                    "07c0",
                    
                    "08a0",
                    "08b0",
                    "09a0",
                    "09b0"
                ];

            }
            else if(pregnantChoice == 2)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02c0",
                    "02ci",
                    "02cii",
                    "02ciii",
                    "07c0",

                    "07c0",
                    
                    "08a0",
                    "08b0",
                    "09a0",
                    "09b0"
                ];
            }
        break;
        case 3:
            if (pregnantChoice == 0)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02d0",
                    "02d1",
                    "02e0",

                    "04d0",
                    "04f0",
                    
                    "05d0",

                    "08c0",
                    "09a0",
                    "09b0"
                ];
            }
            else if(pregnantChoice == 1)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02d0",
                    "02d2",

                    "05d0",
                    "06d0",
                    "07d0",

                    "08c0",
                    "09a0",
                    "09b0"
                ];

            }
            else if(pregnantChoice == 2)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02d0",

                    "07d0",

                    "08c0",
                    "09a0",
                    "09b0"
                ];
            }
        break;
        case 4:
            if (pregnantChoice == 0)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02e0",
                    "02e1",

                    "04e0",
                    "04f0",
                    
                    "05e0",

                    "08c0",
                    "09a0",
                    "09b0"
                ];
            }
            else if(pregnantChoice == 1)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02e0",
                    "02e2",
                    
                    "05e0",
                    "06d0",
                    "07d0",

                    "08c0",
                    "09a0",
                    "09b0"
                ];

            }
            else if(pregnantChoice == 2)
            {
                inclusionArray =[
                    "01a0",
                    "01b0",
                    "01c1",
                    "01c2",
                    "03a0",

                    "02e0",
                    
                    "07d0",

                    "08c0",
                    "09a0",
                    "09b0"
                ];
            }
        break;
        default:
              

    }

    // Loop backwards to safely splice while mutating
    for (let i = exitNodeArray.length - 1; i >= 0; i--) {
    if (!inclusionArray.includes(exitNodeArray[i])) {
        exitNodeArray.splice(i, 1); // Removes the non-intersection element
    }
    }
    return exitNodeArray;
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