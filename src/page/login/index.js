//! ** React State
import { useState, useEffect } from "react";

// ** MUI Import
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import {
    PersonOutline,
    Lock,
    CancelOutlined,
    CheckCircleOutline
} from '@mui/icons-material';

import './login.css'

const LoginPage = () => {

    // State Value
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // State Error Value
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    // State Text Value
    const [textEmail, setTextEmail] = useState('')
    const [textPassword, setTextPassword] = useState('')

    // Open Dialog
    const [successOpen, setSuccessOpen] = useState(false)
    const [failOpen, setFailOpen] = useState(false)

    // Function
    const onSubmit = () => {
        let check = 0

        if (email === '') {
            setErrorEmail(true)
            setTextEmail('กรุณากรอกอีเมล์')
            check++
        }

        if (password === '') {
            setErrorPassword(true)
            setTextPassword('กรุณากรอกรหัสผ่าน')
            check++
        }

        if (check === 0) {
            const checkEmail = email.split("@")

            if (checkEmail[1] !== 'Rtaf.mi.th') {
                setFailOpen(true)

            } else {
                setSuccessOpen(true)
            }
        }
    }

    const removeError = () => {
        if (email != '') {
            setErrorEmail(false)
            setTextEmail('')
        }

        if (password != '') {
            setErrorPassword(false)
            setTextPassword('')
        }
    }

    const clickClose = () => {
        setSuccessOpen(false)
        setFailOpen(false)
    }

    return (
        <Card>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#0f274d",
                        width: "75%",
                        height: "730px",
                        color: "white",
                    }}
                >
                    <Typography sx={{ mt: 35, fontSize: "100px" }} >Flex</Typography>

                </Box>
                <Box
                    sx={{
                        backgroundColor: "white",
                        width: "400px",
                        height: "250px",
                        mt: 20,
                    }}
                >
                    <Box sx={{ ml: 15 }}>
                        <Typography variant="h4">
                            เข้าสู่ระบบ
                        </Typography>
                    </Box>

                    <Box sx={{ ml: 5, mt: 5 }}>
                        <TextField
                            label="อีเมล์"
                            placeholder="example@email.com"
                            type="text"
                            variant="outlined"
                            sx={{ width: "90%" }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonOutline />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={e => {
                                setEmail(e.target.value)
                                removeError()
                            }}
                            error={errorEmail}
                            helperText={textEmail}
                        />
                    </Box>

                    <Box sx={{ ml: 5, mt: 5 }}>
                        <TextField
                            label="รหัสผ่าน"
                            placeholder="XXXXXXX"
                            type="password"
                            variant="outlined"
                            sx={{ width: "90%" }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={e => {
                                setPassword(e.target.value)
                                removeError()
                            }}
                            error={errorPassword}
                            helperText={textPassword}
                        />
                    </Box>

                    <Box sx={{ ml: 19, mt: 5 }}>
                        <Button
                            variant="contained"
                            color="warning"
                            onClick={() => onSubmit()}
                        >
                            เข้าสู่ระบบ
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Dialog
                open={failOpen}
                onClose={clickClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <CancelOutlined sx={{ color: "red", fontSize: "150px" }}/>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="h5" sx={{ display: "flex", justifyContent: "center" }}>
                        เข้าสู่ระบบผิดพลาด
                    </Typography>
                    <Typography variant="subtitle1" sx={{ display: "flex", justifyContent: "center" }}>
                        กรุณากรอกอีเมล์ให้ถูกต้อง
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                    <Button 
                    variant="contained"
                    color="error"
                    onClick={clickClose} 
                    >
                        ปิด
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={successOpen}
                onClose={clickClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <CheckCircleOutline color="success" sx={{ fontSize: "150px" }}/>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="h5" sx={{ display: "flex", justifyContent: "center" }}>
                        เข้าสู่ระบบสำเร็จ
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                    <Button 
                    variant="contained"
                    color="success"
                    onClick={clickClose} 
                    >
                        ปิด
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>


    )
}

export default LoginPage;