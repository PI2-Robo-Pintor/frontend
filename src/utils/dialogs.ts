import Swal, { SweetAlertIcon } from "sweetalert2"
import defaultColors from '../settings/defaultSettings';

interface OptionProps {
    title: string;
    handleFunction: () => void;
}

interface ConfirmProps {
    title: string;
    handleFunction: () => void;

}

export const optionDialog = (props : OptionProps) => {
    Swal.fire({
        title: props.title,
        showCancelButton: true,
        confirmButtonColor: defaultColors.primary,
        cancelButtonColor: defaultColors.cancel,
        cancelButtonText: 'Não',
        confirmButtonText: 'Sim',
        width: 350,
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            props.handleFunction()
        }
    })
};

export const confirmDialog = (props : ConfirmProps) => {

    Swal.fire({
        title: props.title,
        width: 350,
        showCancelButton: false, 
        showConfirmButton: false,
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            props.handleFunction()
        }
    })
    Swal.showLoading()
};
