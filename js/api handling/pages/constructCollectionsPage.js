import { getJsonData, constructSection, postJsonData } from '../getAndPostRequest.js';
import { constructSidebar, contstructNavbar, addHookModal, managePagination, fillSingleNotificationElement, loginAndSignupModal, createCollectionCard, createCollectionModal} from '../components.js'
import * as utility from '../utilities/utilities.js'

const rootElement = document.getElementById('rootElement');
const loader = document.getElementById('loader');

function constructCollections(){
    let collections = '';
    for (let i=0;i<5;i++){
        collections += createCollectionCard();
    }
    return (
        `
        <div class="collectionContainer">
            <div class="addCollectionBtn" data-toggle="modal" data-target="#createCollectionModal" title="Create a Collection">
                <div class="plusContainer"  style="background: rgb(21,21, 21); border-radius: 50%; height: 100px; width: 100px; display: flex; justify-content: center; align-items: center; ">
                    <i class="fa fa-plus" style="color: white; font-size: 50px;"></i>
                </div>
            </div>
            ${collections}
        </div>
        `
    )
}

async function constructCollectionsPage(urlOne){
    utility.enableLoader(rootElement,loader);
    const sidebarHtml = constructSidebar();
    const collectionsHtml = await constructSection(urlOne,constructCollections);
    const navbarHtml = contstructNavbar();
    const createCollectionModalHtml = createCollectionModal();
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
                    ${collectionsHtml}
                </div>
                ${hookModal}
                ${createCollectionModalHtml}
                ${signupAndSigninModalHtml}
        </main>
    </div>
    `
    rootElement.innerHTML = assemblePage;   
    utility.manageSidebarStateOnDifferentMediaDevices();
    utility.disableLoader(rootElement,loader);
    utility.loadMainJsFile();
    utility.addNecessaryEventListeners();
    utility.manageOnClickIntrestBox(); 
    utility.manageSearchResults();
    utility.manageAddHookModalPreveiw();
    utility.loadLoginModalJs();
}

constructCollectionsPage('https://jsonplaceholder.typicode.com/todos/1')
    .then( () => console.log('Promise Resolved'))