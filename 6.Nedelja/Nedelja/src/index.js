import { LaunchList } from './components/LaunchList'
import { getAllLaunches, getCompanyName } from './services'
import { CompanyName } from './components/CompanyName'
import { InputSelect } from './components/InputSelect'

const app = document.querySelector('#app')

getCompanyName().then(res => {
    app.append(CompanyName(res.data))
})

getAllLaunches().then(res => {
    app.append(InputSelect(res.data), LaunchList(res.data))
})


