
/*MEDIA QUARY*/
if(matchMedia){
    const mq = window.matchMedia("(min-width: 600px)");

    const fmq = window.matchMedia("(min-width:1050px)");

    mq.addListener(WidthChange);
    WidthChange(mq);

    fmq.addListener(FilterChange);
    FilterChange(fmq)
}

/*NAV MENU*/
function displayMobileMenu(){
    var mobileMenu = document.getElementById("mob-dropdown-menu");

    if(mobileMenu.style.left != "0px"){
        mobileMenu.style.left = "0px";
    } else{
        mobileMenu.style.left = "-999em";
    }
}

/*EXPORT BUTTON*/
function WidthChange(mq){
    if(mq.matches){

        document.getElementById("export-excel").innerHTML="<img class=\"img-20\" src=\"img/export-icon.svg\" alt=\"export icon\">Export to Excel"

    } else{
        document.getElementById("export-excel").innerHTML="<img class=\"img-20\" src=\"img/export-icon.svg\" alt=\"export icon\">Export"
    }
}

/*DISPLAY FILTER*/
function FilterChange(fmq){
    if(fmq.matches){
        document.getElementById("mob-filter").style.display = "block";
    } else{
        document.getElementById("mob-filter").style.display = "none";
    }
}

function displayFilter(){
    var filterMenu = document.getElementById("mob-filter");
    var dropdownIcon = document.getElementById("filter-drop-down");

    if(filterMenu.style.display !="block"){
        filterMenu.style.display = "block";
        dropdownIcon.className = "fas fa-chevron-up fa-bars filter-drop-down";
    } else{
        filterMenu.style.display = "none";
        dropdownIcon.className = "fas fa-chevron-down fa-bars filter-drop-down";
    }
}


/*INSTRUCTIONS*/
function displayInstructions(){
    var formInstructions = document.getElementById("f-instructions");
    var dropdownIcon = document.getElementById("inst-dropdown");

    if(formInstructions.style.display!="none"){
        formInstructions.style.display="none";
        dropdownIcon.className = "fas fa-chevron-down";
    } else{
        formInstructions.style.display="block";
        dropdownIcon.className = "fas fa-chevron-up";
    }
}


/*DISCUSSION  REPLY*/
function displayReply(){
    var discussionReply = document.getElementById("dis-rep1");
    var replyIcon = document.getElementById("reply-icon");

    if(discussionReply.style.display !="none"){
        discussionReply.style.display = "none";
        replyIcon.className = "fas fa-caret-down";
    } else{
        discussionReply.style.display = "block";
        replyIcon.className = "fas fa-caret-up";
    }
}

/*ADD DISCUSSION*/
function addDiscussion(){
    var addDiscussionPanel = document.getElementById("add-discussion-panel");

    if(addDiscussionPanel.style.display!="block"){
        addDiscussionPanel.style.display = "block";
    } else{
        addDiscussionPanel.style.display = "none"
    }
}

/*ADD TEAM*/
function addTeamMember(){
    var addTeamPanel = document.getElementById("add-team-panel");

    if(addTeamPanel.style.display !="block"){
        addTeamPanel.style.display = "block";
    } else{
        addTeamPanel.style.display = "none";
    }
}

/*ADD DETAILERS BUTTON*/
function displayPanel(clickedItem){
    var panelId = clickedItem+"-panel";
    var addDetailersPanel = document.getElementById(panelId);

    if(addDetailersPanel.style.display !="block"){
        addDetailersPanel.style.display = "block";
    } else{
        addDetailersPanel.style.display = "none";
    }
}

/*UNABLE TO FILL BUTTON*/
// function displayUnableToFill(){
//     var addDetailersPanel = document.getElementById("unable-to-fill-panel");

//     if(addDetailersPanel.style.display !="block"){
//         addDetailersPanel.style.display = "block";
//     } else{
//         addDetailersPanel.style.display = "none";
//     }
// }

