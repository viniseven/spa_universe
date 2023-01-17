import { Pages } from "./pages.js"

export class Router {
    page = Pages();
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle(){
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        
        if(route == 'home.html'){
            this.page.stylePageHome()
        }else if(route == 'universe.html'){
            this.page.stylePageUniverse()
        }else {
            this.page.stylePageExploration()
        }

        fetch(route)
        .then((data) => data.text())
        .then((html) => {
            document.querySelector('#app').innerHTML = html
        })
    }
}


