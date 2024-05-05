import { FC, useState, useRef } from "react"
import { Button, Paper, Typography, Box, TextField } from "@mui/material"
import { useLocation } from "react-router-dom"
import { BrowserProvider, JsonRpcSigner, ethers, parseEther } from "ethers";

const Withdraw : FC = () => {

    const location = useLocation()
    // eslint-disable-next-line no-unused-vars
    const [accountInfo] = useState<{ account: string, provider:BrowserProvider, signer: JsonRpcSigner }>(location.state as { account: string, provider:BrowserProvider, signer: JsonRpcSigner })
    const withdrawAccountRef = useRef<HTMLInputElement>(null)
    const withdrawAmountRef = useRef<HTMLInputElement>(null)

    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    

    const handleWithdraw = async () => {
        console.log("from account :", accountInfo.account)
        console.log("to account :", withdrawAccountRef.current?.value)
        console.log("amount :", withdrawAmountRef.current?.value)
        setErrorMessage("")
        setSuccessMessage("")
          /* eslint @typescript-eslint/no-explicit-any: 0 */
        const { ethereum } = window as any
        if(ethereum){
            const provider = new ethers.BrowserProvider(ethereum)
            // Private Key
            const signer = new ethers.Wallet("5615961f41826d96880dd409936f3b1915b1a4421dd322e3d631d7edf5eac7a6", provider);
            signer.sendTransaction({to:withdrawAccountRef.current?.value??"", value: parseEther(withdrawAmountRef.current?.value?? "")}).then(reps => {
                console.log(reps);
                setErrorMessage("");
                setSuccessMessage("withdraw successed!!!")
            }).catch(error => {
                console.log(error);
                setErrorMessage("withdraw failed!!!")
                setSuccessMessage("")
            })
        } else {
            // connect failed show error message
            setErrorMessage("error: Unable to Connect Wallet!!!");
        }

    }
    return (
        <Paper elevation={0}>
            <Box sx={{ border: "0px solid grey", width:"100vw" }}>
                {/* <Box sx={{width:"300px"}}> */}
                    <Typography variant="h5" component="div" sx={{margin: "10px"}}>WithDraw</Typography>
                    <Typography variant="body2" sx={{paddingRight:"calc(210px)", margin: "10px"}}>WithDraw To: </Typography>
                    <TextField id="outlined-basic" label="" sx={{width:"300px"}} inputRef={withdrawAccountRef} variant="outlined" />   
                    <Typography variant="body2" sx={{paddingRight:"calc(235px)", margin:"10px", marginTop:"20px"}}>Amount:</Typography>
                    <TextField id="outlined-basic" label="" sx={{width:"300px"}} inputRef={withdrawAmountRef} variant="outlined" />
                {/* </Box> */}
            </Box>
            <div>    
                <Button onClick={handleWithdraw} variant="contained" sx={{margin: "20px", textTransform: "none"}}>Withdraw</Button>
            </div>
            <div style={{color:"red"}}>{errorMessage}</div>
            <div style={{color:"green"}}>{successMessage}</div>
        </Paper>
    )

}
export default Withdraw