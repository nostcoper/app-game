import React from "react";
import { Link } from "react-router-dom";
import './Inicio.css';

export const MenuInicio = () => {
    const containerStyle = {

    };

    return (
        <div className="Container-Inicio">
            <div className="text-center">
                <h1>ZEPHYRIA: EL ANILLO DE AMASTELA</h1>
                <Link to="/Setup" className="btn btn-primary">Comenzar</Link>
            </div>
        </div>
    );
}
