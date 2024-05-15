const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
     
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

       
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

     
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

  
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });


    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

   
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

   
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }


    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);




var users = [
    { username: 'ali el', pass: 'ali123456', city: 'Agadir', orders: '5' },
    { username: 'amine ze', pass: '12345678', city: 'Marrakech', orders: '9' },
    { username: 'sarah', pass: 'sarah123', city: 'Paris', orders: '1' },
    { username: 'mohamed', pass: 'uhfns55', city: 'London', orders: '15' },
    { username: 'yassuo', pass: 'cccc888', city: 'Madrid' , orders: '30'},
    { username: 'vandale', pass: 'saaasf78', city: 'Agadir' , orders: '2'},
    { username: 'viper', pass: 'ffeee74', city: 'Madrid', orders: '20' },
    { username: 'jacki', pass: 'ali123456', city: 'Paris', orders: '3' },
    { username: 'jett', pass: 'popowww78', city: 'Marrakech', orders: '70' },
    { username: 'yoru', pass: 'aadwwf333', city: 'London', orders: '11' },
    { username: 'gekko', pass: '3344ww', city: 'Agadir', orders: '4' },
    { username: 'reyna', pass: 'redwdwx', city: 'Paris' , orders: '53'},
];

function add(event) {
    event.preventDefault(); 
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    if (password.length < 8) {
        document.getElementById('info').innerText = "Password must contain at least 8 characters";
        return false; 
    }
    
    var user = {
        username: username,
        password: password
    };

    users.push(user);
    console.log(users);
    document.getElementById("loginForm").action = "home2.html"; 
    document.getElementById("loginForm").submit(); 
    return true; 
}

function showpass() {
    var passval = document.getElementById('pass');
    var confirmPassval = document.getElementById('confirmPass');

    if (passval.type === 'password') {
        passval.type = 'text';
        confirmPassval.type = 'text'; 
    } else if (passval.type === 'text') {
        passval.type = 'password';
        confirmPassval.type = 'password'; 
    }
}
function login(){
    var nameval=document.getElementById('user');
    var passval=document.getElementById('pass');
    if(nameval==''){
        document.getElementById('info').innerText ='name must be filled out';
        return false;
    }
    else if(passval==''){
        document.getElementById('info').innerText ='password must be filled out';
        return false;
    }
    for(var i=0;i<user.length;i++){
        if(users[i].username==nameval || users[i].password==passval){
            return true;
        }
    }
    document.getElementById('info').innerHTML='password and username do not match';
    return false;
}


function show() {
   
    document.getElementById('butt').style.display = 'none';

 
    var table1 = document.getElementById('table');
    for (var i = 0; i < users.length; i++) {
        var userN = users[i].username;
        var pass = users[i].pass;
        var city = users[i].city;
        var orders = users[i].orders; 

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        td1.textContent = userN;
        td2.textContent = pass;
        td3.textContent = city;
        td4.textContent = orders;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table1.appendChild(tr);
    }
}

