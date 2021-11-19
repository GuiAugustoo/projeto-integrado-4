import React, { useState, useEffect, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';


function TeacherList(e: FormEvent) {
    const [teachers, setTeachers] = useState([]);

    async function searchTeachers() {

        await api.get('ong/filter/all')
            .then(response => {
                setTeachers(response.data)
            });
    }

    useEffect(() => {
        searchTeachers();
    }, [])

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os postos disponíveis.">
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher._id} teacher={teacher} />; 
                })}
            </main>
        </div>
    )
}

export default TeacherList;