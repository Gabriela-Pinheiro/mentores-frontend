import { ToastContainer } from 'react-toastify';

//criado para ser reutilizado ao invés de importar o ToastContainer em cada componente que precisa exibir um toast, evitando duplicidade e mantendo a consistência do estilo do toast em toda a aplicação. NÃO IMPLEMENTADO AINDA.

export function StackableToaster({
    position,
}:any) {
    return (
        <ToastContainer 
            stacked 
            position="top-center"
            autoClose={15000}
            hideProgressBar={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    );

}