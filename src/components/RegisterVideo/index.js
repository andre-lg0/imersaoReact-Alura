import React from "react";
import { StyledRegisterVideo } from "./styles";



function useForm(propsDoForm){
    const [values, setValue]= React.useState(propsDoForm.initialValues)

    return {
        values,
        handleChange: (evento) =>{
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name;
            setValue({
                ...values,
                [name]: value,
                
            })
        },

        clearForm() {
            setValue({});

        }
    };
}

export default function RegisterVideo(){


    const formCadastro = useForm({initialValues: { titulo: "FrosPank", url:"https//youtube.."}})

    const [formVisivel,setFormVisivel] = React.useState(true);


    return (    
        <StyledRegisterVideo>
            <button className="add-video" onClick={()=> setFormVisivel(true)}> + </button>

            {formVisivel ? (
                <form onSubmit={evento => {
                    evento.preventDefault();
                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={()=> setFormVisivel(false)}> X </button>
                        <input placeholder="Titulo do Video"
                                name="titulo"
                                value={ formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                        />
                        
                        <input placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange = {formCadastro.handleChange}
                        />
                        <button type="submit"> Cadastrar</button>
                        
                    </div>
                </form>



            ) : false}
        </StyledRegisterVideo>
    )
}