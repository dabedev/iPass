import React from "react";
import Header from "../components/Header";
import { propsType } from '../types/_custom'

const Layout = (props: propsType) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

export default Layout;