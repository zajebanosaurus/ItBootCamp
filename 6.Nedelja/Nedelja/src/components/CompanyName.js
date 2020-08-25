export const CompanyName = (name) => {
    const companyName = document.createElement('div')
    companyName.className = 'comapny-name'
    companyName.textContent = name.name

    return companyName
}