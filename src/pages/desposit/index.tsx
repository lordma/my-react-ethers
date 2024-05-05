import { FC, useState } from "react"
import { Button, Paper, Box, Typography, Alert } from "@mui/material"
import { useLocation } from "react-router-dom"
import { QRCodeCanvas } from "qrcode.react"

const Desposit : FC = () => {

    const location = useLocation()
    // eslint-disable-next-line no-unused-vars
    const [accountInfo] = useState<{ account: string }>(location.state as { account: string })

    const [copy, setCopy] = useState<boolean>(false)

    /**
     * Copy Address click event
     */
    const handleCopyAddress = () => {
        // account address copy to clipboard
        navigator.clipboard.writeText(accountInfo.account)
        setCopy(true)
    }

    return (
        <Paper elevation={0}>
            <Box sx={{width:"100vw"}}>
                <Box sx={{ border: "0px solid grey" }}>
                    <Typography variant="h5" component="div">
                        Desposit to Wallet: 
                    </Typography>
                    <Typography component="div" sx={{margin: "10px"}}>
                        <QRCodeCanvas
                            value={accountInfo.account}
                            size={128}
                            // bgColor={"#FF0000"}
                            // fgColor={"#FFC0CB"}
                            level={"L"}
                            includeMargin={false}
                            imageSettings={{
                                src: "../../../public/bnb-logo.svg",
                                x: undefined,
                                y: undefined,
                                height: 24,
                                width: 24,
                                excavate: true,
                            }}
                        />
                    </Typography>
                    
                    <Button onClick={handleCopyAddress} variant="contained" sx={{margin: "10px", textTransform: "none"}}>Copy Address</Button>
                </Box>
            </Box>
            {copy && <Alert severity="success">
                address copied success!!!
            </Alert>}
        </Paper>
    )

}

export default Desposit