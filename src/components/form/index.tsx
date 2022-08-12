import React from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './index.css';
import gerarPDF from '../gerarpdf';
import { useForm } from 'react-hook-form';

const btn = {
    marginTop: 25, 
    marginBottom: 100, 
    backgroundColor:'#00B8FF', 
    color: 'black', 
    fontWeight: 'bold'
}

export function Form(){

    /* Radions */
    const [value, setValue] = React.useState('local');
    const [camera, setCamera] = React.useState('nao');
    const [suspeito, setSuspeito] = React.useState('nao');
    const [sexo, setSexo] = React.useState('masculino');
    const [escolaridade, setEscolaridade] = React.useState('analfabeto');

    const { register, handleSubmit } = useForm();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const handleChangeCamera = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCamera((event.target as HTMLInputElement).value);
    };

    const handleChangeSuspeito = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSuspeito((event.target as HTMLInputElement).value);
    };

    const handleChangeSexo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSexo((event.target as HTMLInputElement).value);
    };
    const handleChangeEscolaridade = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEscolaridade((event.target as HTMLInputElement).value);
    };

    const guardarInfo = (e: any) => {
        e["value"] = value;
        e["camera"] = camera;
        e["suspeito"] = suspeito;
        e["sexo"] = sexo;
        e["escolaridade"] = escolaridade;
        gerarPDF(e);
    }

    /*function download(e){
    }
*/
    return (
    <form onSubmit={handleSubmit(guardarInfo)} className="content" method='post'>
        <div className='header'>
            <h1>RECOGNIÇÃO VISUOGRÁFICA DE LOCAL DE CRIME nº </h1>
            <input type={'text'} {...register("numero")} id="input-basic" required/>
            <h1>/2022</h1>
        </div>
        {/* header */}
        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center'}} >
            <RadioGroup style={{flexDirection: 'row'}} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="local" control={<Radio color='default' />} label="Vítima no local" />
                <FormControlLabel value="socorrido" control={<Radio color='default' />} label="Vítima socorrida" />
            </RadioGroup>
            {value == 'socorrido'? (<><TextField required style={{marginLeft: 15, width: '300px'}} {...register("hospital")} id="outline-basic" label="Hospital" /><br/></>): null}
        </div>
        {/* dados essenciais */}
        <div >
            <h3>Dados essenciais da ocorrência</h3>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("endereco")} id="standard-required" label="Endereço" />
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("bairro")} id="outline-basic" label="Bairro" />
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("ais")} id="outline-basic" label="AIS" />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("cidade")} id="outline-basic" label="Cidade" />
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("data")} id="outline-basic" label="Data" />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("week")} id="outline-basic" label="Dia da semana" />
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("hora")} id="outline-basic" label="Hora provável do crime" />
            </div>
            <h3 style={{marginTop: 30}}>Há câmeras de vigilância no local ou no entorno?</h3>
            <RadioGroup style={{flexDirection: 'row', justifyContent: 'center'}} aria-label="gender" name="gender1" value={camera} onChange={handleChangeCamera}>
                <FormControlLabel value="nao" control={<Radio color='default' />} label="Não" />
                <FormControlLabel value="sim" control={<Radio color='default' />} label="Sim" />
            </RadioGroup>
        </div>
        {/* Suspeitos */}
        <div>
            <h3>Suspeitos</h3>
            <RadioGroup style={{flexDirection: 'row', justifyContent: 'center'}} aria-label="gender" name="gender1" value={suspeito} onChange={handleChangeSuspeito}>
                <FormControlLabel value="nao" control={<Radio color='default' />} label="Não" />
                <FormControlLabel value="sim" control={<Radio color='default' />} label="Sim" />
            </RadioGroup>
            {suspeito == 'sim'? (<>
            <TextField required style={{marginLeft: 15, width: '300px'}} {...register("nomes")} id="outline-basic" label="Nome(s)/Cognome(s): " />
            <TextField required style={{marginLeft: 15, width: '300px'}} {...register("info")} id="outline-basic" label="Informações relevantes: " />
            </>): null}
        </div>
        {/* Dados da vítima */}
        <div>
            <h3>Dados da Vítima</h3>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("nome")} id="outline-basic" label="Nome:" />
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("dn")} id="outline-basic" label="D.N.:" />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                <TextField required style={{marginLeft: -5, width: '300px'}} {...register("filiacao")} id="outline-basic" label="Filiação:" />
                <h4 style={{marginLeft: 15, marginRight: 10}}>Sexo:</h4>
                <RadioGroup style={{flexDirection: 'row', justifyContent: 'center'}} aria-label="gender" name="gender1" value={sexo} onChange={handleChangeSexo}>
                    <FormControlLabel value="masculino" control={<Radio color='default' />} label="Masculino" />
                    <FormControlLabel value="feminino" control={<Radio color='default' />} label="Feminino" />
                </RadioGroup>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("endereco2")} id="outline-basic" label="Endereço:" />
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("bairro2")} id="outline-basic" label="Bairro:" />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("cidade2")} id="outline-basic" label="Cidade:" />
                <TextField required style={{marginLeft: 15, width: '300px'}} {...register("refe")} id="outline-basic" label="Referência:" />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', marginTop: 40}}>
                <h4 style={{marginTop: 50, marginRight: 10}}>Escolaridade:</h4>
                <RadioGroup aria-label="gender" name="gender1" value={escolaridade} onChange={handleChangeEscolaridade}>
                    <div style={{ flexDirection: 'row', display: 'flex'}}>
                        <FormControlLabel value="analfabeto" control={<Radio color='default' />} label="Analfabeto" />
                        <FormControlLabel value="e_f_incompleto" control={<Radio color='default' />} label="E.F.Incompleto" />
                        <FormControlLabel value="e_f_completo" control={<Radio color='default' />} label="E.F.Completo" />
                    </div>
                    <div style={{ flexDirection: 'row', display: 'flex'}}>
                        <FormControlLabel value="e_m_incompleto" control={<Radio color='default' />} label="E.M.Incompleto" />
                        <FormControlLabel value="e_m_completo" control={<Radio color='default' />} label="E.M.Completo" />
                        <FormControlLabel value="e_s_incompleto" control={<Radio color='default' />} label="E.S.Incompleto" />
                    </div>
                    <div style={{ flexDirection: 'row', display: 'flex'}}>
                        <FormControlLabel value="e_s_completo" control={<Radio color='default' />} label="E.S.Completo" />
                        <FormControlLabel value="nao_informado" control={<Radio color='default' />} label="Não Informado" />
                    </div>
                </RadioGroup>
            </div>
        </div>
        <Button style={btn} variant="contained" type="submit" value="Submit" color="primary">Enviar</Button>
    </form>
    
    );
}