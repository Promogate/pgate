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