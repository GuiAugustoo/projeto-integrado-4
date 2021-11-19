import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';
import Input from '../Input';
import './styles.css'


export interface Teacher {
    _id: number;
    cnpj: string;
    avatar: string;
    biografia: string;
    tipo: number;
    name: string;
    orientacao: string;
    whatsapp: string;
    tipo_logradouro: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    dia: string;
};

interface TeacherItemProps {
    teacher: Teacher;
}


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setFullName] = useState('');
    const [id_hospital] = useState(teacher._id);
    const [hospital] = useState(teacher.name);
    const [rg, setRg] = useState('');
    const [cpf, setCPF] = useState('');

    const history = useHistory();

    function handleSubmitScheduled(e: FormEvent) {
        e.preventDefault();

        api.post('schedules', {
            hospital,
            id_hospital,
            name,
            rg,
            cpf

        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/lista-postos');

        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >

                <h2>Criar agendamento</h2>
                <br />
                <Input
                    name="hospital"
                    label="Hospital"
                    readOnly
                    value={hospital}
                />

                <Input
                    name="name"
                    label="Nome completo"
                    value={name}
                    onChange={(e) => { setFullName(e.target.value) }}
                />

                <Input
                    name="rg"
                    label="RG"
                    value={rg}
                    onChange={(e) => { setRg(e.target.value) }}
                />

                <Input
                    name="cpf"
                    label="CPF"
                    value={cpf}
                    onChange={(e) => { setCPF(e.target.value) }}
                />

                <button className="buttonScheduled" type="submit" onClick={handleSubmitScheduled}>
                    Salvar cadastro
                </button>

            </Modal>
            <article className="teacher-item">
                <header>
                    <img src={teacher.avatar} alt={teacher.name} />
                    <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.cnpj}</span>
                    </div>
                    <button className="buttonExpandir" onClick={openModal}>
                        Agendar
                    </button>
                </header>
                <hr />
                <br />
                <p><strong>Sobre nós: </strong>{teacher.biografia}</p><br />
                <p><strong>Orientações: </strong>{teacher.orientacao}</p>
                <br />
                <h2 className="titulo">Endereço</h2><br />
                <p><strong>Tipo de Logradouro: </strong>{teacher.tipo_logradouro}</p>
                <p><strong>Logradouro: </strong>{teacher.logradouro}</p>
                <p><strong>Número: </strong>{teacher.numero}</p>
                <p><strong>Complemento: </strong>{teacher.complemento}</p>
                <p><strong>Bairro: </strong>{teacher.bairro}</p>
                <p><strong>Cidade: </strong>{teacher.cidade}</p>
                <br />
                <p><strong>Dias disponíveis: </strong>{teacher.dia}</p>
                <footer>
                    <p>
                        Tipo:
                        <strong>{teacher.tipo}</strong>
                    </p>
                    <a href={`https://wa.me/${teacher.whatsapp}`} target="_blank" rel="noopener noreferrer">
                        <img src={whatsappIcon} alt="Contato" />
                        Entrar em contato
                    </a>
                </footer>
            </article>
        </>
    )
}

export default TeacherItem;