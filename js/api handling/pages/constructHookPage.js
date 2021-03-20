import { getJsonData, constructSection, postJsonData } from '../getAndPostRequest.js';
import { constructSidebar, contstructNavbar, hookCard, userCard, addHookModal, loginAndSignupModal, singleComment, hookDescription} from '../components.js'
import * as utility from '../utilities/utilities.js'
const rootElement = document.getElementById('rootElement');
const loader = document.getElementById('loader');


function refreshComments(){
    document.getElementsByClassName('fa-refresh')[0].onclick = async () => {
      document.getElementsByClassName('commentsSection')[0].innerHTML = await constructSection('https://jsonplaceholder.typicode.com/todos/1',constructHookCommentBox);
      refreshComments()
    }
    
}

function postComment(){ // give this to priyansh chomu
    const addCommentButton = document.getElementById('addCommentButton');
    const addCommentInputBox = document.getElementById('addCommentInputBox');
    addCommentButton.onclick = async () => {
        await postJsonData();
        refreshComments();
        postComment();
    }
    addCommentButton.disabled=true;
    addCommentInputBox.oninput = () => {
        if(addCommentInputBox.value.length > 0){
            addCommentButton.disabled = false;
        }
        else {
            addCommentButton.disabled=true;  
        }
    }
}


async function constructHookUserAndDesc(data,urlTwo){
    let hookHtml = hookCard();
    let userHtml = userCard();
    let hookDescAndStatsHtml = hookDescription();
    let commentSectionData = await constructSection(urlTwo,constructHookCommentBox);
    return (
        `
        <div class="singleHookContainer">
            <div class="hookAndDesc">
                ${hookHtml}
                ${hookDescAndStatsHtml}
            </div>
            <div class="userAndComments">
                ${userHtml}
                <div class="commentsSection">
                    ${commentSectionData}
                </div>
            </div>
        </div>
        `
    )
}

function constructHookCommentBox(data){
    let comments = '';
    for (let i=0;i<2;i++){
        comments+= singleComment(); 
    }
    return (
        `
        
            <div class="commentStatsAndRefresh" style="padding: 10px; background: gray; color: white; padding-bottom: 0px; display: flex; justify-content: space-between; align-items: center;">
                <h6>3.2k Comments</h6>
                <i class="fa fa-refresh" title="refresh" style="margin-bottom: 8px;"></i>
            </div>
            <div class="allComments">
                ${comments}
            </div>
            <div class="addComment">
                <input type="text" id="addCommentInputBox" placeholder="Post A Comment" spellcheck="false">
                <button class="btn btn-secondary btn-sm" id="addCommentButton">Post</button>
            </div>
        
        `
    )
}

async function constructHookPage(urlOne,urlTwo){
    utility.enableLoader(rootElement,loader);
    const hookAndUserHtml = await constructSection(urlOne,constructHookUserAndDesc,urlTwo);
    const sidebarHtml = constructSidebar();
    const navbarHtml = contstructNavbar();
    const hookModal = addHookModal();
    const signupAndSigninModalHtml = loginAndSignupModal();
    const  assemblePage = `
    <div class="page-wrapper default-theme sidebar-bg bg1">
        ${sidebarHtml}
        <main class="page-content">
            <div id="overlay" class="overlay"></div>
            <div class="container-fluid" style="padding:0px;">
                ${navbarHtml}
                <div id="addHookMobile" data-toggle="modal" data-target="#exampleModalCenter">
                    <i class="fa fa-plus" style="font-size:20px; color: white;"></i>
                </div>
                <div class="pageWrapper" style="padding-bottom: 0px;">
                   ${hookAndUserHtml}
                </div>
                ${hookModal}
                ${signupAndSigninModalHtml}
        </main>
    </div>
    `
    rootElement.innerHTML = assemblePage;    
    utility.disableLoader(rootElement,loader);
    utility.manageSidebarStateOnDifferentMediaDevices();
    utility.loadMainJsFile();
    utility.addNecessaryEventListeners();
    utility.manageOnClickIntrestBox();   
    utility.manageHooksClickEvents('bookmark','fa-bookmark','fa-bookmark-o');
    utility.manageHooksClickEvents('like','fa-heart','fa-heart-o');
    utility.manageSearchResults();
    utility.manageAddHookModalPreveiw();
    utility.loadLoginModalJs();
    utility.toggleFollowBtn();
    refreshComments();
}

constructHookPage('https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/1')
  .then(() => console.log("prmoise resolved"))
  .catch((err) => console.log(err.message));


