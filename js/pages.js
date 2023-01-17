
export function Pages(){
    const background = document.querySelector('body')
    const homePage = document.querySelector('a[href*="/"]')
    const universePage = document.querySelector('a[href*="/universe"]')
    const explorationPage = document.querySelector('a[href*="/exploration"]')
    
    
    function stylePageHome(){
        background.classList.add('bg-home')
        background.classList.remove('bg-universe')
        background.classList.remove('bg-exploration')

        homePage.classList.add('active-link')
    } 

    function stylePageUniverse(){
        background.classList.add('bg-universe')
        background.classList.remove('bg-home')
        background.classList.remove('bg-exploration')

        universePage.classList.add('active-link')
    }

    function stylePageExploration(){
        background.classList.add('bg-exploration')
        background.classList.remove('bg-home')
        background.classList.remove('bg-universe')

        explorationPage.classList.add('active-link')
    }

    return { 
        stylePageHome,
        stylePageUniverse,
        stylePageExploration
     }
}
