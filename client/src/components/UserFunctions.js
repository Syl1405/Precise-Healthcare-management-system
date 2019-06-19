import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            name: newUser.name,
            email: newUser.email,
            username: newUser.username,
            password: newUser.password
        })
        .then(res => {
            console.log("Registered")
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            username: user.username,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const test = aaa => {
    return axios
        .get('test/test')
        .then(res => {
            localStorage.setItem('datatoken', res.data)
            console.log(localStorage.datatoken)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const home = aaa => {
    return axios
        .get('home/home')
        .then(res => {
            
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const patient_home = user => {
    return axios
        .post('patient/home', {
            userid : user
        })
        .then(res => {
            
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const patient_1 = user => {
    return axios
        .post('patient/realtime', {
            userid : user
        })
        .then(res => {            
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const rank = aaa => {
    return axios
        .get('rank/rank')
        .then(res => {
            
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const sort = sort => {
    return axios
        .post('home/sort', {
            sort: sort
        })
        .then(res => {
            //localStorage.setItem('sorttoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const search = user => {
    return axios
        .post('home/search', {
            type: user.type,
            request: user.request
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const imgtype = userid => {
    return axios
        .post('patient/image/type', {
            userid: userid
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const imgdata = user => {
    return axios
        .post('patient/image/data', {
            userid: user.userid,
            type: user.type
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const audiodata = userid => {
    return axios
        .post('patient/audio', {
            userid: userid
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}