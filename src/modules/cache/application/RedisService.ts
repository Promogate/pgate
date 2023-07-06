import Redis from 'ioredis';
import { DeleteRedisCache, GetRedisCache, SetRedisCache } from '../features';

export class RedisService implements SetRedisCache, GetRedisCache, DeleteRedisCache {
  redis: Redis

  constructor() {
    this.redis = new Redis(process.env.UPSTASH_REDIS_URL as string);
  }

  async setCache(input: SetRedisCache.input): Promise<SetRedisCache.output> {
    const content = JSON.stringify(input.content);
    await this.redis.set(input.cacheKey, content, 'EX', 2678400); // expires 31 days
  }

  async getCache(input: GetRedisCache.input): Promise<GetRedisCache.output> {
    const cached = await this.redis.get(input.cacheKey);
    if (!cached) return;
    const result = JSON.parse(cached);
    return result;
  }

  async deleteCache(input: DeleteRedisCache.Input): Promise<DeleteRedisCache.Output> {
    await this.redis.del(input.cacheKey) 
  }
}