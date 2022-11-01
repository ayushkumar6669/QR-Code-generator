const wrapper= document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click",()=>{
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    wrapper.classList.add("active");
}