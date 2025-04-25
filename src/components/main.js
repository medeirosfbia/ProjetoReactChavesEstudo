
import React from 'react';
import img from '../assets/logo192.png'; // Importe a imagem desejada 


function ListGroup() {
    return (
        <>
            <div class="flex m-12 justify-center items-center flex-wrap">
                <div class="flex-1 border-r-2 border-gray-300 mx-2">
                    <h2 className="text-lg/[16px]">Que Bonita sua Roupa</h2>
                    <a href='/letras/1' className='block mx-20 my-8 text-base bg-yellow-500 hover:bg-yellow-600 p-2 rounded hover:text-white'>Ver Mais</a>
                    
                </div>
                <div class="contents">
                    <div class="flex-1 border-r-2 border-gray-300">
                    <h2 className="text-lg/[16px]">Se Você É Jovem Ainda</h2>
                    <a href='/letras/2' className='block mx-20 my-8 text-base bg-yellow-500 hover:bg-yellow-600 p-2 rounded hover:text-white'>Ver Mais</a>
                    </div>
                    <div class="flex-1">
                    <h2 className="text-lg/[16px]">Quico, Quico</h2>
                    <a href='/letras/3' className='block mx-20 my-8 text-base bg-yellow-500 hover:bg-yellow-600 p-2 rounded hover:text-white'>Ver Mais</a>
                    </div>
                </div>
            </div>
        </>
    );
}

function MainPage() {
    return (
        <div className="main-page">
            <h1 className="text-2xl/[64px] m-4">Bem-vindo à Página Principal</h1>
            <div className="container items-center justify-center text-center">
                <p className='text-lg'>Esta é a página principal do meu aplicativo React.</p>
                <img className='flex m-auto' src="https://i.pinimg.com/736x/a6/6f/97/a66f97d904c045897a03cb7b52ac7028.jpg" lt="Imagem de exemplo" />
            <h2 className='block my-5 py-4 text-xl bg-yellow-500 w-full'>MELHORES MÚSICAS DO CHAVES</h2>
                <ListGroup />
            </div>
        </div>
    );
}

export default MainPage;