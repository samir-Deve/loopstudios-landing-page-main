import {data} from "../JS/data.js"
const humburgerBtn = document.querySelector(".banner__toggle-menue");
const navLinks = document.querySelector(".banner__nav-links");
const gridCont = document.querySelector(".main__creations-grid-cont");



humburgerBtn.addEventListener("click", () => {
	humburgerBtn.classList.toggle("is-active")
	navLinks.classList.toggle("show")
})

window.addEventListener("resize", () => {
	if(window.innerWidth > 720) {
		navLinks.classList.remove("show")
		humburgerBtn.classList.remove("is-active")
	}
	handleGridCardImgs()
})


let cards = '';

function handleGridCardImgs() {
	if(window.innerWidth < 768) {
		for(let i = 0;i < data.mobile.length; i++) {
			cards += `
			 <article class="main__grid-card">
						<img class="main__grid-card-img" src="${data.mobile[i].src}" alt="grid img">
						<span class="main__grid-card-text">
							${data.mobile[i].text}
						</span>
					</article>
			`
		}
	}
	else {
		for(let i = 0;i < data.desktop.length; i++) {
			cards += `
			 <article class="main__grid-card">
						<img class="main__grid-card-img" src="${data.desktop[i].src}" alt="grid img">
						<span class="main__grid-card-text">
							${data.desktop[i].text}
						</span>
					</article>
			`
		}
	}
	gridCont.innerHTML = cards
	cards = ''
}

handleGridCardImgs()

