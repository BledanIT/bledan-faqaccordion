function toggleSection(num){
    const span = document.getElementById("question" + num).getElementsByClassName("question")[0].getElementsByTagName("span")[0];
    const paragraph = document.getElementById("question" + num).getElementsByTagName("p")[0];
    const content = document.getElementById("question" + num).getElementsByClassName("content")[0];
    if (span.classList.contains("minus")){
        span.classList.remove("minus");
        span.classList.add("plus");
        content.style.maxHeight = 0;
    }
    else{
        span.classList.remove("plus");
        span.classList.add("minus");
        content.style.maxHeight = "10rem";
    }
}

