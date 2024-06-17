import { createAsyncThunk } from '@reduxjs/toolkit';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const buscaPacientes = createAsyncThunk(
    'pacientes/buscaPacientes',
     async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE_URL}/pacientes`)
        return response.data
      } catch (error) {
        return response.error
      }
     }
    
    
)

export { buscaPacientes }









