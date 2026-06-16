const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const sidebarLink = document.querySelectorAll('.sidebar-link');

function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
sidebarLink.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});
hamburgerBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);


const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(navLink =>{
    navLink.addEventListener('click', () =>{
        navLinks.forEach(btn =>{
            btn.classList.remove('active')
        })
        navLink.classList.add('active')
    })
})


function openModal() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('Back').style.display = 'block';
//disable scroll
    document.body.classList.add('no-scroll');
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('Back').style.display = 'none'
    document.getElementById('Back').addEventListener('click',closeModal)
//enable scroll
    document.body.classList.remove('no-scroll');
}
