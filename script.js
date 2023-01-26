//your code here
const pNoSpan = document.getElementById('pNo'),
    listElement = document.getElementById('list'),
    nextBtn = document.getElementById('load_next'),
    prevBtn = document.getElementById('load_prev');

let pageNumber = 1;


const fetchIssues = async()=> {
    pNoSpan.textContent = pageNumber;
    const url  = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
    const res = await fetch(url);
    const data = await res.json();

    renderIssues(data);

}










nextBtn.addEventListener('click' ,handleNextClick);
prevBtn.addEventListener('click',prevClick);
document.addEventListener('DOMContentLoaded', fetchIssues);
