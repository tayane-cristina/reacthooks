import { useEffect, useState } from "react";

const HookUseEffect = () => {

  const [number, setNumber] = useState(1)
  const [secondNumber, setSecondNumber] = useState(0)

  useEffect(() => {
    console.log("Este texto será executado sempre que a página for renderizada.")
  })

  useEffect(() => {
    console.log("Este texto será renderizado apenas uma vez, assim que a página for renderizada")
  }, [])

  useEffect(() => {
    console.log(`Este array foi executado ${number}x, que quivale ao número de vezes que o estado do primeiro número foi alterado`)
  }, [number])

  const changeNumber = () => {
    setNumber(number + 1)
  };

  const changeSecondNumber = () => {
    setSecondNumber(secondNumber + 2 )
  };


  return (
    <div>
        <h1>UseEffect</h1>

        <ul>
            <li>Utilizado para realizar alterações desde o Dom ate requisições HTTP;</li>
            <li>Utilizado para controlar quantas vezes algo acontece;</li>
            <li>Sua sintaxe é formada por uma função a ser executada e um array de dependências;</li>
            <li>Ao deixar o array de dependências vazio, o useEffect é executado apenas uma vez, nesse cenário a lógica dentro 
              da função do useEffect é realizada assim que a página for carregada a primeira vez
            </li>
            <li>Quando utilizado o array de dependências, o useeffect será executado toda vez que houver alteração no item que está dentro do array de dependências</li>
        </ul>

        <p><strong>Primeiro exemplo: UseEffect simples, sem array de dependências</strong></p>
        <br />
        <p>Clique no botão abaixo, e veja as atualizações no console</p>
        <p>Número no primeiro exemplo: {number}</p>
        <button onClick={changeNumber}>Click here</button>
        <hr />

        <p><strong>Segundo exemplo: UseEffect com array de dependências</strong></p>
        <br />
        <p>Clique no botão abaixo, e veja as atualizações no console</p>
        <p>Número no segundo exemplo: {secondNumber}</p>
        <button onClick={changeSecondNumber}>Click here</button>

        <p>
          <strong>
            Nos dois exemplos que vimos, você pode observar no console que o texto do primeiro useEffect é repetido sempre que a página sofre alguma atualização,
            enquanto que o texto do segundo useeffect é renderizado apenas uma única vez, e isso se deve pelo nosso array de dependências vazio.
           </strong>
        </p>
        <hr/>

        <p>
          No nosso terceito exemplo, observe o console e veja que sempre que o botão que altera o estado do primeiro número for clicado, um useEffect será executado, 
          porém, essa execução não acontece ao clicar no botão que altera o estado do segundo número, e isso se deve ao fato de que apenas o estado do primerio número está sendo monitorado
          pelo nosso terceiro useEffet
        </p>
    </div>
  );
};

export default HookUseEffect;