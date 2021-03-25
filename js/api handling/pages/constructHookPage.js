import { getJsonData, constructSection, postJsonData } from '../getAndPostRequest.js';
import { constructSidebar, contstructNavbar, hookCard, userCard, addHookModal, loginAndSignupModal, singleComment, hookDescription} from '../components.js'
import * as utility from '../utilities/utilities.js'
const rootElement = document.getElementById('rootElement');
const loader = document.getElementById('loader');


function refreshComments(){
    document.getElementsByClassName('fa-refresh')[0].onclick = async () => {
      document.getElementsByClassName('allComments')[0].innerHTML = await constructSection('https://jsonplaceholder.typicode.com/todos/1',constructHookCommentBox);
        console.log('yes')
    }
    
}

async function getAllCollections(){
    const collectionData = await getJsonData('https://jsonplaceholder.typicode.com/todos/1');
    let collectionList = ' <option selected disabled value="0">Add in Collection (Optional)</option>';
    for (let i=0;i<5;i++){
        collectionList +=    `
            <option value="${i+1}" id="${i+1}">One</option>
            `
    }
    return collectionList;
}

function onEnterSendComment(){
    const addCommentButton = document.getElementById('addCommentButton');
    const addCommentInputBox = document.getElementById('addCommentInputBox');
    addCommentInputBox.addEventListener('keypress', (e) => {
        if (e.key == 'Enter'){
            addCommentButton.click();
        }
    })
}

function sendCollectionToTheBackend(){
   const selectTag = document.getElementById('selectC');
   selectTag.onchange = async () => {
       if (selectTag.value != 0){  
        const obj = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
         const isPostRequestOk = await postJsonData('https://jsonplaceholder.typicode.com/posts',obj);
         if (isPostRequestOk){
             alert('Hook Added to collection');
         }else {
             alert('Something went wrong , try again later');
         }
       }
   }
}

function postComment(){ // give this to priyansh chomu
    const addCommentButton = document.getElementById('addCommentButton');
    const addCommentInputBox = document.getElementById('addCommentInputBox');
    addCommentButton.onclick = async () => {
        const obj = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        await postJsonData('https://jsonplaceholder.typicode.com/posts',obj);
        document.getElementsByClassName('fa-refresh')[0].click();
        
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
    let collectionList = await getAllCollections();
    return (
        `
        <div class="singleHookContainer">
            <div class="hookAndDesc">
                ${hookHtml}
                ${hookDescAndStatsHtml}
            </div>
            <div class="userAndComments">
                ${userHtml}
                <select id="selectC" style="width:100%; padding:5px 10px; border-radius:10px; margin-top:10px;">
                    ${collectionList}
                </select>
                <div class="commentsSection" style="margin-top:10px;">
                    <div class="commentStatsAndRefresh" style="padding: 10px; background: gray; color: white; padding-bottom: 0px; display: flex; justify-content: space-between; align-items: center;">
                        <h6>3.2k Comments</h6>
                        <i class="fa fa-refresh" title="refresh" style="margin-bottom: 8px;"></i>
                    </div>
                    <div class="allComments">
                        ${commentSectionData}
                    </div>
                    <div class="addComment">
                        <input type="text" id="addCommentInputBox" placeholder="Post A Comment" spellcheck="false">
                        <button class="btn btn-secondary btn-sm" id="addCommentButton">Post</button>
                    </div>
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
    return comments;
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
    postComment()
    sendCollectionToTheBackend();
    onEnterSendComment();
    refreshComments();
}

constructHookPage('https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/1')
  .then(() => console.log("prmoise resolved"))
  .catch((err) => console.log(err.message));


