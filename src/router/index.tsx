import Connect from "../pages/connect"
import Desposit from "../pages/desposit"
import Details from "../pages/details"
import Withdraw from "../pages/withdraw"

const routes = [
    {path:"/", exact: true , component: <Connect /> },
    {path:"/desposit", exact: false , component: <Desposit /> },
    {path:"/details", exact: false , component: <Details /> },
    {path:"/withdraw", exact: false , component: <Withdraw /> }
]
export default routes