import * as React from 'react';
import { Box, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const data = [
    { text: "Новые звонки", statiscticaStart: 30, statiscticaEnd: 20, color: "var(--green-analytic)" },
    { text: "Качество разговоров", statisctica: 40, color: "var(--green-yellow)" },
    { text: "Конверсия в заказ", statisctica: 67, color: "var(--green-red)" },
];

const AnalyticsCalls = () => {
    return (
        <Box sx={{ display: "flex", gap: "5%", }}>{
            data.map(({ text, statisctica, color, statiscticaStart, statiscticaEnd }, i) =>
                <Box key={i} sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                    <Typography sx={{ fontSize: "14px !important", }}>
                        {text}{" "}
                        <Box component="span" sx={{ color: color }}>{statisctica ? statisctica : `${statiscticaEnd} из ${statiscticaStart} шт`}</Box>
                        <>{statisctica ? <Box component="span" sx={{ color: color }}>%</Box> : <></>}</>
                    </Typography>
                    <LinearProgress variant="determinate" value={statisctica ? statisctica : Math.floor((Number(statiscticaEnd) / Number(statiscticaStart)) * 100)} sx={(theme) => ({
                        height: 6,
                        borderRadius: 5,
                        maxWidth: "156px",
                        [`&.${linearProgressClasses.colorPrimary}`]: {
                            backgroundColor: "#DEE6F5",
                        },
                        [`& .${linearProgressClasses.bar}`]: {
                            borderRadius: 5,
                            backgroundColor: color,
                        },
                    })} />
                </Box>
            )}
        </Box>
    );
}

export default AnalyticsCalls;