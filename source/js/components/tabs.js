const tabs = document.body.querySelectorAll('.tabs__tab');
const deskTabs = document.body.querySelectorAll('.tabs__desk h2');

const setTabs = () => {
    if (tabs.length === deskTabs.length) {
        if (window.matchMedia('(min-width: 850px)').matches) {
            tabs.forEach((tab, index) => {
                deskTabs[0].classList.add('active');
                tab.classList.add('closed');
                tabs[0].classList.remove('closed');
    
                deskTabs[index].addEventListener('click', () => {
                    deskTabs.forEach((tab) => {
                        tab.classList.remove('active');
                    });
    
                    deskTabs[index].classList.add('active');
    
                    tabs.forEach((tab) => {
                        tab.classList.add('closed');
                    });
    
                    tabs[index].classList.remove('closed');
                });
            });
        } else {
            tabs.forEach((tab) => {
                tab.classList.add('closed');
                tab.querySelector('.tabs__info').classList.add('none');
    
                tab.addEventListener('click', (evt) => {
                    if (evt.target.tagName === 'H2') {
                        tab.classList.toggle('closed');
                        tab.querySelector('.tabs__info').classList.toggle('none');
                    }
                });
            });
        }
    }
}
 
export {setTabs}
