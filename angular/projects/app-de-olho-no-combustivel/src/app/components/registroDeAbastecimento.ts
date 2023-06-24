export interface RegistroAbastecimento {
  id?: number;
  postoGasolina: string;
  quilometragem: number;
  litros: number;
  trocouCombustivel: boolean;
  combustivel: string;
  jaAbasteceuNestePosto: string;
}
