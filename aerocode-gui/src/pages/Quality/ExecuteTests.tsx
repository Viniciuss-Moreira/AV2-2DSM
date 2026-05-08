import { useParams, useNavigate } from 'react-router-dom';

export function ExecuteTests() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-primary font-medium text-sm transition-colors">
          &larr; Voltar para Detalhes
        </button>
      </div>
      
      <div className="bg-white p-8 rounded shadow-sm border border-gray-200 flex flex-col gap-6 items-start">
        <div>
          <h1 className="text-xl font-extrabold text-primary mb-2">Módulo de Testes - Aeronave {id}</h1>
          <p className="text-gray-600 text-sm">Realize a avaliação dos testes elétricos, hidráulicos e aerodinâmicos antes da emissão do relatório final.</p>
        </div>
        
        <div className="flex gap-4 mt-2 w-full border-b border-gray-200 pb-8">
          <button className="bg-green-600 text-white px-6 py-2 font-medium rounded hover:bg-green-700 transition-colors text-sm shadow-sm">
            APROVAR TODOS OS TESTES
          </button>
          <button className="bg-red-600 text-white px-6 py-2 font-medium rounded hover:bg-red-700 transition-colors text-sm shadow-sm">
            REPROVAR TESTES
          </button>
        </div>
        <div className="pt-2 w-full">
          <button className="bg-primary text-white px-6 py-3 font-bold rounded hover:bg-blue-900 transition-colors w-full md:w-auto shadow-sm">
            GERAR RELATÓRIO FINAL PDF
          </button>
        </div>
      </div>
    </div>
  );
}
