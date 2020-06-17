import SpaEngine from '@tools/SpaEngine'
import Router from './router'
const spaEngine = new SpaEngine()

spaEngine.run({
    router: Router.routers
}).$bind('#app')