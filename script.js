//your code here
const pNoSpan = document.getElementById('pNo'),
    listElement = document.getElementById('list'),
    nextBtn = document.getElementById('load_next'),
    prevBtn = document.getElementById('load_prev');

let pageNumber = 1;

const renderIssues=(issues)=>{
	while(listElement.firstChild){
		listElement.removeChild(listElement.firstChild);
	}
	issues.forEach(issues=>{
		const li = document.createElement('li');
		li.textContent = issue.title;
		listElement.appendChild(li);
		listElement.innerHTML = `
            <div><li style="color:black">${issues.title}</li>
			</div>`
	}
}



const fetchIssues = async()=> {
    pNoSpan.textContent = pageNumber;
    const url  = `https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`
    const res = await fetch(url);
    const data = await res.json();

    renderIssues(data);

}










nextBtn.addEventListener('click' ,handleNextClick);
prevBtn.addEventListener('click',prevClick);
document.addEventListener('DOMContentLoaded', fetchIssues);
