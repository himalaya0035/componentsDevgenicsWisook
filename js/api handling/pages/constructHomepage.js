import { getJsonData, constructSection, postJsonData } from '../getAndPostRequest.js';
import { constructSidebar, contstructNavbar, hookCard, userCard, addHookModal, managePagination, signupAndSigninModal} from '../components.js'
import * as utility from '../utilities/utilities.js'
const rootElement = document.getElementById('rootElement');
const loader = document.getElementById('loader');




function constructTrendingThisWeek(data){ //data here
    console.log(data)
    let trendingHooksList = '';
    for (let i=0;i<12;i++){
        trendingHooksList += hookCard();
    }
    return(
        `
        <div class="hooksContainer">
            <h4 style="padding-bottom: 5px; letter-spacing: 1px; color:#f2f2f2">Trending This week</h4>
            <div class="hookScroller">
                ${trendingHooksList}
            </div>
        </div>
        `
    )
}

function constructTopUsers(data){ // data here
    let topUsersList = '';
    for (let i=0;i<6;i++){
        topUsersList += userCard();
    }
    return (
        `
        <div class="usersToFollow" style="margin-bottom: 15px;">
            <h4 style="padding-bottom: 5px; letter-spacing: 1px; color:#f2f2f2">Top Users</h4>
            <div class="usersScroller">
                <div class="usersContainer">
                    ${topUsersList}
                </div>
            </div>
        </div>
        `
    )
}

function constructLatestFeed(data){ //data here
    let latestFeedHooks = '';
    for (let i=0;i<12;i++){
        latestFeedHooks += hookCard();
    }
    return(
        `
        <div class="latestPosts">
            <h4 style="padding-bottom: 5px; letter-spacing: 1px; color:#f2f2f2">Latest Feed</h4>
            <div class="latestFeedContainer">
                ${latestFeedHooks}
            </div>
        </div>
        `
    )
}

async function constructHomepage(urlOne,UrlTwo,urlThree){
    utility.enableLoader(rootElement,loader);

    const trendingHooksHtml =  constructSection(urlOne,constructTrendingThisWeek);
    const topUsersHtml =  constructSection(UrlTwo,constructTopUsers);
    const latestFeedHtml =  constructSection(urlThree,constructLatestFeed);
    const sidebarHtml = constructSidebar();
    const navbarHtml = contstructNavbar();
    const pagination = managePagination();
    const hookModal = addHookModal();
    const signupAndSigninModalHtml = signupAndSigninModal();
    let assemblePage = '';

    await Promise.all([trendingHooksHtml,topUsersHtml,latestFeedHtml]).then(values =>{
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
                        ${values[1]}
                        ${values[2]}
                        ${pagination}
                    </div>
                    ${hookModal}
                    ${signupAndSigninModalHtml}
            </main>
        </div>
        `
    })    
    rootElement.innerHTML = assemblePage;   
    utility.disableLoader(rootElement,loader) 

    utility.manageSidebarStateOnDifferentMediaDevices();
    utility.loadMainJsFile();
    utility.addSlider('.hookScroller');
    utility.addSlider('.usersScroller');
    utility.addNecessaryEventListeners();
    utility.loadLatestFeedJs();
    utility.manageOnClickIntrestBox();   
    utility.manageHooksClickEvents('bookmark','fa-bookmark','fa-bookmark-o');
    utility.manageHooksClickEvents('like','fa-heart','fa-heart-o');
}

constructHomepage('https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/1')
  .then(() => console.log("prmoise resolved"))
  .catch((err) => console.log(err.message));
