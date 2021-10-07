import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <link rel="icon" href="/delta.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <title>Delta Informática</title>
      </Head>

      <header className="flex justify-center sm:mt-2">
        <img className="transform translate-y-10" src="delta.svg" width="200" />
      </header>

      <main className="mx-auto mb-6 bg-light-black text-gray-200 rounded-2xl max-w-screen-md">
        <div className="flex justify-center">
          <div>
            <h1 className="text-4xl sm:text-5xl mt-6 pt-6 ">Delta Informática</h1>
            <div className="h-1 w-full rounded-xl bg-red-400 mb-4"></div>
          </div>
        </div>
        <h2 className="mx-auto text-center px-5 pb-6 max-w-sm">Com mais de 20 anos é a mais antiga recarga de cartuchos de Madureira</h2>
        <p className="text-4xl text-center pb-2 pt-4">Sobre nós</p>
        <img className="mx-auto pb-2 text-gray-200" width="42" src="arrow_material.svg"></img>
        <div className="flex flex-col sm:flex-row justify-around text-center">
          <div className="mx-auto mt-6 sm:m-6 p-54 pt-6 pb-4 w-72 sm:w-52 bg-lighter-black rounded-2xl">
            <p className="text-lg">Fazemos:</p>
            <p className="text-sm p-3">Recarga jato de tinta a partir de R$10</p>
            <p className="text-sm p-3">Recarga de toners a partir de R$35</p>
            <p className="text-sm p-3">Compramos cartuchos vazios</p>
            <p className="text-sm p-3">A cada 3 recargas a 4 será de graça! </p>
          </div>
          <div className="mx-auto my-6 sm:m-6 p-4 pt-6 pb-4 w-72 sm:w-56 bg-lighter-black rounded-2xl">
            <p className="text-lg">Onde nos pode encontrar:</p>
            <p className="text-sm p-4">Rua Dagmar da Fonseca, 26B</p>
            <p className="text-sm p-4 pb-6">Stand 117 - Madureira</p>
            <img className="mx-auto" src="logo-shopping.png" width="85"></img>
          </div>
          <div className="mx-auto mb-6 sm:m-6 p-4 pt-6 pb-4 w-72 sm:w-52 bg-lighter-black rounded-2xl">
            <p className="text-lg">Entre em contacto com nosco:</p>
            <p className="text-md p-4 pt-6">Tel.: 3217 8291</p>
            <p className="text-md p-4 pb-6">CEL/ZAP 97471 6827</p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly justify-around">
          <div className="w-40 sm:w-52 rounded-2xl">
            <img className="mx-auto rounded-2xl" src="img-1.jpg"></img>
          </div>
          <div className="w-40 sm:w-52 rounded-2xl">
            <img className="mx-auto rounded-2xl" src="img-2.jpg"></img>
          </div>
          <div className="hidden sm:block w-52 rounded-2xl">
            <img className="mx-auto rounded-2xl" src="img-3.jpg"></img>
          </div>
        </div>
        <p className="text-lg text-center pb-6 pt-6">Cartuchos originais ao melhor preço do mercado!</p>
        <div className="h-1 w-full bg-lighter-black rounded-xl bg-gray-200 mb-2"></div>
        <footer className="text-xs text-center pb-4 pt-2">
          <p>Design © Mint Foxes Inc. 2021 Todos os direitos reservados.</p>
        </footer>
      </main>


      <style jsx global>{`
        html,
        body {
          background-color: #151515;
          font-family: 'Poppins', sans-serif;
        }

      `}</style>
    </div>
  )
}