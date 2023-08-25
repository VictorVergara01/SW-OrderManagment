import React from 'react';
import { Box, Select, MenuItem, TextField, InputAdornment, InputLabel } from '@mui/material';

const FiltersContainer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                // justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 2,
            }}
        >
            {/* Select Filter */}
            <InputLabel
                htmlFor="filter-select"
                style={{ color: 'black', fontSize: '14px', marginRight: '5px' }} // Adjust margin to add spacing
            >
                Estados
            </InputLabel>
            <Select
                id="filter-select"
                variant="outlined"
                defaultValue="all" // Set a default value
                sx={{
                    backgroundColor: '#98134F',
                    color: 'white',
                    height: '35px',
                    borderRadius: 4,
                    fontSize:12,
                }}
            >
                <MenuItem value="all">Todos</MenuItem>
                <MenuItem value="option1">Entregadas</MenuItem>
                <MenuItem value="option2">Canceladas</MenuItem>
                <MenuItem value="option3">Reprogramadas</MenuItem>
            </Select>
            <InputLabel
                htmlFor="filter-select"
                style={{ color: 'black', fontSize: '14px', marginLeft: '40px', marginRight:'5px' }} // Adjust margin to add spacing
            >
                Fecha
            </InputLabel>

            {/* Date Picker */}
            <TextField
                label=""
                type="date"
                variant="outlined"
                InputLabelProps={{ shrink: true}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <svg width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    fill="#98134F"
                                    d="M12 4a8 8 0 100 16 8 8 0 000-16zM6 12a6 6 0 1112 0 6 6 0 01-12 0z"
                                />
                            </svg>
                        </InputAdornment>
                    ),
                    sx: { backgroundColor: '#98134F',
                        borderRadius: 4,
                        height: '35px',
                        color:"white",
                        fontSize:"14px",
                    },
                    defaultValue: new Date().toISOString().slice(0, 10),
                }}
            />
        </Box>
    );
};

export default FiltersContainer;
