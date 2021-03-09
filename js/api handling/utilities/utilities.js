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