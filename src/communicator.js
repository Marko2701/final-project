export const getData = (url) => {
    return fetch("http://localhost:3333/api/" + url)
        .then(response => response.json())
}
export const getCompany = () => {
    return fetch("http://localhost:3333/api/companies")
        .then(response => response.json())
}

export const saveReport = (savedReport, token) => {
    console.log(savedReport)
    fetch("http://localhost:3333/api/reports", {
        method: 'POST',
        body: JSON.stringify({
            candidate: savedReport
            //uci u readme fajl i iskopirati sta pise pod  Post request payload example for "reports" endpoint. i onda raspakovati saveReport kao saveReport.name ili sta vec pise u objektu
        }),
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}
