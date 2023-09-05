console.log("script running....")
document.querySelector('.cross').style.display='none';
function toggleReadMore(sectionId) {
    var section = document.getElementById(sectionId);
    console.log("Toggle function called for section:", sectionId);
    
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        console.log("Section is now visible.");
    } else {
        section.style.display = "none";
        console.log("Section is now hidden.");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const typingElements = document.querySelectorAll(".typing-text");

    typingElements.forEach((element) => {
        const words = element.innerText.split(" ");
        element.innerHTML = ""; // Clear the element
        let wordIndex = 0;

        function typeWord() {
            if (wordIndex < words.length) {
                const word = words[wordIndex];
                element.innerHTML += word + " "; // Add a space between words
                wordIndex++;

                setTimeout(typeWord, 500); // Adjust typing speed (in milliseconds)
            }
        }

        typeWord();
    });
});

document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    
    if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
    {
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        document.querySelector('.ham').style.display='none';
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline';
        }, 350);
        
    }
  
})