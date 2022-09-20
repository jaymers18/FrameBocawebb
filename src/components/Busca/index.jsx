export const Busca = ({busca, buscaODA, lupa}) => {
    return (
        <div className = 'busca'>
            <input
                name= 'busca'
                type='text'
                value={busca}
                placeholder='Digite a sua Pesquisa Desejada'
                onChange={buscaODA}
            />
        </div>
    )
}