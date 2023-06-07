import React from 'react';

const NowDate = () => {
    const date: string = new Date().toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <time dateTime="2015-11-18">{date}</time>
    );
}

export default NowDate;
