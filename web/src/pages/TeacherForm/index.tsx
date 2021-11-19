import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';

import './styles.css'
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [biografia, setBio] = useState('');
    const [tipo, setSubject] = useState('');
    const [orientacao, setOrientacao] = useState('');
    const [tipo_logradouro, setTipoLogradouro] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [avatar, setAvatar] = useState('');
    const [dia, setDia] = useState('');

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('ong', {
            name,
            avatar,
            cnpj,
            whatsapp,
            biografia,
            tipo,
            orientacao,
            tipo_logradouro,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            dia,
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!')
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você pode receber doações."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome do local"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            name="avatar"
                            label="Foto do local"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            name="cnpj"
                            label="CNPJ"
                            value={cnpj}
                            onChange={(e) => { setCNPJ(e.target.value) }}
                        />

                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />

                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={biografia}
                            onChange={(e) => { setBio(e.target.value) }}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre o agendamento</legend>

                        <Select
                            name="subject"
                            label="Tipo de serviço"
                            value={tipo}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Receber Doação', label: 'Receber Doação' },
                                { value: 'Distribuir Doação', label: 'Distribuir Doação' },
                                { value: 'Ambos', label: 'Ambos' },
                            ]}
                        />
                        <br />
                        <Textarea
                            name="cost"
                            label="Escrever orientações sobre o local"
                            value={orientacao}
                            onChange={(e) => { setOrientacao(e.target.value) }}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Endereço do posto
                        </legend>
                        <div>
                            <Select
                                name="tipoRua"
                                label="Tipo de rua"
                                value={tipo_logradouro}
                                onChange={(e) => { setTipoLogradouro(e.target.value) }}
                                options={[
                                    { value: 'Rua', label: 'Rua' },
                                    { value: 'Avenida', label: 'Avenida' },
                                    { value: 'Praça', label: 'Praça' },
                                ]}
                            />
                            <br />
                            <Input
                                name="rua"
                                label="Logradouro"
                                value={logradouro}
                                onChange={(e) => { setLogradouro(e.target.value) }}
                            />
                            <Input
                                name="numero"
                                label="Número"
                                value={numero}
                                onChange={(e) => { setNumero(e.target.value) }}
                            />
                            <Input
                                name="complemento"
                                label="Complemento"
                                value={complemento}
                                onChange={(e) => { setComplemento(e.target.value) }}
                            />
                            <Input
                                name="bairro"
                                label="Bairro"
                                value={bairro}
                                onChange={(e) => { setBairro(e.target.value) }}
                            />
                            <Input
                                name="cidade"
                                label="Cidade"
                                value={cidade}
                                onChange={(e) => { setCidade(e.target.value) }}
                            />

                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Dias disponíveis
                        </legend>

                        <div className="schedule-item">
                            <Select
                                name="week_day"
                                label="Dia da semana"
                                value={dia}
                                onChange={(e) => { setDia(e.target.value) }}
                                options={[
                                    { value: 'Domingo', label: 'Domingo' },
                                    { value: 'Segunda a Sexta', label: 'Segunda a Sexta' },
                                    { value: 'Segunda-feira', label: 'Segunda-feira' },
                                    { value: 'Terça-feira', label: 'Terça-feira' },
                                    { value: 'Quarta-feira', label: 'Quarta-feira' },
                                    { value: 'Quinta-feira', label: 'Quinta-feira' },
                                    { value: 'Sexta-feira', label: 'Sexta-feira' },
                                    { value: 'Sábado', label: 'Sábado' },
                                ]}
                            />
                        </div>
                        <br />
                        <p><strong>*</strong>Todos horários são de 12:00 até 14:00<strong>*</strong></p>
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="warningIcon" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;