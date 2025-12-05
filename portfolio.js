// toggle icon navbar

// Scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY; // ✅ Use scrollY instead of screenY

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(link => {
                link.classList.remove('active');
            });

            // ✅ Correct query selector and syntax here
            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};





// // scroll sections
// let sections=document.querySelectorAll('section');
// let navlinks= document.querySelectorAll('header nav a');


// window.onscroll =() => {
//     sections.forEach(sec => {
//         let top=window.scrollY;
//         let offsett=sec.offsetTop - 100;
//         let height=sec.offsetHeight;
//         let id=sec.getAttribute('id');

//         if(top >= offsett && top < offsett + height){
//             //active navbar links
//             navlinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelectorAll('header nav a [href*='+ id + ']').classList.add('active');
                
//             });
//         }
//     });
    // sticky header
    let header_1=document.querySelector('header');

    header_1.classList.toggle('sticky' , window.scrollY > 100);
