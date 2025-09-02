import './style.css'
import Lixeira from '../../assets/lixeira.svg'

function Home(){
  const usuarios = [{
    id: '367474ghdhks',
    nome: 'Matheus Miranda',
    idade: '22',
    email: 'matheusmiranda02@email.com'
  },{
    id: '7674d9ghkclp',
    nome: 'Jonathan Davis',
    idade: '54',
    email: 'jdevilkorn@email.com'
  }]
  return(
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' placeholder='Nome completo'/>
        <input name='idade' type='number' placeholder='Idade' min='1' step='1'/>
        <input name='email' type='email' placeholder='seuemail@exemplo.com'/>
        <button type='submit'>Cadastrar</button>
      </form>

      {usuarios.map(usuario => (
        <div key={usuario.id} className='card'>
          <div>
            <p>Nome: {usuario.nome}</p>
            <p>Idade: {usuario.idade}</p>
            <p>Email: {usuario.email}</p>
          </div>
          <button>
          <img className='lixeira' src={Lixeira} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home