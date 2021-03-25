import { getJsonData, constructSection, postJsonData } from '../getAndPostRequest.js';
import { hookCard, editProfileModal, followersAndFollowingModal, createCollectionCard} from '../components.js'
import * as utility from '../utilities/utilities.js'
const rootElement = document.getElementById('rootElement');
const loader = document.getElementById('loader');


function constructProfilePageHeader(){  // datat here
    return (
        `
        <div class="header-container">
                <div class="header" style="background: url('https://scontent.fagr1-2.fna.fbcdn.net/v/t1.0-9/152161749_110761327721080_5700786707694424470_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=e3f864&_nc_ohc=aSjPWVE5zNQAX-PvIGh&_nc_ht=scontent.fagr1-2.fna&oh=0cfae4416ef985047dd474eedbbad81e&oe=606C0A1F'); background-repeat: no-repeat; background-size: cover; background-position: center;">
                    <a href="/" style="font-weight:bold;text-decoration: none; color: white;font-size: 25px; letter-spacing: 2px;"><i
                    class="fa fa-arrow-left"></i> WISOOK</a>

                </div>
            <div class="headerOverlay"></div>
        </div>
        `
    )
}

function constructTopProfileBody(){ // data here
    return (
        `
        <div class="topProfileBody">
            <div class="image profileImage">
                <img alt="user Profile image" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                 class="rounded" />
                <div class="nameAndCredential">
                    <h3>Himalaya Gupta</h3>
                    <h6>CEO Devgenics</h6>
                </div>
            </div>
            <button class="editProfileBtn btn btn-secondary" data-toggle="modal"
             data-target="#modalLoginForm"><i class="fa fa-edit"></i> <span>Edit
                Profile</span></button>
        </div>
        <div class="followersAndFollowing">
            <a href="#" data-toggle="modal"
            data-target="#followersFollowing" class="mainPageFAnfFBtns"><span>313</span> Followers</a>
            <a href="#" data-toggle="modal"
            data-target="#followersFollowing" class="mainPageFAnfFBtns"><span>290</span> Following</a>
        </div>
        `
    )
}

function constructHooksAndCollectionsTabbing(){ // data here
    let userHookPosts = '';
    for (let i=0;i<12;i++){
        userHookPosts += hookCard(); // send individual data here ex (data[i])
    }


    let userCollections = '';
    for (let i=0;i<6;i++){
        userCollections += createCollectionCard();
    }
    return (
        `
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                role="tab" aria-controls="nav-home" aria-selected="true">Hooks</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                role="tab" aria-controls="nav-profile" aria-selected="false">Collections</a>
        </div>
        <div class="tab-content" id="nav-tabContent" style="padding-top: 15px;">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
            aria-labelledby="nav-home-tab">
            <div class="content">
                <div class="hooksContainer">
                    <div class="topHeader">
                        <h5 style="padding-bottom: 0px; letter-spacing: 1px; color:#f2f2f2">User's
                            Hooks
                            </h5>
                          
                    </div>
                    <div class="hookScroller disappearScrollbar">
                        ${userHookPosts}
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel"
            aria-labelledby="nav-profile-tab">
            <div class="hooksContainer">
                <div class="topHeader">
                    <h5 style="padding-bottom: 0px; letter-spacing: 1px; color:#f2f2f2">User's
                        Collections
                    </h5>
                    <a href="collections.html"
                                style="color: white; font-size: 16px; text-decoration: none;">View
                                All</a>
                </div>
               
                    <div class="collectionsScroller disappearScrollbar">
                        <div class="collectionsContainer">
                            ${userCollections}
                        </div>
                    </div>
                
            </div>
        </div>
    </div>

        `
    )
}

function constructProfilePage(){
    const topHeaderHtml = constructProfilePageHeader();
    const topProfileBodyHtml = constructTopProfileBody();
    const hookAndCollectionTabbingHtml = constructHooksAndCollectionsTabbing();
    const editProfileModalHtml = editProfileModal();
    const userFollowersAndFollowingModal = followersAndFollowingModal();
    const assemblePage = `
    <div class="page-wrapper default-theme sidebar-bg bg1">
        <main class="page-content">
            <div id="overlay" class="overlay"></div>
            <div class="container-fluid" style="padding:0px;">
                <div class="pageWrapper" style="padding: 0px;">
                    ${topHeaderHtml}
                    <div class="profileBody">
                        ${topProfileBodyHtml}
                        ${hookAndCollectionTabbingHtml}
                    </div>

                </div>
                ${editProfileModalHtml}
                ${userFollowersAndFollowingModal}
        </main>
    </div>
    `
    rootElement.innerHTML = assemblePage;
    utility.addSlider('.hookScroller');
    utility.addSlider('.collectionsScroller')
    utility.getFollowersAndFollowing();
}

constructProfilePage();