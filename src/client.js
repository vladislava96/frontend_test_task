import dataset from "./dataset.json"
import MyTemplate from "./pages/page.marko";

MyTemplate.renderSync(dataset).appendTo(document.body);

 
const selectors = document.getElementsByTagName('select')

for(let selector of selectors) {
    selector.addEventListener('click', () => {
        selector.classList.toggle('select-focus')
    })
    document.addEventListener('click', (event) => {
        if(event.target !== selector) {
            selector.classList.remove('select-focus')
        } else {
            return
        }
    })
    window.addEventListener('scroll', () => {
        selector.classList.remove('select-focus')
    });
}