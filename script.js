async function dynamicCards() {

    let apiFetch = await fetch('https://dummyjson.com/products?sortBy=title&order=asc')
    let apiData = await apiFetch.json()
    let { products } = apiData
    let cardsBox = document.getElementById("dynamic-cards");
    console.log(apiData)
    products.map((product) => {

        let { title, description, availabilityStatus, category, warrantyInformation, price, rating, thumbnail, brand } = product
        cardsBox.innerHTML += ` <div class="product-card">
            <div class="product-badge">Premium</div>
            <div class="product-tilt-effect">
                <div class="product-image">
                    <img src="${thumbnail}"
                        alt="Premium Watch">
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${category}</div>
                <h2 class="product-title">${title}</h2>
                <div class="product-description">
                    <p>${description}</p>
                </div>
                <div class="product-features">
                    <span class="feature">Water Resistant</span>
                    <span class="feature">${warrantyInformation}</span>
                    <span class="feature">${brand}</span>
                </div>
                <div class="product-bottom">
                    <div class="product-price">
                        <span class="price-was">$1,299</span>
                        <span class="price-now">$${price}</span>
                    </div>
                    <button class="product-button">
                        <span class="button-text">Add to Cart</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </button>
                </div>
                <div class="product-meta">
                    <div class="product-rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <span class="rating-count">${rating}</span>
                    </div>
                    <div class="product-stock">${availabilityStatus}</div>
                </div>
            </div>
        </div>`

    })
}
dynamicCards()

// login form
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginPage = document.getElementById("login-section");
const toastMessage1 = document.getElementById("toast-msg-1")
const toastMessage2 = document.getElementById("toast-msg-2")

function loginFormActive() {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
}

function registerFormActive() {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
}

function closeForm() {
    loginPage.classList.add("hidden")
}

function openForm() {

    loginPage.classList.remove("hidden")
}

// register from working
let users = JSON.parse(localStorage.getItem("users")) || []

class userData {

    fullName
    email
    password
    constructor(fullName, email, password) {
        this.fullName = fullName,
            this.email = email,
            this.password = password
    }
}
const registerBtn = document.getElementById("register-btn")
const loginBtn = document.getElementById("login-btn")

function register(event) {

    let fullName = document.getElementById("full-name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 5000);

    timer2 = setTimeout(() => {
        progress.classList.remove("active");
    }, 5400);

    let savedUser = users.find((element) => element.email === email.value);

    if (savedUser?.email) {
        alert("Email already exists")

        cross.style.display = "block"
        setTimeout(() => {
            cross.style.display = "none"

        }, 5000);
        toastMessage1.textContent = "Registration Failed"
        toastMessage2.textContent = "This email already exists"
        progress.style.setProperty('--progress-bg', '#ff2667')
    }
    else {

        let newUser = new userData(fullName.value, email.value, password.value)
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users));

        alert("User registered successfully!");
        check.style.display = "block"
        setTimeout(() => {
            check.style.display = "none"

        }, 5200);
        toastMessage1.textContent = "Registration Successful"
        toastMessage2.textContent = `${fullName.value} registered successfully`
        progress.style.setProperty('--progress-bg', '#d39000ff')

        fullName.value = "";
        email.value = "";
        password.value = "";

        loginFormActive();

    }
}


function login(event) {

    event.preventDefault();

    let email = document.getElementById('login-email');
    let password = document.getElementById('login-password');
    

    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 5000);

    timer2 = setTimeout(() => {
        progress.classList.remove("active");
    }, 5400);

    let savedUser = users.find((element) => element.email === email.value);

    if (savedUser?.email === email.value && savedUser?.password === password.value) {

        let currentUserFullName = savedUser?.fullName

        localStorage.setItem('currentUser', JSON.stringify(savedUser));

        alert("Login successful!");

        toastMessage1.textContent = "login successfull!";
        toastMessage2.textContent = `Welcome ${currentUserFullName}`;
        progress.style.setProperty('--progress-bg', '#d39000ff')
        check.style.display = "block"

        setTimeout(() => {
            check.style.display = "none"
            closeForm()
        }, 2000);

        // setTimeout(() => {
        //     closeForm()
        // }, 1500);
        
        
        const logoutBtn = document.getElementById("log-out")

        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem('currentUser');
            const loginformOpenBtn = document.getElementById("loginform-open-btn")
            loginformOpenBtn.classList.add("hidden")
            const dropdownBox = document.getElementById("dropdown-box")
            console.log(dropdownBox)
            dropdownBox.style.display = 'none'

            setTimeout(() => {
                location.reload();
            }, 1000);
        });

        const loginBtn = document.getElementById("loginform-open-btn");
        const dropdownBox = document.getElementById("dropdown-box");

        if (loginBtn) loginBtn.style.display = "none";
        if (dropdownBox) dropdownBox.style.display = "block"

        UpdateCurrentUser();
    }
    else {
        
        cross.style.display = "block"
        setTimeout(() => {
            cross.style.display = "none"

        }, 5000);
        toastMessage1.textContent = "Login Failed"
        toastMessage2.textContent = "Invalid credentials, please try again."
        progress.style.setProperty('--progress-bg', '#ff2667')
        email.value = ""
        password.value = "";
    }

}

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    const dropdownBox = document.getElementById("dropdown-box");
    if (currentUser) {
        // User is logged in
        if (loginBtn) loginBtn.style.display = "none";
        if (dropdownBox) dropdownBox.style.display = "block";
        UpdateCurrentUser();
    } else {
        // No user logged in
        if (loginBtn) loginBtn.style.display = "block";
        if (dropdownBox) dropdownBox.style.display = "none";
    }

function UpdateCurrentUser() {
    const dropdownUserName = document.getElementById("dropdown-username")
    const dropdownEmail = document.getElementById("dropdown-user-email")
    const dropdownPassword = document.getElementById("dropdown-user-password")
    let currentDropdownUser = JSON.parse(localStorage.getItem("currentUser"))

    dropdownUserName.textContent = currentDropdownUser.fullName
    dropdownEmail.textContent = "➤ Email:" + " " + currentDropdownUser.email
    dropdownPassword.textContent = "➤ Password:" + " " + currentDropdownUser.password
}

const toast = document.querySelector(".toast"),
    check = document.getElementById("check"),
    cross = document.getElementById("delete"),
    closeIcon = document.getElementById("close-icon"),
    progress = document.querySelector(".progress");

let timer1, timer2;


closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
        progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
});


const dropdown = document.querySelector(".dropdown");
const dropdownArrow = document.getElementById("drop-arrow")
const dropdownMenu = () => {
    dropdown.classList.toggle("is-active");
    dropdownArrow.classList.toggle("dropdown-sign-active")
};

dropdown.addEventListener("click", () => {
    dropdownMenu();
});

// Hide when clicked outside the dropdown
window.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        if (dropdown.classList.contains("is-active")) {
            dropdownMenu();
        }
    }
});
