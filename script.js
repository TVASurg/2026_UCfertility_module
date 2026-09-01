//0 is before, 1 is pregnant, 2 is after 
var pregnantChoice = 0;

//0 is none, 1 is colectomy with end, 2 is colectomy with ileostomy
//3 is J-pouch with loop, 4 is J-pouch complete
var surgeryChoice = 0;

var mainJSONparsed = ""; //container for mainContent.json
var mainSections = []; //primary menu once filter questions are answered
var nodeIsSingle = true; //true if single slide, false if multiple
var nodeHeader = "";
var nodeContent = []; //holding the content array from json
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
    //hideSection("banner");
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
    hideSection("banner");
    nodeTracker=[];
    //replace carousel header with actual header
    document.getElementById('mainContentHeader').innerHTML = mainSections[0][(mainSectionArrayIndex-1)];

    showSection('mainContent');
    hideSection('mainMenu');
    showNextNode(mainSections[mainSectionArrayIndex][0]);
    //showNextNode("01c1");
}



function showNextNode(nodeID)
{
    var noOfSlidesInNode = 0
    nodeTracker.push(nodeID);
    mainJSONparsed.allEntries.forEach(node =>
    {
        if (node.nodeID == nodeID)
        {
            //heading information goes here
            nodeHeader = node.heading;

            //getting the content
            nodeContent = [];
            //console.log(node.content);
            Object.entries(node.content).forEach(slideBullets =>{
                nodeContent.push(slideBullets[1]);
            });

            //getting the media

            //figuring out if the content is multi-slide
            noOfSlidesInNode = Object.keys(node.content).length;
            if (noOfSlidesInNode > 1)
            {
                nodeIsSingle = false;
            }else
            {
                nodeIsSingle = true;
            }
            
            //bottom nav/exit nodes
            exitNodes = node.exitNodes;

        }
    });    
    
    

    //parsing the content
    if (nodeIsSingle == true)
    {
        parseSingleSlideContent(nodeID, nodeHeader, nodeContent);
    }
    else if (nodeIsSingle == false)
    {
        //console.log(nodeContent[1]);
        parseMultipleSlideContent(nodeID, nodeHeader, nodeContent,noOfSlidesInNode);
    }
   
    //bottom nav functions
    filterExitNodes(exitNodes);
    //setExitNodeButtons(exitNodes);
}


function parseSingleSlideContent(id, header, content)
{
    var slideContentHTML = "";

    slideContentHTML += `<div class="card h-100"><div class="">`;
    slideContentHTML += `<img src="`;

    slideContentHTML += `images/placeholder.png`;
    
    slideContentHTML += `" class="card-img-top" alt="Card 1">`;
    
    slideContentHTML += `<div class="card-body">`;
    slideContentHTML += `<h5 class="card-title">`;
    slideContentHTML += header;
    slideContentHTML += ` (` + id + `)`;
    slideContentHTML += `</h5>`;
    
    slideContentHTML += `<div class="currentNodeContent card-text"><ul>`;

    content.forEach((element,index) =>
    {
        element.forEach(bulletPoint =>{
        slideContentHTML += `<li>`;
        slideContentHTML += bulletPoint;
        slideContentHTML += `</li>`
        })
    }
    )

    slideContentHTML += `</ul>`;
    slideContentHTML += `</div>`;

    //here's the exitnodes
    slideContentHTML += `<div id="exitNodes" class="pt-3 card-footer bg-transparent"><div class="btn-group d-flex dropdown-center" role="group" aria-label="mainContentButtonMenu">`;
    slideContentHTML += `<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">More options                            </button>`;
    slideContentHTML += `<ul class="dropdown-menu">`;

    slideContentHTML += setExitNodeButtons(exitNodes);

    slideContentHTML += `<li><hr class="dropdown-divider"></li>`
    
    if (nodeTracker.length > 1)
    {
        slideContentHTML += `<li><a onclick="goBackOneNode()" class="dropdown-item" href="#">Go back one section</a></li>`;
    }

    slideContentHTML += `<li><a onclick="backToMainMenu()" class="dropdown-item" href="#">Main menu</a></li>`;
    slideContentHTML += `</ul>`;
    slideContentHTML += `</div>`;
    slideContentHTML += `</div>`;

    //final wrappers
    slideContentHTML += `</div>`;
    slideContentHTML += `</div>`;
    slideContentHTML += `</div>`;

    document.getElementById("contentProper").innerHTML = slideContentHTML;
}

function parseMultipleSlideContent(id, header, content, noOfSlides)
{
    var slideContentHTML = "";
    var slideIndicatorHTML = `<div class="carousel-indicators">`;

    slideContentHTML += `<div class="card h-100">`;
    //slideContentHTML += `_uc_tempPlaceholderForSlideContentHTML_uc_`;
    slideContentHTML += `<div id ="mainCarousel" data-bs-wrap="false" class="carousel slide">`;
    slideContentHTML += `<div class="carousel-inner">`;

    //dynamically adding carousel items
    for (i=0; i < noOfSlides; i++){
    slideContentHTML += `<div class="carousel-item`;
    if (i==0)
        {
            slideContentHTML +=  ` active`;
        }
    slideContentHTML += `"><img src="`;

    slideContentHTML += `images/placeholder.png`;
    
    slideContentHTML += `" class="card-img-top" alt="Card ` + i + `">` ;
    
    slideContentHTML += `<div class="card-body">`;
    slideContentHTML += `<h5 class="card-title">`;
    slideContentHTML += header;
    slideContentHTML += ` (` + id + `)`;
    slideContentHTML += `</h5>`;
    
    slideContentHTML += `<div class="currentNodeContent card-text"><ul>`;

    content[i].forEach(element =>
    {
        
        slideContentHTML += `<li>`;
        slideContentHTML += element;
        slideContentHTML += `</li>`
        
    }
    )

    slideContentHTML += `</ul>`;
    slideContentHTML += `</div>`;
    slideContentHTML += `</div>`;
    slideContentHTML += `</div>`;

    //this is for populating the carousel indicators
    slideIndicatorHTML += `<button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="`
    slideIndicatorHTML += i; 
    if (i == 0)
    {
        slideIndicatorHTML += `" class="active" aria-current="true"></button>`;
    }else
    {
        slideIndicatorHTML += `"></button>`;
    }
    

    }
    //end of dynamically adding carousel items
    slideContentHTML += `</div>`;
    slideContentHTML += `</div>`;

    //finalize and then add in the indicators here
    slideIndicatorHTML += `</div>`;

    //here's the exitnodes
    slideContentHTML += `<div id="exitNodes" class="py-3 card-footer bg-transparent">`;
    slideContentHTML += `<div class="btn-group d-flex dropdown-center" role="group" aria-label="mainContentButtonMenu">`;
    slideContentHTML += `<button type="button" class="btn btn-outline-dark" data-bs-target="#mainCarousel" data-bs-slide="prev"> < </button>`;
    slideContentHTML += `<button type="button" class="rounded-0 btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">More options                            </button>`;
    slideContentHTML += `<ul class="dropdown-menu">`;

    slideContentHTML += setExitNodeButtons(exitNodes);

    slideContentHTML += `<li><hr class="dropdown-divider"></li>`
    
    if (nodeTracker.length > 1)
    {
        slideContentHTML += `<li><a onclick="goBackOneNode()" class="dropdown-item" href="#">Go back one section</a></li>`;
    }

    slideContentHTML += `<li><a onclick="backToMainMenu()" class="dropdown-item" href="#">Main menu</a></li>`;
    slideContentHTML += `</ul>`;
    slideContentHTML += `<button type="button" class="btn btn-outline-dark" data-bs-target="#mainCarousel" data-bs-slide="next"> > </button>`;
    slideContentHTML += `</div>`;
    slideContentHTML += `</div>`;

    //final wrappers
    
    slideContentHTML += `</div>`;
    //slideContentHTML = slideContentHTML.replace("_uc_tempPlaceholderForSlideContentHTML_uc_", slideIndicatorHTML);

    document.getElementById("contentProper").innerHTML = slideContentHTML;
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

function setExitNodeButtons(exitNodeArray)
{
    //all this can stay, we're just rearranging where to put the nextNodesHTML
    //also add in controls for
        //go back one section button
        //go back to main menu button
        //controlling the active/disable arrows
    //finally, setting up the carousel control

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

    nextNodesHTML += '<li><p class="dropdown-header ">Read more about:</p></li>';

    nextNodesIDArray.forEach((element, index) =>
    {

        nextNodesHTML += "<li><a class='dropdown-item text-wrap' href=#";
        nextNodesHTML += " onclick=showNextNode('" + element +"')>";
        nextNodesHTML += nextNodesHeadingsArray[index] + " (" + element +")";
        nextNodesHTML += "</a></li>"
    }
    )

    // if (nodeTracker.length > 1)
    // {
    //     nextNodesHTML += '<button id="goBackButton"class="my-3 me-3 btn btn-outline-dark" ';
    //     nextNodesHTML += " onclick='goBackOneNode()'";
    //     nextNodesHTML += ">Go back one section";
    //     nextNodesHTML += "</button>";
    // }

    //     nextNodesHTML += '<button class="my-3 btn btn-outline-dark" ';
    //     nextNodesHTML += " onclick='backToMainMenu()'";
    //     nextNodesHTML += ">Back to Main Menu";
    //     nextNodesHTML += "</button>";
    
    //document.getElementById('exitNodes').innerHTML =nextNodesHTML;

    return nextNodesHTML;
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
    showSection("banner");
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