
// JSX - JavaScript + XML (HTML)
// TSX - TypeScript + JSX

/*
interface HomeProps {
  count: number;
}
*/

import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoImg} alt="Logo" />

        <h1 className="mt-14 text-white text-4xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatarExampleImg} alt="" />
          <strong className="text-gray-100 text-xl font-thin">
            <span className="text-ignite-500">+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            type="text" 
            required 
            placeholder="Qual o nome do seu bolão?" 
          />
          <button 
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar seus amigos.
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.034</span>
              <span> Bolões criados</span>
            </div>
          </div>

          <div className='w-px h-10 bg-gray-600'></div>

          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+192.847</span>
              <span> Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image 
        src={appPreviewImg} 
        alt="Dois celulares exibindo uma prévia do app" 
        quality={100}
      />
    </div>
  )
}


/*
const data = {
  "age": 30,
  "genre_fav": "Classic & Cult",
  "movie_or_series": ["Movie"],
  "genre_to_watch": "Comedies",
  "time_to_spend": 100,
  "platforms": ["Netflix"]
}

fetch('https://bj7r4fxsja.execute-api.us-east-1.amazonaws.com/pickMePost', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then( (response) => response.json())
.then((data) => console.log(data)) // output will be the required data
.catch( (error) => console.log(error))
*/


/*
export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:8080/pools/count')
  const data = await response.json()

  console.log(data)
  
  return {
    props: {
      count: data.count,
    }
  }
}
*/