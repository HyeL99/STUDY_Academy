const thumbBtn = document.querySelectorAll(".thumb>li"); //썸네일 버튼
const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modal img");
const modalTitle = document.querySelector("#modal .title");
const modalType = document.querySelector("#modal .type");

for (let aa of thumbBtn) {
	aa.addEventListener("click", (e) => {
		e.preventDefault();
		let img = e.currentTarget.querySelector("a").getAttribute("href");
		let title = e.currentTarget.querySelector(".title").innerHTML;
		let type = e.currentTarget.querySelector(".type").innerText;

		modal.classList.add("on");
		modalImg.setAttribute("src", img);
		modalTitle.innerHTML = title;
		modalType.innerText = type;
	});
}

modal.addEventListener("click", (e) => {
	modal.classList.remove("on");
});
