// sidebar componenents starts

export function constructSidebar(){
    const profileData = constrcutSidebarProfileSection();
    const intrestSection = constructSidebarIntrestSection();
    return (
        `
        <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content" style="background-color:rgb(0, 0, 0);  color:white;">
            <!-- sidebar-brand  -->
            <div class="sidebar-item sidebar-brand">
                <a href="#"
                    style="color: white; letter-spacing: 3px; font-size: 23px; display: flex; align-items: flex-end;"><img
                        src="img/dry-cleaning-with-mineral-spirits.svg" alt="" width="35"
                        style="margin-right: 10px;"> Wisook</a>
            </div>
            <!-- sidebar-header  -->
            <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                <div class="user-pic">
                    <img class="img-responsive img-rounded" src="img/professor.jpg"
                        style="width: 58px; height: 58px; object-position: top;" alt="User picture">
                </div>
                ${profileData}
            </div>

            <div class=" sidebar-item sidebar-menu">
                <ul>
                    <li class="header-menu">
                        <span>General</span>
                    </li>
                    <li class="sidebar-dropdown">
                        <a href="index.html">
                            <i class="fa fa-home"></i>
                            <span class="menu-text">Home</span>
                        </a>
                    </li>
                    <li class="sidebar-dropdown">
                        <a href="bookmark.html">
                            <i class="fa fa-bookmark"></i>
                            <span class="menu-text">Bookmarks</span>
                        </a>
                    </li>
                    <li class="sidebar-dropdown">
                        <a href="#">
                            <i class="fa fa-plus"></i>
                            <span class="menu-text">Create Collection</span>
                        </a>
                    </li>
                    <li class="header-menu">
                        <span>Your Intrests</span>
                    </li>
                    ${intrestSection}
                    <a href="" class="viewAllIntrests">View All</a>
                </ul>
            </div>
            <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->
        <div class="sidebar-footer" style="background-color: black; ">
            <div class="dropdown">

                <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-bell"></i>
                    <span class="badge-sonar"></span>
                </a>
                <div class="dropdown-menu notifications" aria-labelledby="dropdownMenuMessage">
                    <div class="notifications-header">
                        <i class="fa fa-bell"></i>
                        Notifications
                    </div>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                        <div class="notification-content">
                            <div class="icon">
                                <i class="fas fa-check text-success border border-success"></i>
                            </div>
                            <div class="content">
                                <div class="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. In totam explicabo</div>
                                <div class="notification-time">
                                    6 minutes ago
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="dropdown-item" href="#">
                        <div class="notification-content">
                            <div class="icon">
                                <i class="fas fa-exclamation text-info border border-info"></i>
                            </div>
                            <div class="content">
                                <div class="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. In totam explicabo</div>
                                <div class="notification-time">
                                    Today
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="dropdown-item" href="#">
                        <div class="notification-content">
                            <div class="icon">
                                <i class="fas fa-exclamation-triangle text-warning border border-warning"></i>
                            </div>
                            <div class="content">
                                <div class="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. In totam explicabo</div>
                                <div class="notification-time">
                                    Yesterday
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-center" href="#">View all notifications</a>
                </div>
            </div>

            <div class="dropdown">
                <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-cog"></i>

                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuMessage">
                    <a class="dropdown-item" href="#">My profile</a>
                    <a class="dropdown-item" href="#">Help</a>
                    <a class="dropdown-item" href="#">Setting</a>
                </div>
            </div>
            <div>
                <a href="#">
                    <i class="fa fa-power-off"></i>
                </a>
            </div>
            <div class="pinned-footer">
                <a href="#">
                    <i class="fas fa-ellipsis-h"></i>
                </a>
            </div>
        </div>
    </nav>
        `
    )
}

console.log()

function constrcutSidebarProfileSection(){
    // make api request here
    return(
        `
        <div class="user-info">
            <span class="user-name">Jhon
                <strong>Smith</strong>
            </span>
            <span class="user-role">Administrator</span>
            <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
            </span>
        </div>
        `
    )
}


function constructSidebarIntrestSection(){ // data here
    let intrestList = ''
    for (let i=0;i<6;i++){
        intrestList += constructIntrestBox(); // fdata here
    }
    return(
        `
        <div class="sidebarIntrestsBox">
            ${intrestList}
        </div>
        `
    )
}

// sidebar components ends


export function hookCard(){  //data here
     return(
         `
         <div class="hookPost">
            <div class="hookImgHolder">
                <img alt="" src="https://miro.medium.com/max/875/0*SvFmcAzTaRqT1fKD.jpg"
                    draggable="false">
                <h5 class="hookTitle">Learn Js The modern Way</h5>
                <i class="fa fa-expand openHook"></i>
                <div class="hookOverlay"></div>
            </div>
            <div class="hookStats">
                <div class="statSection like" title="Like hook">
                    <i class="fa fa-heart-o"></i>
                </div>
                <div class="statSection bookmark" title="Bookmark Hook">
                    <i class="fa fa-bookmark-o"></i>
                </div>
                <div class="statSection share" title="Share Hook">
                    <i class="fa fa-share-alt"></i>
                </div>
                <div class="statSection redirect" title="Visit Url">
                    <i class="fa fa-external-link"></i>
                </div>
            </div>
         </div>
         `
     )
}

export function constructIntrestBox(){ // data here
    return(
        `
        <div class="intrestBox" style="background-image:url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60')">
            <h1>Cars</h1>
            <div class="colorOverlay"></div>
        </div>
        `
    )
}

export function userCard(data){
    return(
        `
        <div class="card p-3">
            <div class="d-flex align-items-center">
                <div class="image"> <img
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                        class="rounded" > </div>
                <div class="ml-3 w-100">
                    <h5 class="mb-0 mt-0">Alex Morrision</h5> <span>Senior Journalist</span>
                    <div
                        class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div class="d-flex flex-column"> <span class="articles">Hooks</span>
                            <span class="number1">38</span> </div>
                        <div class="d-flex flex-column"> <span
                                class="followers">Followers</span> <span
                                class="number2">980</span> </div>
                        <div class="d-flex flex-column"> <span
                                class="followers">Following</span> <span
                                class="number2">320</span> </div>
                    </div>
                    <div class="button mt-2 d-flex flex-row align-items-center"> <button
                            class="btn btn-sm btn-outline-primary w-100">View</button> <button
                            class="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
                </div>
            </div>
        </div>
        `
    )
}

export function contstructNavbar(){
    return(
        `
        <nav class="navbar"
        style="margin: 0px;  overflow-y: hidden; flex-wrap: nowrap; justify-content: flex-start; background-color: rgb(0, 0, 0); position:sticky; top: 0px; border-bottom: 1px solid #454545; border-left: 1px solid #454545; height: 56px;">
        <img src="img/toggle.svg" id="toggle-sidebar" class="toggleSidebarBtn" alt="toggle Sidebar"
            title="Toggle Sidebar">
        <div class="searchBar">
            <button>
                <select class="searchCategory">
                    <option value="Hooks">Hooks</option>
                    <option value="Users">Users</option>
                    <option value="Intrests">Intrests</option>
                </select>
            </button>
            <input type="text" class="searchInput" spellcheck="false" placeholder="Search Hooks ...">
            <img src="img/search.svg" class="searchIcon" title="Search.." alt="">
        </div>
        <button type="button" id="addHook" class="btn btn-outline " data-toggle="modal"
            data-target="#exampleModalCenter" title="Post a hook"><i class="fa fa-plus"></i> Hook
            It</button>
        <div class="mobileNavbar">
            <div class="sidebar-item sidebar-brand">
                <a href="#"
                    style="color: white; text-decoration: none; letter-spacing: 3px; font-size: 23px; font-weight: bold; display: flex; align-items: flex-end;"><img
                        src="img/dry-cleaning-with-mineral-spirits.svg" alt="" width="35"
                        style="margin-right: 10px;"> WISOOK</a>
            </div>
            <div class="mobileNavbarOption">
                <i class="fa fa-search searchIconMobile"></i>
                <div class="mobileSidebarToggler" id="toggle-sidebar2">
                    <img src="img/professor.jpg" alt="" width="35" height="35" class="mobileProfileImage">
                    <div class="mobileSidebarTogglerBar">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="searchSection">
        <div class="searchBar2">
            <button>
                <select class="searchCategory">
                    <option value="Hooks">Hooks</option>
                    <option value="Users">Users</option>
                    <option value="Intrests">Intrests</option>
                </select>
            </button>
            <input type="text" class="searchInput" spellcheck="false" placeholder="Search Hooks...">
            <i class="fa fa-arrow-left searchIcon2"></i>
        </div>
        <div class="searchResults">
            <a href="#" class="searchResult">
                Modern Way to learn JS
            </a>
            <a href="#" class="searchResult">
                Best Resources To learn WebD
            </a>
            <a href="#" class="searchResult">
                Top 20 movies of 2020
            </a>
            <a href="#" class="searchResult">
                Modern Way to learn JS
            </a>
            <a href="#" class="searchResult">
                Best Resources To learn WebD
            </a>
            <a href="#" class="searchResult">
                Top 20 movies of 2020
            </a>
            </div>
        </div>
        `
    )
}

export function fillSearchResult(){
    return (
        `
        `
    )
}



export function addHookModal(){
    return (
        `
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content" style=" border: none;  box-shadow: 0px 0px 5px #000 ;">
                <div class="modal-body" style="padding:0px;height: auto;">
                    <div class="previewHook"
                        style="background: #696660; padding: 40px;   display: flex; justify-content: center; align-items: center;">
                        <div class="hookPost" style="margin:0px; box-shadow: 0px 5px 10px #000;">
                            <div class="hookImgHolder">
                                <img alt="" src="img/deafaultPicture.jpg" draggable="false">
                                <h5 class="hookTitle">Preview Hook Title ...</h5>
                                <i class="fa fa-expand openHook"></i>
                                <div class="hookOverlay"></div>
                            </div>
                            <div class="hookStats">
                                <div class="statSection like" style="pointer-events: none;"
                                    title="Like hook">
                                    <i class="fa fa-heart-o"></i>
                                </div>
                                <div class="statSection bookmark" style="pointer-events: none;"
                                    title="Bookmark Hook">
                                    <i class="fa fa-bookmark-o"></i>
                                </div>
                                <div class="statSection share" style="pointer-events: none;"
                                    title="Share Hook">
                                    <i class="fa fa-share-alt"></i>
                                </div>
                                <div class="statSection redirect" style="pointer-events: none;"
                                    title="Visit Url">
                                    <i class="fa fa-external-link"></i>
                                </div>
                            </div>
                        </div>
                        <p
                            style="position: absolute; font-weight: bold; top: 5px; color: #f2f2f2; left: 12px; font-size: 18px; letter-spacing: 2px;">
                            Preview</p>
                        <a class="close" style="position: absolute; right: 12px; top:5px; color: #f2f2f2;"
                            data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                    </div>
                    <div class="addHookUrl" style="height: auto;  padding: 10px;">
                        <p style="margin: 0px; font-weight: bold;">Paste A URL <i class="fa fa-link"></i> :
                        </p>
                        <input type="text" id="addHookUrl" spellcheck="false"
                            style="color:grey; width: 100%; font-weight: bold; box-shadow: 0px 0px 3px #000; border: none; padding: 5px 12px; margin-bottom: 10px; margin-top: 10px; border-radius: 5px;"
                            placeholder="Url here..">
                        <button type="button" class="btn btn-dark"
                            style="float: right; margin-bottom: 10px;">Hook It</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    )
}

export function managePagination(){
    return(
        `
        <div class="pagination p1">
                        <ul>
                            <a href="#">
                                <li>
                                    <</li> </a> <a class="is-active" href="#">
                                <li>1</li>
                            </a>
                            <a href="#">
                                <li>2</li>
                            </a>
                            <a href="#">
                                <li>3</li>
                            </a>
                            <a href="#">
                                <li>4</li>
                            </a>
                            <a href="#">
                                <li>5</li>
                            </a>
                            <a href="#">
                                <li>6</li>
                            </a>
                            <a href="#">
                                <li>></li>
                            </a>
                        </ul>
                    </div>
        `
    )
}