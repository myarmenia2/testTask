import React, {useEffect} from "react";
import {Box, TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {routes} from "../../constants/routes";
import {SubmitHandler, useForm} from "react-hook-form";
import {shallowEqual, useDispatch, useSelector,} from "react-redux";
import {userLogin} from "../../redux/actions/loginActions";
import {authStateSelector} from "../../redux/selectors";

import "./Login.css"

interface IFormInput {
    email: string;
    password: string;
}

export const LogIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm<IFormInput>();
    const isAuthenticated = useSelector(authStateSelector, shallowEqual)

    useEffect(() => {
        isAuthenticated && navigate(routes.home, { replace: true });
    }, [ isAuthenticated ])

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        dispatch(userLogin(data));
        navigate(routes.home)
    }

    return (
        <div className={"wrapper"}>
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <TextField
                        pattern="[A-Za-z]+"
                        margin="normal"
                        variant="outlined"
                        label="email"
                        autoComplete="email"
                        autoFocus
                        helperText={errors?.email ? errors.email.message : null}
                        {...register("email",
                            {
                            required:"Required field",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                        error={!!errors?.email}
                    />
                    <TextField
                        variant="outlined"
                        label="password"
                        autoComplete="password"
                        autoFocus
                        helperText={errors?.password ? errors.password.message : null}
                        {...register("password",{required:"Required field"})}
                        error={!!errors?.password}
                    />
                </Box>
                <Link className={"link"} to={routes.registration}>Registration</Link>
                <button type="submit">Submit</button>
            </form>
        </div>

    );
};


