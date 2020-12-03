const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Setting Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"])

let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siterContent["main-content"] ["middle-img-src"])



//Setting Nav Items
const navItems = document.querySelectorAll('nav a');
const navItems0 = navItems[0].textContent = siteContent["nav"]["nav-item-1"];
const navItems1 = navItems[1].textContent = siteContent["nav"]["nav-item-2"];
const navItems2 = navItems[2].textContent = siteContent["nav"]["nav-item-3"];
const navItems3 = navItems[3].textContent = siteContent["nav"]["nav-item-4"];
const navItems4 = navItems[4].textContent = siteContent["nav"]["nav-item-5"];
const navItems5 = navItems[5].textContent = siteContent["nav"]["nav-item-6"];



//Setting CTA Section
let ctaText = document.querySelector('h1')
ctaText.textContent =  siteContent["cta"]["h1"]

let ctaButton = document.querySelector('button')
ctaButton.textContent =  siteContent["cta"]["button"]



//Setting Top Content
let topContent = document.querySelector('.top-content')
topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"]
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"]
topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"]
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"]

//Setting Bottom Content
let bottomContent = document.querySelector('.bottom-content')
bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"]
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"]
bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"]
bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"]
bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"]
bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"]



//Setting Contact Section
let contactSec = document.querySelector('.contact');
contactSec.children[0].textContent = siteContent["contact"]["contact-h4"] 
contactSec.children[1].textContent = siteContent["contact"]["address"] 
contactSec.children[2].textContent = siteContent["contact"]["phone"] 
contactSec.children[3].textContent = siteContent["contact"]["email"] 



//Setting Footer Section
let footerPL = document.querySelector('footer').children[0]
footerPL.textContent = siteContent["footer"]["copyright"] 
