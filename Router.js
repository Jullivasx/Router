const Router = class{

    static #root = null
    static #active = null
    static #views = {} 

    static init(root){
        Router.#root = root
    }

    static add(name, view){
        Router.#views[name] = view
    }

    static getActive(){
        return Router.#active
    }

    static open(name){

        if(!Router.#root){
            console.log('Router: Not Root')
            return
        }

        const view = Router.#views[name]

        if(!view){
            console.log('Router: Not Exist View ' + name)
            return
        }

        if(Router.#active){
            Router.#root.remove(Router.#active)
            Router.#active.close()
            Router.#active = null
        }

        Router.#active = view
        Router.#active.open()
        Router.#root.append(Router.#active)
        
    }

}