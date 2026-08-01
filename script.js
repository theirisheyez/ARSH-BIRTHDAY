const giftBtn = document.getElementById("giftBtn");
const letter = document.getElementById("letter");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

giftBtn.addEventListener("click", () => {
confetti({
    particleCount: 200,
    spread: 120,
    origin: {
        y: 0.6
  }
});

bgMusic.play();

    document.querySelector(".gift-box").classList.add("open");
    
    setTimeout(() => {
        letter.style.display = "block";
        letter.scrollIntoView({
            behavior: "smooth"
        });
    },600);
    // Show the letter
    letter.style.display = "block";
    
    // Smooth scroll to the letter
    letter.scrollIntoView({
        behavior: "smooth"
    });

    // Change button text
    giftBtn.innerHTML = "🎉 Happy Birthday!";

    // Disable button after opening
    giftBtn.disabled = true;

    // Small celebration message
    setTimeout(() => {
        alert("🎂 Wishing you a day full of happiness, laughter, and unforgettable memories. Happy Birthday, Arsh! 🖤");
    }, 500);

});
const text = "Access Granted...";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();
function showEnding() {

    document.getElementById("finalScreen").style.display = "flex";

    const message = "Some people receive birthday wishes...\n\nYou deserve to feel how much you matter.\n\nHappy 21st Birthday, Arsh. 🖤";

    let i = 0;

    function type() {

        if (i < message.length) {
            document.getElementById("finalText").innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 70);
        } else 
        setTimeout(() => {
    document.getElementById("nextChapter").style.opacity = "1";

    // Fade out the music 3 seconds later
    setTimeout(fadeOutMusic, 3000);

}, 5000);

    }

    type();

}
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el=>{
    observer.observe(el);
});
const photos=document.querySelectorAll(".gallery img");

photos.forEach(photo=>{
    photo.addEventListener("click",()=>{
        lightbox.style.display="flex";
        lightboxImg.src=photo.src;
    });
});

function closeLightbox(){
    lightbox.style.display="none";
}
function closeWelcome(){
    document.getElementById("welcomePopup").style.display="none";
}
musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "🔊 Music On";
    } else {
        music.pause();
        musicBtn.innerHTML = "🔇 Music Off";
    }
});
let secretClicks = 0;

window.addEventListener("load", function () {

    const title = document.getElementById("secretTitle");

    title.addEventListener("click", function () {

        secretClicks++;

        if (secretClicks >= 5) {

            alert("🎉 Secret Unlocked!\n\nThank you for being part of my story.\n\nHappy 21st Birthday, Arsh! 🖤");

            secretClicks = 0;
        }

    });

});
function fadeOutMusic() {

    let fade = setInterval(() => {

        if (music.volume > 0.05) {
            music.volume -= 0.05;
        } else {
            music.volume = 0;
            music.pause();
            clearInterval(fade);
        }

    }, 200);

}