

export function fetchToDB(currentPage : number, setList : Function) : void {
    fetch(`${process.env.DOMAIN}?_page=${currentPage}&_limit=10`)
        .then((resp) =>  resp.json())
        .then((data) => setList(data))
        .catch(err => alert(err))
}

export function delFetchToDB(id: number, setList : Function, currentPage: number) : void {
    fetch(`${process.env.DOMAIN}/${id}`, {
        method: "DELETE",
    })
    .then(data => fetch(`${process.env.DOMAIN}?_page=${currentPage}&_limit=10`))
    .then(resp =>  resp.json())
    .then(data => setList(data))
    .catch(err => alert(err))
}