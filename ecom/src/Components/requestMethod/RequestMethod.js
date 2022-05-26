import axios from 'axios'

const url="http://localhost:5000/api/"
const Token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmVlYmJhODNiMjQ1ZGI4Yzk1YTczMyIsImlzYWRtaW4iOnRydWUsImlhdCI6MTY0ODM2NjQ1Nn0.nCSlZbezp3_A4o9ZLe_Vpo282y_WerIIcmz3tD2gQwk"

export const userRequest=axios.create({
    baseURL:url
})
export const adminRequest=axios.create({
    baseURL:url,
    headers:{token:`Bearer ${Token}`}

})
