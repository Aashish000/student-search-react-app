import React from 'react';
import { Card } from '../card/card.component';
import './style-list.styles.css';

export const StudentList = props =>(
    <div className = 'card-list'>
        {props.students.map(student => (
            <Card key ={student.id} student = {student}/>
        ))};
    </div>

);