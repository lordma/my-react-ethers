import { FC,useState } from "react"
import { Box, Button, Paper } from "@mui/material"
import { ethers } from "ethers"
import { useNavigate } from "react-router-dom"

const Connect : FC = () => {

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")

    const handleConnectWallet = async () => {
        /* eslint @typescript-eslint/no-explicit-any: 0 */
        const { ethereum } = window as any
        if(ethereum){
            const provider = new ethers.BrowserProvider(ethereum)
            const signer = await provider.getSigner()
            const account = await signer.getAddress()
            const balance = await provider.getBalance(account)            
            navigate("/details", {state: { account, balance, provider, signer}})
        } else {
            // connect failed show error message
            setErrorMessage("error: Unable to Connect wallet!!!");
        }
        
        
    }
    return (
        <Paper elevation={0}>
            <Box sx={{width:"100vw"}}>
                <div className="container flex justify-center w-full text-center" style={{display:"block", textAlign:"center"}}>
                    <Button onClick={handleConnectWallet} variant="contained" sx={{textTransform: "none"}}>Connect Wallet</Button>
                </div>
                <div style={{color:"red"}}>{errorMessage}</div>
            </Box>
        </Paper>
    )

}
export default Connect