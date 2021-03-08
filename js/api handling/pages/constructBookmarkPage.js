import { getJsonData, constructSection, postJsonData } from '../getAndPostRequest.js';
import { constructSidebar, contstructNavbar, hookCard, addHookModal, managePagination} from '../components.js'
import * as utility from '../utilities/utilities.js'
const rootElement = document.getElementById('rootElement');
const loader = document.getElementById('loader');


function constructBookmarksList(){ // data here
    let bookmarksList = '';
    for (let i=0;i<12;i++){
        bookmarksList += hookCard();
    }
    return(
        `
        <div class="latestPosts">
            <h4 style="padding-bottom: 5px; letter-spacing: 1px; color:#f2f2f2">Bookmarked Hooks</h4>
            <div class="latestFeedContainer">
                ${bookmarksList}
            </div>
        </div>
        `
    )
}




function constructBookmarkPage(){
    const bookmarksListHtml = constructBookmarksList();
    const sidebarHtml = constructSidebar();
    const navbarHtml = contstructNavbar();
    const pagination = managePagination();
    const hookModal = addHookModal();

    const assemblePage = `
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
                    ${bookmarksListHtml}
                    ${pagination}
                </div>
                ${hookModal}
        </main>
    </div>
    `
    rootElement.innerHTML = assemblePage;    
    utility.manageSidebarStateOnDifferentMediaDevices();
    utility.loadMainJsFile();
    utility.addNecessaryEventListeners();
    utility.loadLatestFeedJs();
}

constructBookmarkPage();