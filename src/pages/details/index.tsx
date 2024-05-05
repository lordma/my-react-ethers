import { FC, useState } from "react"
import { Button, Paper, Box, CardContent, Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import { BrowserProvider, JsonRpcSigner, formatEther } from "ethers"

const Details : FC = () => {

    const location = useLocation()
    const navigate = useNavigate()
    
    // eslint-disable-next-line no-unused-vars
    const [accountInfo] = useState<{ account: string, balance: bigint, provider:BrowserProvider, signer: JsonRpcSigner }>(location.state as { account: string, balance: bigint, provider:BrowserProvider, signer: JsonRpcSigner })

    /**
     * Desposit click event
     */
    const handleDesposit = () => {
        console.log("accountInfo:", accountInfo);
        navigate("/desposit", {state: {account: accountInfo.account}})
    }

    /**
     * WithDraw click event
     */
    const handleWithdraw = () => {
        navigate("/withdraw", {state: {account: accountInfo.account, provider:accountInfo.provider, signer: accountInfo.signer}})
    }

    return (
        <Paper elevation={0}>
            <Box sx={{width:"100vw"}}>
                <Box  sx={{ border: "0px solid grey" }}>
                    <CardContent>
                        <Typography variant="body2">
                            Current Balance:
                        </Typography>
                        <Typography variant="h5" component="div">
                            {formatEther(accountInfo.balance)} BNB
                        </Typography>
                    </CardContent>
                </Box>
                <div>
                    <Button onClick={handleDesposit} variant="contained" sx={{margin: "10px", textTransform: "none"}}>Desposit</Button>
                    <Button onClick={handleWithdraw} variant="contained" sx={{textTransform: "none"}}>Withdraw</Button>
                </div>
            </Box>
        </Paper>
    )

}
export default Details