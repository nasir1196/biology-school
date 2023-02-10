import React from 'react';
import Biochemistry from './../../pages/Biochemistry';
import Biotechnology from './../../pages/Biotechnology';
import Botany from './../../pages/Botany';
import CellBiology from './../../pages/CellBiology';
import Genetics from './../../pages/Genetics';
import Microbiology from './../../pages/Microbiology';
import Parasitology from './../../pages/Parasitology';
import Zoology from './../../pages/Zoology';

const Course = () =>
{
    return (
        <>
            <Biochemistry />
            <Biotechnology />
            <Botany />
            <CellBiology />
            <Genetics />
            <Microbiology />
            <Parasitology />
            <Zoology />
        </>
    );
};

export default Course;