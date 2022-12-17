export interface IMapper<D, M> {
    toModel(entity: D): M;
  
    toDomain(dataModel: M): D;
  }
  