import Redis from 'ioredis';
import { SetRedisCache } from '../features';

export class RedisService implements SetRedisCache {
  redis: Redis

  constructor() {
    this.redis = new Redis(process.env.UPSTASH_REDIS_URL as string);
  }

  async setCache(input: SetRedisCache.input): Promise<SetRedisCache.output> {
    const content = JSON.stringify(input.content);
    await this.redis.set(input.id, content, 'EX', 2678400);
  }
}