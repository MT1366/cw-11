const menuBtn = document.getElementById("btn-menu");
const closeBtn = document.getElementById("btn-close");
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.style.right = "0";
});

closeBtn.addEventListener('click', () => {
    menu.style.right = "-200px";
});



const head = document.querySelector(".head");
const navigation = document.querySelector('#nav');
const stickyNav = function (entries) {
    // console.log(entries);
    const [entry] = entries;
    if (!entry.isIntersecting)
    {
        navigation.classList.add("sticky");
        return
    } 
     navigation.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: [0.5, 1],
});
headerObserver.observe(head);