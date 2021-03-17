import { constructSection, postJsonData } from '../getAndPostRequest.js';

export function loadMainJsFile() {
  jQuery(function ($) {
    toggleSidebarByOverlay();
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      $('.sidebar-content').mCustomScrollbar({
        axis: 'y',
        autoHideScrollbar: true,
        scrollInertia: 300,
      });
      $('.sidebar-content').addClass('desktop');
    }
  });

  function toggleSidebarByOverlay() {
    document.getElementById('overlay').onclick = () => {
      document.getElementsByClassName('page-wrapper')[0].classList.toggle('toggled')
    }
  }
}

export function enableLoader(containerElement,loaderGif) {
  containerElement.style.visibility = 0;
  containerElement.style.opacity = 0;
  loaderGif.style.display = 'block';
  loaderGif.style.visibility = 1;
  loaderGif.style.opacity = 1;
}

export function disableLoader(containerElement,loaderGif) {
  containerElement.style.visibility = 1;
  containerElement.style.opacity = 1;
  loaderGif.style.display = 'none';
  loaderGif.style.visibility = 0;
  loaderGif.style.opacity = 0;
}



export function addSlider(element) {
  const slider = document.querySelector(element);
  let isDown = false;
  let startX;
  let scrollLeft;
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  })
  slider.addEventListener('mouseleave', () => {
    isDown = false;
  })
  slider.addEventListener('mouseup', () => {
    isDown = false;
  })
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault();
    let x = e.pageX - slider.offsetLeft;
    let walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  })

}

function manageToggleSidebar() { // helper function
  const pageWrapper = document.getElementsByClassName('page-wrapper')[0];
  if (window.innerWidth > 925) {
    pageWrapper.classList.add('toggled')
  } else {
    pageWrapper.classList.remove('toggled')
  }

}

export function manageSidebarStateOnDifferentMediaDevices() {
  window.addEventListener('resize', manageToggleSidebar);
  manageToggleSidebar();
}

export function addNecessaryEventListeners() {
  let toggleSidebarBtn = document.getElementById('toggle-sidebar');
  let toggleSidebarBtn2 = document.getElementById('toggle-sidebar2');
  let searchSection = document.getElementsByClassName('searchSection')[0];
  let searchInput = document.getElementsByClassName('searchInput')[0];
  let searchCategories = document.getElementsByClassName('searchCategory');
  const pageWrapper = document.getElementsByClassName('page-wrapper')[0];
  toggleSidebarBtn.onclick = () => {
    pageWrapper.classList.toggle('toggled');
    if (toggleSidebarBtn.src.indexOf('img/toggle.svg') > -1) {
      toggleSidebarBtn.src = 'img/toggle (1).svg';
    } else {
      toggleSidebarBtn.src = 'img/toggle.svg'
    }
  }
  toggleSidebarBtn2.onclick = () => {
    pageWrapper.classList.toggle('toggled');
  }

  document.getElementsByClassName('searchIconMobile')[0].onclick = () => {
    searchSection.style.display = 'block';
  }
  document.getElementsByClassName('searchIcon2')[0].onclick = () => {
    searchSection.style.display = 'none';
  }
  searchInput.oninput = () => {
    if (searchInput.value.length > 0) {
      searchSection.style.display = 'block';
    } else {
      searchSection.style.display = 'none';
    }
  }
  for (let i = 0; i < searchCategories.length; i++) {
    searchCategories[i].addEventListener('change', () => {
      let searchBar = searchCategories[i].closest('.searchBar') || searchCategories[i].closest('.searchBar2');
      let selectedInput = searchBar.getElementsByClassName('searchInput')[0];
      switch (searchCategories[i].value) {
        case 'Hooks':
          selectedInput.placeholder = 'Search Hooks ...'
          break;
        case 'Users':
          selectedInput.placeholder = 'Search Users ...'
          break;
        case 'Intrests':
          selectedInput.placeholder = 'Search Intrests ...'
          break;
      }
    })
  }

}

export function loadLatestFeedJs() {
  const pageWrapperTwo = document.getElementsByClassName('pageWrapper')[0];
  const latestFeedContainer = document.getElementsByClassName('latestFeedContainer')[0];
  const latestFeedPost = latestFeedContainer.getElementsByClassName('hookPost');
  const imgHolder = latestFeedContainer.getElementsByClassName('hookImgHolder');
  const img = latestFeedContainer.getElementsByTagName('img');
  const stats = latestFeedContainer.getElementsByClassName('hookStats')
  new ResizeObserver(() => {
    if (pageWrapperTwo.offsetWidth > 1243 && pageWrapperTwo.offsetWidth < 1523) {
      for (let i = 0; i < latestFeedPost.length; i++) {
        latestFeedPost[i].style.width = '355px';
        imgHolder[i].style.width = '355px';
        img[i].style.width = '355px';
        stats[i].style.width = '355px';
      }
    } else {
      for (let i = 0; i < latestFeedPost.length; i++) {
        latestFeedPost[i].removeAttribute('style')
        imgHolder[i].removeAttribute('style')
        img[i].removeAttribute('style')
        stats[i].removeAttribute('style')
      }
    }
  }).observe(pageWrapperTwo);
}

export function manageOnClickIntrestBox(){
  const intrestBox = document.getElementsByClassName('intrestBox');
  for (let i=0;i<intrestBox.length;i++){
    intrestBox[i].onclick = () =>{
      window.location.replace('http://127.0.0.1:5500/intrestHooks.html')
    }
  }
}

export function manageHooksClickEvents(classOfElement,toggleClass, existingClass){
  let bookmarkBtns = document.getElementsByClassName(classOfElement);
  for (let i=0;i<bookmarkBtns.length;i++){
    bookmarkBtns[i].onclick = (e) => {
      let clikcedBtn = e.target;
      console.log(clikcedBtn)
      if (clikcedBtn.classList.contains('fa')){
        clikcedBtn.classList.toggle(toggleClass);
        clikcedBtn.classList.toggle(existingClass)
      }
      else {
        let faElement = clikcedBtn.getElementsByTagName('i')[0];
        faElement.classList.toggle(toggleClass);
        faElement.classList.toggle(existingClass)
      }
    }
  }
}


// test code after this comment 

var arrayForResults = [];
var count = 0;
function filterData(data,searchText){
    if (data){
        arrayForResults = data.results;
        count = 1;
    }
    let matches = arrayForResults.filter(arrElement => {
        const regex = new RegExp(`^${searchText}`,'gi');
        return arrElement.name.match(regex)
    })
    outputHtml(matches,searchText,count)
}

function outputHtml(matches,searchText,count){
    var searchResults = document.getElementsByClassName('searchResults')[0];;
   let html = matches.map(match => `<a href="${match.imgUrl}" class="searchResult">
   ${match.name}
</a>`
   ).join('');
   if (matches.length === 0 && count === 1){
       searchResults.innerHTML = `<p style="display:flex; justify-content:center; margin-top:40px; color:#808080; text-align:center;">No search Result Found <br> with keyword "${searchText}"</p>`
   }
   else {
    searchResults.innerHTML = html;
   }
}

function enableSearchLoader(loader){
    loader.style.display = 'block';
    loader.style.visibility = 1;
    loader.style.opacity = 1;
}
function enableHookLoader(loader){
    loader.style.display = 'flex';
    loader.style.visibility = 1;
    loader.style.opacity = 1;
}

function disableSearchLoader(loader){
    loader.style.display = 'none';
    loader.style.visibility = 0;
    loader.style.opacity = 0;
}

export function manageSearchResults(){
    var searchBox = document.getElementsByClassName('searchInput');
    var searchResults = document.getElementsByClassName('searchResults')[0];
    var loader2 = document.getElementById('loader2');
    var searchIcon = document.getElementsByClassName('searchIcon')[0];
    searchIcon.onclick = () => {
        if (searchIcon.classList.contains('fa-close'))
        searchBox[0].value = '';
        searchResults.style.display = 'none';
        searchIcon.classList.remove('fa-close');
    }
    
    for (let i=0;i<searchBox.length;i++){
      searchBox[i].addEventListener('input', async (e) => {
        let inputSearchBox = e.target;
        if (inputSearchBox.value.length > 0){
            searchResults.style.display = 'block';
            searchIcon.classList.add('fa-close');
            if (inputSearchBox.value.length == 1){
                arrayForResults = [];
                count = 0;
                enableSearchLoader(loader2) 
                let aisehi = await constructSection('./js/api handling/sample.json',filterData,inputSearchBox.value);
                disableSearchLoader(loader2)
            }
            else {
                filterData(undefined,inputSearchBox.value)
            }
        }
        else {
            searchResults.style.display = 'none';
            disableSearchLoader(loader2);
            searchIcon.classList.remove('fa-close');
            searchResults.innerHTML = '';
        }
    })

    }
}

export function disableBtn(ele) {
  ele.disabled = true;
  ele.style.background = '#cccccc';
  ele.style.color = '#666666';
}

export function enableBtn(ele) { 
  ele.disabled = false;
  ele.style.background = '#673AB7';
  ele.style.color = 'white';
}

export function displayErrorMsg(msg) {
  document.getElementById('message').innerText = msg;
}

export function removeErrorMsg() {
  document.getElementById('message').innerText = '';
}

export function manageAddHookModalPreveiw(){
  const addHookInputBox = document.getElementById('addHookUrl');
  const addHookBtn = document.getElementById('addHookBtnFinal')
  // addHookBtn.onclick = async () => {
  //   postJsonData('')
  // }
  const loader = document.getElementById('loader3')
  disableBtn(addHookBtn)
  addHookInputBox.addEventListener('input',async ()=>{
   
    enableHookLoader(loader)
    try {
      removeErrorMsg();
      await constructSection('https://jsonplaceholder.typicode.com/todos/1',showPreviewHook)
      enableBtn(addHookBtn)
    }
    catch{
      displayErrorMsg('Invalid Url')
      disableBtn(addHookBtn)
    }
    disableSearchLoader(loader)
    if (addHookInputBox.value.length == 0){
      disableBtn(addHookBtn)
    }
  })
}

function showPreviewHook(data){
  const previewHookTitle = document.getElementById('previewHookTitle');
  const previewHookImg = document.getElementById('previewHookImg');
  previewHookTitle.innerText = data.title;
  previewHookImg.src = 'img/batman.jpg';
}





export function loadLoginModalJs(){
  const signUpBtn = document.getElementsByClassName('signUp')[0];
  const signInBtn = document.getElementsByClassName('signIn');
  const showLoginform = document.getElementById('showLoginForm');
  const showRegisterform = document.getElementById('showRegisterForm');
  console.log({showRegisterform})
  for (let i=0;i<signInBtn.length;i++) signInBtn[i].onclick = () => openLoginModal();
  signUpBtn.onclick = () => openRegisterModal();
  showLoginform.onclick = () => showLoginForm();
  showRegisterform.onclick = () => showRegisterForm();
}

function showRegisterForm(){
  $('.loginBox').fadeOut('fast',function(){
      $('.registerBox').fadeIn('fast');
      $('.login-footer').fadeOut('fast',function(){
          $('.register-footer').fadeIn('fast');
      });
      $('.modal-title').html('Register with');
  }); 
  $('.error').removeClass('alert alert-danger').html('');
     
}
function showLoginForm(){
  $('#loginModal .registerBox').fadeOut('fast',function(){
      $('.loginBox').fadeIn('fast');
      $('.register-footer').fadeOut('fast',function(){
          $('.login-footer').fadeIn('fast');    
      });
      
      $('.modal-title').html('Login with');
  });       
   $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
  showLoginForm();
  console.log('working ++')
  setTimeout(function(){
      $('#loginModal').modal('show');    
  }, 230);
  
}
function openRegisterModal(){
  showRegisterForm();
  setTimeout(function(){
      $('#loginModal').modal('show');    
  }, 230);
  
}

function loginAjax(){
   shakeModal();
}

function shakeModal(){
  $('#loginModal .modal-dialog').addClass('shake');
           $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
           $('input[type="password"]').val('');
           setTimeout( function(){ 
              $('#loginModal .modal-dialog').removeClass('shake'); 
  }, 1000 ); 
}

export function changeInterestState(){
  const intrestStateBtn = document.getElementsByClassName('changeIntrestState');
  for (let i=0;i<intrestStateBtn.length;i++){
    intrestStateBtn[i].onclick = (e) => {
      console.log('sjsjsj')
    }
  }
}