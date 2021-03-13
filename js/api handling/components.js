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
                        <a href="collections.html">
                            <i class="fa fa-plus"></i>
                            <span class="menu-text">Create Collection</span>
                        </a>
                    </li>
                    <li class="header-menu">
                        <span>Your Intrests</span>
                    </li>
                    ${intrestSection}
                    <a href="intrests.html" class="viewAllIntrests">View All</a>
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
                    <a class="dropdown-item text-center" href="notifications.html">View all notifications</a>
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
                <a href="#" data-toggle="modal" data-target="#modalLRForm">
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
        <div class="user-pic">
                    <a href="profile.html"><img class="img-responsive img-rounded" src="img/professor.jpg"
                        style="width: 58px; height: 58px; object-position: top;" alt="User picture"></a>
        </div>
        <div class="user-info">
            <a href="profile.html"><span class="user-name">Himalaya
                <strong>Gupta</strong>
            </span></a>
            <span class="user-role" style="color:gray; font-size:12px; font-weight:bold; letter-spacing:1px;">CEO Devgenics</span>
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
                <a href="#"><i class="fa fa-expand openHook"></i></a>
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
                   <a href="#" target="_blank"><i class="fa fa-external-link"></i></a>
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

export function managePagination(totalCount, nextPageUrl){
    let totalc = 48;
    let noOfPages = 48/12;
    let paginationsList = '';
    // no of pages 
    for (let i=0;i<noOfPages;i++){
        paginationsList += `
        <a href="">
        <li>
            <</li> </a> <a class="is-active" href="#">
        <li>i</li>
    </a>
        `
    }
    
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
                                <li>></li>
                            </a>
                        </ul>
                    </div>
        `
    )
}

export function editProfileModal(){
    return (
        `
        <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title w-100 font-weight-bold">Edit Profile</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3">
                    <form accept-charset="UTF-8" action="#" method="POST" target="_blank">
                        <div class="form-group">
                            <label for="exampleInputName">Full Name</label>
                            <input type="text" name="fullname" class="form-control" id="exampleInputName"
                                placeholder="Enter your name and surname" required="required">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1" required="required">Credential</label>
                            <input type="email" name="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter Credential (Ex - Teacher)">
                        </div>
                        <hr>
                        <div class="form-group mt-3">
                            <label class="mr-2">Update your Profile Image:</label>
                            <input type="file" name="file">
                        </div>
                        <hr>
                        <hr>
                        <div class="form-group mt-3">
                            <label class="mr-2">Update Your Cover Image:</label>
                            <input type="file" name="file">
                        </div>
                        <hr>
                        <button type="submit" class="btn btn-secondary btn-sm">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        `
    )
}

export function followersAndFollowingModal(){
    return(
        `
        <div class="modal fade" id="followersFollowing" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title w-100 font-weight-bold">User Followers And Following</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="overflow-y:auto; height: 500px; padding: 0px;">
                    <div class="nav nav-tabs"  id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active"  id="nav-following-tab" data-toggle="tab" href="#nav-following" role="tab" aria-controls="nav-home" aria-selected="true">Following</a>
                        <a class="nav-item nav-link" id="nav-followers-tab"  data-toggle="tab" href="#nav-followers" role="tab" aria-controls="nav-profile" aria-selected="false">Followers</a>
                      </div>
                    <div class="tab-content" id="nav-tabContentTwo">
                        <div class="tab-pane fade show active" id="nav-following"  role="tabpanel" aria-labelledby="nav-following-tab">
                            <div class="notification-ui_dd-content" >
                                <div class="notification-list notification-list--unread" style="margin-bottom: 0px; border-bottom: 1px solid black;">
                                    <div class="notification-list_content">
                                        <div class="notification-list_img">
                                            <a href="profile.html">
                                                <img src="img/Amy_Baker25.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="notification-list_detail">
                                            <a href="profile.html">
                                                <a href="profile.html">
                                                    <p><b>Brijesh</b></p>
                                                </a>
                                            </a>
                                            <p class="text-muted"><small>developer</small></p>
                                        </div>
                                    </div>
                                    <div class="notification-list_feature-img">
                                        <button type="button" class="btn btn-secondary btn-sm">Follow</button>
                                    </div>
                                </div>
                                <div class="notification-list notification-list--unread">
                                    <div class="notification-list_content">
                                        <div class="notification-list_img">
                                            <a href="profile.html">
                                                <img src="img/batman.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="notification-list_detail">
                                            <a href="profile.html">
                                                <a href="profile.html">
                                                    <p><b>Rajesh</b></p>
                                                </a>
                                            </a>
                                            <p class="text-muted"><small>CEO</small></p>
                                        </div>
                                    </div>
                                    <div class="notification-list_feature-img">
                                        <button type="button" class="btn btn-secondary btn-sm">Following</button>
                                    </div>
                                </div>
                        

                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-followers" role="tabpanel" aria-labelledby="nav-followers-tab">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    )
}

export function signupAndSigninModal(){
    return(
        `
        <div class="modal fade" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog cascading-modal" role="document">
    <!--Content-->
    <div class="modal-content">

      <!--Modal cascading tabs-->
      <div class="modal-c-tabs">

        <!-- Nav tabs -->
        <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i class="fas fa-user mr-1"></i>
              Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#panel8" role="tab"><i class="fas fa-user-plus mr-1"></i>
              Register</a>
          </li>
        </ul>

        <!-- Tab panels -->
        <div class="tab-content">
          <!--Panel 7-->
          <div class="tab-pane fade in show active" id="panel7" role="tabpanel">

            <!--Body-->
            <div class="modal-body mb-1">
              <div class="md-form form-sm mb-5">
                <i class="fas fa-envelope prefix"></i>
                <input type="email" id="modalLRInput10" class="form-control form-control-sm validate">
                <label data-error="wrong" data-success="right" for="modalLRInput10">Your email</label>
              </div>

              <div class="md-form form-sm mb-4">
                <i class="fas fa-lock prefix"></i>
                <input type="password" id="modalLRInput11" class="form-control form-control-sm validate">
                <label data-error="wrong" data-success="right" for="modalLRInput11">Your password</label>
              </div>
              <div class="text-center mt-2">
                <button class="btn btn-info">Log in <i class="fas fa-sign-in ml-1"></i></button>
              </div>
            </div>
            <!--Footer-->
            <div class="modal-footer">
              <div class="options text-center text-md-right mt-1">
                <p>Not a member? <a href="#" class="blue-text">Sign Up</a></p>
                <p>Forgot <a href="#" class="blue-text">Password?</a></p>
              </div>
              <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
            </div>

          </div>
          <!--/.Panel 7-->

          <!--Panel 8-->
          <div class="tab-pane fade" id="panel8" role="tabpanel">

            <!--Body-->
            <div class="modal-body">
              <div class="md-form form-sm mb-5">
                <i class="fas fa-envelope prefix"></i>
                <input type="email" id="modalLRInput12" class="form-control form-control-sm validate">
                <label data-error="wrong" data-success="right" for="modalLRInput12">Your email</label>
              </div>

              <div class="md-form form-sm mb-5">
                <i class="fas fa-lock prefix"></i>
                <input type="password" id="modalLRInput13" class="form-control form-control-sm validate">
                <label data-error="wrong" data-success="right" for="modalLRInput13">Your password</label>
              </div>

              <div class="md-form form-sm mb-4">
                <i class="fas fa-lock prefix"></i>
                <input type="password" id="modalLRInput14" class="form-control form-control-sm validate">
                <label data-error="wrong" data-success="right" for="modalLRInput14">Repeat password</label>
              </div>

              <div class="text-center form-sm mt-2">
                <button class="btn btn-info">Sign up <i class="fas fa-sign-in ml-1"></i></button>
              </div>

            </div>
            <!--Footer-->
            <div class="modal-footer">
              <div class="options text-right">
                <p class="pt-1">Already have an account? <a href="#" class="blue-text">Log In</a></p>
              </div>
              <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
            </div>
          </div>
          <!--/.Panel 8-->
        </div>

      </div>
    </div>
    <!--/.Content-->
  </div>
</div>
        `
    )
}