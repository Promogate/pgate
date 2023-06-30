export interface SetRedisCache {
  setCache(input: SetRedisCache.input): Promise<SetRedisCache.output>
}

export namespace SetRedisCache {
  export type input = {
    content: Record<string, unknown>;
    id: string;
  }

  export type output = void
}

export interface GetRedisCache {
  getCache(input: GetRedisCache.input): Promise<GetRedisCache.output>
}

export namespace GetRedisCache {
  export type input = {
    id: string;
  }

  export type output = Record<string, unknown> | undefined;
}