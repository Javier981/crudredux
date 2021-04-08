import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

//muestra un alerta
export function mostrarAlerta (alerta) {
    return (dispatch) => {
        dispatch( crearAlerta(alerta) )
    }
}
const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

// Ocultar alerta
export function ocultarAlertaAction() {
    return (dispatch) => {
        dispatch( oculatarAlerta() )
    }
}

const oculatarAlerta = () => ({
    type: OCULTAR_ALERTA
})