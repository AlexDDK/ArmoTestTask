import { IChange} from "../interfaces/user.interface"


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

export function changeFetchToDB(id : number, data: IChange, setOneUser: Function) : void {
    fetch(`${process.env.DOMAIN}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(data => data.json())
    .then((data) => setOneUser(data))
}

export function postFetchToDB( data: IChange, currentPage: number | undefined, setList: Function | undefined) : void {
    data && fetch(`${process.env.DOMAIN}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(data => data.json())
    .then(_ => currentPage && fetchToDB(currentPage, setList))
}

export function filterFetchToDB( data: IChange, userId : string, setList: Function, filterPage: number) : void {
    
    const searchString = dateToFilter(data, userId)

    searchString != '' &&
    fetch(`${process.env.DOMAIN}?${searchString}&_page=${filterPage}&_limit=10`)
    .then(data => data.json())
    .then(data => setList(data))
}


export function dateToForm (data: string) : string {    
    if (data) {
        const birth: Date = new Date(data)
        const year = birth.getFullYear()
        const month = String(birth.getMonth()).length > 1 ? String(birth.getMonth()+1) : `0`+ String(birth.getMonth()+1)
        const date = String(birth.getDate()).length >1 ? String(birth.getDate()) : '0' + String(birth.getDate())
        const hours = String(birth.getHours()).length >1 ? String(birth.getHours()) : '0' + String(birth.getHours())
        const minutes = String(birth.getMinutes()).length >1 ? String(birth.getMinutes()) : '0' + String(birth.getMinutes())
        return `${year}-${month}-${date}T${hours}:${minutes}`;
    }
}

export function dateFromForm(data: string) : string {
    const date = new Date(Date.parse(data))
    const arr = String(date).split(' ')
    const month = arr[1]
    const day = date.getDate()
    const year = date.getFullYear()
    const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    const amPm = date.getHours() > 12 ? 'PM' : 'AM'
    const min = String(date.getMinutes()).length >1 ? String(date.getMinutes()) : '0' + String(date.getMinutes())
    return `${arr[1]} ${day}, ${year} ${hour}:${min} ${amPm}`
}

export function dateToFilter(data: IChange, userId : string) {
    let concatString : string = ''
    userId != '' ? concatString += `id=${userId}` : concatString

    for (let prop in data) {
        let key = prop as keyof typeof data; 
        let value = data[key];
        if ((String(value) != '') && (String(value) != 'null')){
            concatString == '' ? concatString += `${key}=${value}` : concatString += `&${key}=${value}`
        }
    }
    return `${concatString}`
}