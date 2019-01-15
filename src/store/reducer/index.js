const defState={
    tit:"hello world",
    fruitsData:[]
}
export default (store=defState,action) => {
    switch (action.type) {
        default:
            return store
            break;
    }
}
