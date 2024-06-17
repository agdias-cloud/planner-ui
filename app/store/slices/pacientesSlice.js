import { createSlice } from '@reduxjs/toolkit';
import { buscaPacientes } from '../thunks/pacientes';

const pacientesSlice = createSlice({
    name: 'pacientes',
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    extraReducers(builder) {
        builder.addCase(buscapacientes.pending, (state, action) => {
          state.isLoading = true;
          state.error  = false
        });
        builder.addCase(buscaPacientes.fulfilled, (state, action) => {

        });
        builder.addCase(buscaPacientes.error, (state, action) => {

        });
    }
})