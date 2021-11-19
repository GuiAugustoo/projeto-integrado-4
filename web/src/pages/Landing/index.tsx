import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo2.svg';
import landingImg from '../../assets/images/landing_medicine.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import api from '../../services/api';


function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);
    
    useEffect(() => {
        api.get('/connections').then(response => {
            const total = response.data.total;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img className="logo" src={logoImg} alt="Proffy"></img>
                    <h2>Doe sangue para o Brasil.</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/lista-postos" className="study">
                        Encontrar Postos
                    </Link>

                    <Link to="/cadastrar-postos" className="give-classes">
                        Cadastrar Postos
                    </Link>
                </div>

                <span className="total-connections">
                    Total de { totalConnections } doações já realizadas <img src={purpleHeartIcon} alt="conexões" />
                </span>
            </div>
        </div>
    )
}

export default Landing;