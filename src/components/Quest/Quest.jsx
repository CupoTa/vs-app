import React from 'react';
import './Quest.css';

const Quest = ({quest}) => {


    return (
        <div>
            { quest.id }
            { quest.todo }
        </div>
    );
};

export default Quest;