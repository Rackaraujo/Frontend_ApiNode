import {useEffect, useState} from 'react'
import './style.css'
import Lixeira from '../../assets/lixeira.svg'
import api from '../../services/api'

function Home(){
  //let usuarios = []
  const [usuarios, setUsuarios] = useState([])

  async function getUsuarios(){
    const usuariosDaApi = await api.get('/cadastro')
    setUsuarios(usuariosDaApi.data)
    console.log(usuarios)
  }

  useEffect(()=>{
    getUsuarios()
  }, []) 

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