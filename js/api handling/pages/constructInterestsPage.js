import { getJsonData, constructSection, postJsonData } from '../getAndPostRequest.js';
import { constructSidebar, contstructNavbar, addHookModal, managePagination, fillSingleNotificationElement, loginAndSignupModal} from '../components.js'
import * as utility from '../utilities/utilities.js'

const rootElement = document.getElementById('rootElement');
const loader = document.getElementById('loader');

function constructAllIntrests(){
    let interestList = '';
    for (let i=0;i<5;i++){
        interestList += `
        <div class="intrestBox2">
        <h1>Shopping</h1>
        <div class="colorOverlay"></div>
        <div class="followOrRemove" title="Add/Remove Interest">
            <i class="fa fa-trash changeIntrestState"></i>
        </div>
        <a  href="intrestHooks.html" title="View Interest Hooks" class="viewInterestHooks followOrRemove">
            <i class="fa fa-expand changeIntrestState"></i>
        </a>
    </div>
        `
    }
    return (
        `
        <div class="intrestsBoxContainer">
            <h4 style="padding-bottom: 5px; letter-spacing: 2px; color:#f2f2f2">Discover New Intrests</h4>
            <div class="mainPageIntrestBoxs">
                ${interestList}
            </div>
        </div>
        `
    )
}

let assemblePage;
async function constructIntrestsPage(urlOne){
    utility.enableLoader(rootElement,loader);
    const intrestsHtml = constructSection(urlOne,constructAllIntrests)
    const sidebarHtml = constructSidebar();
    const navbarHtml = contstructNavbar();
    const hookModal = addHookModal();
    const signupAndSigninModalHtml = loginAndSignupModal();

    await Promise.all([intrestsHtml]).then(values =>{
        assemblePage = `
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
                        ${values[0]}
                    </div>
                    ${hookModal}
                    ${signupAndSigninModalHtml}
            </main>
        </div>
        `
    })    
    rootElement.innerHTML = assemblePage;   
    utility.manageSidebarStateOnDifferentMediaDevices();
    utility.disableLoader(rootElement,loader);
    utility.loadMainJsFile();
    utility.addNecessaryEventListeners();
    utility.manageOnClickIntrestBox(); 
    utility.manageSearchResults();
    utility.manageAddHookModalPreveiw();
    utility.manageInterestFollowOrRemove('followOrRemove','fa-trash','fa-plus');
    utility.loadLoginModalJs();
  
}

constructIntrestsPage('https://jsonplaceholder.typicode.com/todos/1')
  .then(() => console.log("prmoise resolved"))
  .catch((err) => console.log(err.message));