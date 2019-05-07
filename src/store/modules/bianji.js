
const app = {
    state: {
        bianjis:null,

    },
    mutations: {
        bianji(state,sp2){
            state.bianjis=sp2
            console.log(state.bianjis,'编辑app')
        }
    }
  }
  
  export default app