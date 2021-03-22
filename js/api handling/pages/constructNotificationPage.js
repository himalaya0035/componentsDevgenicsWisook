import { constructSection} from '../getAndPostRequest.js';
import { constructSidebar, contstructNavbar, addHookModal, fillSingleNotificationElement, loginAndSignupModal} from '../components.js'
import * as utility from '../utilities/utilities.js'

const rootElement = document.getElementById('rootElement');
const loader = document.getElementById('loader');

function constrcuctNotifications(){
    let notifications = '';
    for (let i=0;i<6;i++){
        notifications += fillSingleNotificationElement('comment');
    }
    return (
        `
        <section class="">
            <h3 class="heading-line" style="margin-bottom: 20px;">Notifications <i class="fa fa-bell text-white"></i></h3>
            <div class="notification-ui_dd-content">
                ${notifications}
            </div>
        </section>
        `
    )
}

async function constrcuctNotificationsPage(urlOne){
    utility.enableLoader(rootElement,loader);

    const sidebarHtml = constructSidebar();
    const notificationsHtml = await constructSection(urlOne,constrcuctNotifications);
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
                    ${notificationsHtml}
                </div>
                ${hookModal}
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

constrcuctNotificationsPage('https://jsonplaceholder.typicode.com/todos/1')
    .then(() => console.log('Promise Resolved'))