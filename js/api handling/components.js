export function constructSidebar(){
    let isAuthenticated = !false;
    const profileData = constrcutSidebarProfileSection();
    const intrestSection = constructSidebarIntrestSection();
    const sidebarFooterOptions = getSidebarOptions(isAuthenticated);
    return (
        `
        <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content" style="background-color:rgb(0, 0, 0);  color:white;">
            <!-- sidebar-brand  -->
            <div class="sidebar-item sidebar-brand">
                <a href="/"
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
                        <a href=${isAuthenticated ? 'bookmark.html' : '#!'} class=${isAuthenticated ? '' : 'signIn'}>
                            <i class="fa fa-bookmark"></i>
                            <span class="menu-text">Bookmarks</span>
                        </a>
                    </li>
                    <li class="sidebar-dropdown">
                        <a href="${isAuthenticated ? 'collections.html' : '#!'}" class=${isAuthenticated ? '' : 'signIn'}>
                            <i class="fa fa-plus"></i>
                            <span class="menu-text">Create Collection</span>
                        </a>
                    </li>
                    <li class="header-menu">
                        <span>${isAuthenticated ? 'Your Interests' : 'Explore Intrests'}</span>
                    </li>
                    ${intrestSection}
                    <a href="intrests.html" class="viewAllIntrests">View All</a>
                </ul>
            </div>
            <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->
        <div class="sidebar-footer" style="background-color: black; ">
            <div class="dropdown" title="Notifications">
                <a href="notifications.html"  aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-bell"></i>
                    <span class="badge-sonar"></span>
                </a>
            </div>
            ${sidebarFooterOptions}
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

function getSidebarOptions(isAuthenticated){
    if (isAuthenticated)
    return (
        `
        <div class="dropdown" title="explore settings">
            <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-cog"></i>

            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuMessage">
                <a class="dropdown-item" href="#"><i class="fa fa-key" style="font-size:12px; font-weight:bold;"></i> Change Password</a>
                <a class="dropdown-item" href="#"><i class="fa fa-lock"></i> Privacy Notice</a>
                <a class="dropdown-item" href="#"><i class="fa fa-question"></i> Learn More</a>
            </div>
         </div>
    
     <div title="Log out" >
        <a href="#!">
            <i class="fa fa-power-off"></i>
        </a>
        
    </div>
        `
    )
    else 
    return (
        `
       
             <div class="signUp" data-toggle="modal" title="Sign Up">
                <a href="#!" >
                    <i class="fa fa-user"></i>
                </a>
                
            </div>
            <div class="signIn" data-toggle="modal" title="Sign In">
            <a href="#!" >
                <i class="fa fa-sign-in"></i>
            </a>
            
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
                <h5 class="hookTitle">Learn Js The modern Way Learn Js The modern Way</h5>
                <a href="#"><i class="fa fa-expand  openHook" title="view hook"></i></a>
                <div class="hookOverlay"></div>
            </div>
            <div class="hookStats">
                <div class="statSection like" title="Like hook">
                    <i class="fa fa-heart-o"></i>
                </div>
                <div class="statSection bookmark" title="Bookmark Hook">
                    <i class="fa fa-bookmark-o"></i>
                </div>
                <div class="statSection share" data-toggle="modal" data-target="#shareModal" title="Share Hook">
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
            <h1 style="text-align:center; margin-left:5px; margin-right:5px;  white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;">art and nature, flowers and animal</h1>
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
                            class="btn btn-sm btn-primary identifyFollowBtns w-100 ml-2">Follow</button> 
                    </div>
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
            <i class="fa fa-search searchIcon"></i>
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
        <div class="searchResults" id="style-1">
        </div>
        <div id="loader2" style="position:absolute; top:50%; left: 50%; transform: translate(-50%,-50%);">
        <img src="img/loader.gif" alt="" width="150">
    </div>
    </div>
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
                        <div class="hookPost" style="margin:0px; box-shadow: 0px 5px 10px #000; position:relative;">
                            <div class="hookImgHolder">
                                <img alt="" src="img/deafaultPicture.jpg" id="previewHookImg" draggable="false">
                                <h5 class="hookTitle" id="previewHookTitle">Preview Hook Title ...</h5>
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
                            <div id="loader3" style="z-index:50; position:absolute;  justify-content:center; align-items:center; top:0; left:0; width:100%; height:100%; background:#f2f2f2;">
                                <img src="img/loader3.gif" alt="" width="150">
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
                    <p id="message" style="color:red; margin-bottom:0px;"></p>
                        <p style="margin: 0px; font-weight: bold;">Paste A URL <i class="fa fa-link"></i> :
                        </p>
                       
                        <input type="text" id="addHookUrl" spellcheck="false"
                            style="color:grey; width: 100%; font-weight: bold; box-shadow: 0px 0px 3px #000; border: none; padding: 5px 12px; margin-bottom: 10px; margin-top: 10px; border-radius: 5px;"
                            placeholder="Url here..">
                        <button type="button" id="addHookBtnFinal" class="btn btn-dark"
                            style="float: right; margin-bottom: 10px;">Hook It</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    )
}
                
export function managePagination(totalCount){
   let noOfPages;
   let paginationsList = ` <a href="#">
                            <li>
                                <</li> </a> 
                                <a class="is-active" href="url/page=1">
                                <li>1</li>
                                </a>`
   if (totalCount % 12 == 0){
       noOfPages = totalCount / 12;
       console.log(noOfPages)
   } 
   else {
       noOfPages = (totalCount / 12) + 1
   }
   noOfPages = parseInt(noOfPages)
    for (let i=0;i<noOfPages-1;i++){
        console.log(i+2)
        paginationsList += `
        <a href="url/page=${i+2}">
        <li>${i+2}</li>
    </a>
        `
    }
    paginationsList += ` <a href="#!">
    <li>></li>
</a>`
    
    return(
        `
                    <div class="pagination p1">
                    <ul>
                       ${paginationsList}
                    </ul>
                    </div>
                `
    )
}

export function editProfileModal(){
    return (
        `
        <div class="modal fade" id="modalLoginForm"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered"  role="document">
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
                        <a class="nav-item nav-link active" style="padding:0px;" id="nav-following-tab" data-toggle="tab" href="#nav-following" role="tab" aria-controls="nav-home" aria-selected="true"><span class="fAndFBtn" style="display:block; padding:8px 16px;" id="following">Following</span></a>
                        <a class="nav-item nav-link " id="nav-followers-tab" style="padding:0px;" data-toggle="tab" href="#nav-followers" role="tab" aria-controls="nav-profile" aria-selected="false"><span class="fAndFBtn" style="display:block; padding:8px 16px;" id="followers">Followers</span></a>
                      </div>
                    <div class="tab-content" id="nav-tabContentTwo">
                        <div class="tab-pane fade show fAndFpane active" id="nav-following" style="position:relative; height:460px;"  role="tabpanel" aria-labelledby="nav-following-tab">
                            <div class="loader5" id="loader-following" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);">
                                <img src="img/loader4.gif" alt="Spinning Loader">
                            </div>
                        </div>
                        <div class="tab-pane fade fAndFpane" id="nav-followers"   style="position:relative; height:460px;" role="tabpanel" aria-labelledby="nav-followers-tab">
                            <div class="loader5" id="loader-followers" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);">
                                <img src="img/loader4.gif" alt="Spinning Loader">
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

export function fillSingleNotificationElement(notificationType){ // also data here
    switch(notificationType) {
      case 'like' :
        return (
          `
          <a href="" class="notification-list notification-list--unread">
          <div class="notification-list_content">
            <div class="notification-list_img">
              <i class="fa fa-heart fa-2x text-danger"></i>
            </div>
            <div class="notification-list_detail">
              <p><b>Hurray!</b> Your hook got new likes</p>
  
              <p class="text-muted"><small>10 mins ago</small></p>
            </div>
          </div>
          <div class="notification-list_feature-img">
            <img src="img/Amy_Baker25.jpg" alt="Feature image">
          </div>
        </a>
          `
        )
      case 'comment' :
        return (
          `
          <a href="" class="notification-list notification-list--unread">
          <div class="notification-list_content">
            <div class="notification-list_img">
              <i class="fa fa-comment fa-2x text-primary"></i>
            </div>
            <div class="notification-list_detail">
              <p><b>Hurray!</b> Your hook started a coversation !</p>
  
              <p class="text-muted"><small>10 mins ago</small></p>
            </div>
          </div>
          <div class="notification-list_feature-img">
            <img src="img/Amy_Baker25.jpg" alt="Feature image">
          </div>
        </a>
          `
        )
      case 'follow' :
        return (
          `
          <a href="" class="notification-list notification-list--unread">
          <div class="notification-list_content">
            <div class="notification-list_img">
              <img src="img/batman.jpg" alt="">
            </div>
            <div class="notification-list_detail">
              <p><b>John </b> is now following you</p>
              <p class="text-muted"><small>10 mins ago</small></p>
            </div>
          </div>
        </a>
          `
        )
    }  
  }

  export function loginAndSignupModal(){
      return (
          `
          <div class="modal fade login" id="loginModal">
          <div class="modal-dialog modal-dialog-centered login animated">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <h4 class="modal-title">Login with</h4>
                  </div>
                  <div class="modal-body">
                      <div class="box">
                          <div class="content">
                        
                          <div class="google-btn">
                            <div class="google-icon-wrapper">
                              <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                            </div>
                            <p class="btn-text"><b>Sign in with google</b></p>
                          </div>
                              <div class="division">
                                  <div class="line l"></div>
                                  <span>or</span>
                                  <div class="line r"></div>
                              </div>
                              <div class="error"></div>
                              <div class="form loginBox">
                                  <form method="" action="" accept-charset="UTF-8">
                                      <input id="email" class="form-control" type="text" placeholder="Email"
                                          name="email">
                                      <input id="password" class="form-control" type="password" placeholder="Password"
                                          name="password">
                                      <input class="btn btn-default btn-login" type="button" value="Login"
                                          onclick="loginAjax()">
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div class="box">
                          <div class="content registerBox" style="display:none;">
                              <div class="form">
                                  <form method="" html="{:multipart=>true}" data-remote="true" action=""
                                      accept-charset="UTF-8">
                                      <input id="email" class="form-control" type="text" placeholder="Email"
                                          name="email">
                                      <input id="password" class="form-control" type="password" placeholder="Password"
                                          name="password">
                                      <input id="password_confirmation" class="form-control" type="password"
                                          placeholder="Repeat Password" name="password_confirmation">
                                      <input class="btn btn-default btn-register" type="button" value="Create account"
                                          name="commit">
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <div class="forgot login-footer">
                        <span>
                              <a href="#!" id="">Forgot Password ?</a>
                              </span>
                              <br>
                          <span>Looking to
                              <a href="#!" id="showRegisterForm">create an account</a>
                              ?</span>
                      </div>
                      <div class="forgot register-footer" style="display:none">
                          <span>Already have an account?</span>
                          <a href="#!" id="showLoginForm">Login</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
          `
      )
  }

export function singleComment(){
    console.log('working')
    return (
        `
        <div class="singleComment" style="display: flex; align-items: flex-start;">
            <img src="img/batman.jpg" style="width: 25px; height: 25px; object-position: top; border-radius: 50%; margin-right: 8px; object-fit:cover;" alt="" class="commenterImg">
            <div class="nameAndComment">
                 <h6 style="font-size: 13px; margin-bottom: 0px;">Himalaya Gupta</h6>
                <p style="font-size: 14px; font-weight: 600; color: rgb(116, 114, 114);">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, eum!</p>
            </div>
        </div>
        `
    )
}
export function hookDescription(){
    return(
        `
        <div class="descAndStats" >
            <div class="hookStats2">
                <div class="totalLikes"><i class="fa fa-heart"></i> 3.2k Likes</div>
                <div class="totalViews"><i class="fa fa-eye"></i> 3.6k Views</div>
                <div class="popularityScore"><i class="fa fa-bullseye"></i> 88% Score</div>
            </div>
            <div class="descHook">
                <p>Learn modern JavaScript from scratch, and practice in an intuitive environment. The challenges are inspired by real-world projects to make sure that you're learning the best practices, one step at a time. Try the first 42 lessons, challenges, projects & flashcards for free. Upgrade to Pro Services ...</p>
            </div>
        </div>
        `
    )
}

export function hookCard2(data) {  //data here
    return (
        `
         <div class="hookPost">
            <div class="hookImgHolder">
                <a href="javascript:void(0)"><img alt="" src="${data.image}"
                    draggable="false"></a>
                <h5 class="hookTitle">${data.title}</h5>
                <a href="javascript:void(0)">${data.owner_data.is_owner ? `<i class="fa fa-trash openHook" style="font-size:20px;" title="Delete Hook" id="deleteHook"></i>` : `<i class="fa fa-paperclip openHook" style="font-size:20px;" title="Add to My Hooks" id="pinHook"></i>`} </a>
                <div class="hookOverlay"></div>
            </div>
            <div class="hookStats">
                <div id="${data.id}" class="statSection like" title="Like hook">
                    <i id="${data.id}" class='${data.is_liked ? 'fa fa-heart' : 'fa fa-heart-o'}'></i>
                </div>
                <div id="${data.id}" class="statSection bookmark" title="Bookmark Hook">
                    <i id="${data.id}" class='${data.is_bookmarked ? "fa fa-bookmark" : "fa fa-bookmark-o"}'></i>
                </div>
                <div class="statSection share" title="Share Hook">
                    <i class="fa fa-share-alt"></i>
                </div>
                <div class="statSection redirect" title="Visit Url">
                   <a href="${data.url}" target="_blank"><i class="fa fa-external-link"></i></a>
                </div>
            </div>
         </div>
         `
    )
}

export function createCollectionCard(){
    let x = 1;
    if (x < 4){
        return (
            `
            <a class="card1" href="#">
                <div class="collection">
                <img src="https://th.bing.com/th/id/OIP.ZMIkHl9meMnoVEQSbBgTBgHaEK?w=271&h=180&c=7&o=5&pid=1.7">
                </div>
        
                <div class="collectionOverlay"></div>
                <h4 class="collectionName" > My collection </h4>
            </a> 
            `
        )
    }else {
        return (
            `
            <a href="#" class="card1">
            <div class="cl p">
              <div class="collection">
                <img src="https://www.bing.com/th?id=OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK&w=316&h=160&c=8&rs=1&qlt=90&pid=3.1&rm=2">
              </div>
            </div>
      
            <div class="cl q">
              <div class="collection">
                <img src="https://tse1.mm.bing.net/th/id/OET.b6b318b492f44537b42d7240709437cc?w=272&h=272&c=7&rs=1&o=5&pid=1.9">
              </div>
      
            </div>
      
            <div class="cl r">
              <div class="collection">
                <img src="https://images.unsplash.com/photo-1477948879622-5f16e220fa42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60">
              </div>
            </div>
      
            <div class="cl s">
              <div class="collection">
                <img src="https://th.bing.com/th/id/OIP.ZMIkHl9meMnoVEQSbBgTBgHaEK?w=271&h=180&c=7&o=5&pid=1.7">
              </div>
            </div>
      
            <div class="collectionOverlay"></div>
      
            <h4 class="collectionName" > My collection </h4>
        </a>
            `
        )
    }
}

export function createCollectionModal(){
    return (
        `
        <div class="modal fade" id="createCollectionModal"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered"  role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title w-100 font-weight-bold">Create Collection</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body ">
                    <form accept-charset="UTF-8" action="#" method="POST" target="_blank">
                        <div class="form-group">
                            <label for="exampleInputName">Collection Name</label>
                            <input type="text" name="collectionName" class="form-control" id="collectionNameInput"
                                placeholder="Name Your Collection" required="required">
                        </div>
            
                        <button type="submit" id="createCollectionBtn" class="btn btn-success btn-sm">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        `
    )
}


// export function shareModal(){
//     return (
//         `
//         <div class="modal fade" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
//         aria-hidden="true">
//         <div class="modal-dialog" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLabel">Share via</h5>
//               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               <div class="share-btn-container">
//                 <div class="d-grid gap-2">
//                   <button class="btn btn-light btn-block" type="button">
//                     <a href="#" class="facebook-btn">
//                       <i class="fa fa-facebook " style="color:#3b5998;"> Facebook</i>
//                     </a>
//                   </button>
//                   <button class="button" data-sharer="twitter" data-width="800" data-height="600" data-title="h" data-url="www.google.com">Share!</button>
//                   <button class="btn btn-light btn-block"  type="button">
//                     <a href="#" class="twitter-btn">
//                       <i class="fa fa-twitter"> Twitter</i>
//                     </a>
//                   </button>
//                   <button class="btn btn-light btn-block" type="button">
//                   <a href="#" class="whatsapp-btn">
//                     <i class="fa fa-whatsapp" style="color:#4FCE5D;"> Whatsapp</i>
//                   </a>
//                 </button>
              
              
//                   <button class="btn btn-light btn-block" type="button" onclick="Copy();">
//                     Copy Link
//                   </button>
//                   <br>
//                   <input type="text" id="urlCopied"  style="width:100%; max-width:500px;">
              
              
              
//                 </div>
//               </div>
              
//             </div>
            
//           </div>
//         </div>
//       </div>
//         `
//     )
// }