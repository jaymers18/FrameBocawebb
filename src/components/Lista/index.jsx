export const Lista = ({_id, nome, usuario, descricao, data_inclusao, palavras_chave}) => {
    return(
        <div className='lista'>
            <div key={_id}>
                <h1>Nome: {nome}</h1>
                <p>Usuario: {usuario}</p>
                <p>Descrição: {descricao}</p>
                <p>Data de Inclusão: {data_inclusao}</p>
                <p>Palavras-chave: {palavras_chave}</p>
            </div>
        </div>
    )
}