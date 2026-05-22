import {Exercicio1} from './components/exercicios'
import {Exercicio2} from './components/exercicios'
import {Exercicio3} from './components/exercicios'

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>Playground de Fundamentos</h1>
      <p style={{ color: '#4a5568' }}>Analise o código-fonte e preencha as lacunas de lógica indicadas para ativar os componentes.</p>
      <Exercicio1 />
      <Exercicio2 />
      <Exercicio3 />
    </div>
  );
}
