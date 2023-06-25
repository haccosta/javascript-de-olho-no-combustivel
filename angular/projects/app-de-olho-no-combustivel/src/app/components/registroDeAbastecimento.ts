export interface RegistroAbastecimento {
  id?: number;
  postoGasolina: string;
  quilometragem: number;
  litrosAbastecidos: number;
  trocouCombustivel: boolean;
  tipoCombustivel: string;
  jaAbasteceuNestePosto: boolean;
}
