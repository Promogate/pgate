import { Offer } from '../@types';

export interface SetRedisCache {
  setCache(input: SetRedisCache.input): Promise<SetRedisCache.output>
}

export namespace SetRedisCache {
  export type input = {
    content: Record<string, unknown>;
    cacheKey: string;
  }

  export type output = void
}

export interface GetRedisCache {
  getCache(input: GetRedisCache.input): Promise<GetRedisCache.output>
}

export namespace GetRedisCache {
  export type input = {
    cacheKey: string;
  }

  export type output = any;
}

export interface DeleteRedisCache {
  deleteCache(input: DeleteRedisCache.Input): Promise<DeleteRedisCache.Output>
}

export namespace DeleteRedisCache {
  export type Input = {
    cacheKey: string;
  }
  export type Output = void
}